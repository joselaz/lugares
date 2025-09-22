/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

(function() {
  var Marzipano = window.Marzipano;
  var bowser = window.bowser;
  var screenfull = window.screenfull;
  var data = window.APP_DATA;

  // Grab elements from DOM.
  var panoElement = document.querySelector('#pano');
  var sceneNameElement = document.querySelector('#titleBar .sceneName');
  var sceneListElement = document.querySelector('#sceneList');
  var sceneElements = document.querySelectorAll('#sceneList .scene');
  var sceneListToggleElement = document.querySelector('#sceneListToggle');
  var autorotateToggleElement = document.querySelector('#autorotateToggle');
  var fullscreenToggleElement = document.querySelector('#fullscreenToggle');

  // SOLUCIÓN DIRECTA: Configuración optimizada para zoom
  var viewerOpts = {
    controls: {
      mouseViewMode: data.settings.mouseViewMode || 'drag'
    }
  };

  var viewer = new Marzipano.Viewer(panoElement, viewerOpts);

  // Crear escenas (tu código original)
  var scenes = data.scenes.map(function(data) {
    var urlPrefix = "tiles";
    var source = Marzipano.ImageUrlSource.fromString(
      urlPrefix + "/" + data.id + "/{z}/{f}/{y}/{x}.jpg",
      { cubeMapPreviewUrl: urlPrefix + "/" + data.id + "/preview.jpg" });
    var geometry = new Marzipano.CubeGeometry(data.levels);

    var limiter = Marzipano.RectilinearView.limit.traditional(data.faceSize, 100*Math.PI/180, 120*Math.PI/180);
    var view = new Marzipano.RectilinearView(data.initialViewParameters, limiter);

    var scene = viewer.createScene({
      source: source,
      geometry: geometry,
      view: view,
      pinFirstLevel: true
    });

    // Create link hotspots.
    data.linkHotspots.forEach(function(hotspot) {
      var element = createLinkHotspotElement(hotspot);
      scene.hotspotContainer().createHotspot(element, { yaw: hotspot.yaw, pitch: hotspot.pitch });
    });

    // Create info hotspots.
    data.infoHotspots.forEach(function(hotspot) {
      var element = createInfoHotspotElement(hotspot);
      scene.hotspotContainer().createHotspot(element, { yaw: hotspot.yaw, pitch: hotspot.pitch });
    });

    return {
      data: data,
      scene: scene,
      view: view
    };
  });

  // SOLUCIÓN MEJORADA: Configuración específica de controles
  function setupZoomControls() {
    var controls = viewer.controls();
    
    // Configurar zoom más agresivo
    var zoomOptions = {
      zoomSpeed: 3.0,    // Más rápido
      zoomInLimit: 5,    // Más zoom in
      zoomOutLimit: 0.1  // Más zoom out
    };
    
    controls.setMethodOptions('zoom', zoomOptions);
    
    console.log('Controles de zoom configurados:', zoomOptions);
  }

  // SOLUCIÓN MEJORADA: Manejo robusto de fullscreen
  function handleFullscreenChange() {
    console.log('Cambio de fullscreen detectado');
    
    // Esperar un poco para que el DOM se actualice
    setTimeout(function() {
      // Actualizar tamaño del visor
      viewer.updateSize();
      
      // Forzar reinicialización de controles
      var controls = viewer.controls();
      controls.updateMethod('zoom');
      
      // Configurar opciones de zoom nuevamente
      setupZoomControls();
      
      console.log('Visor actualizado para fullscreen');
      
      // Segundo update para asegurar
      setTimeout(function() {
        viewer.updateSize();
        console.log('Actualización finalizada');
      }, 200);
    }, 150);
  }

  // Configurar fullscreen
  if (screenfull.enabled && data.settings.fullscreenButton) {
    document.body.classList.add('fullscreen-enabled');
    
    fullscreenToggleElement.addEventListener('click', function() {
      screenfull.toggle();
    });
    
    // Múltiples listeners para fullscreen
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);
    
    if (screenfull.on) {
      screenfull.on('change', handleFullscreenChange);
    }
  }

  // SOLUCIÓN ALTERNATIVA: Override de la función de zoom
  function enableManualZoom() {
    var currentView = viewer.view();
    
    // Agregar zoom manual con rueda de mouse
    panoElement.addEventListener('wheel', function(e) {
      e.preventDefault();
      
      var delta = e.deltaY > 0 ? -0.2 : 0.2;
      var currentFov = currentView.fov();
      var newFov = Math.max(0.1, Math.min(Math.PI/2, currentFov + delta));
      
      currentView.setParameters({ fov: newFov });
    }, { passive: false });
    
    console.log('Zoom manual habilitado');
  }

  // Tu código original para controles de interfaz
  var viewUpElement = document.querySelector('#viewUp');
  var viewDownElement = document.querySelector('#viewDown');
  var viewLeftElement = document.querySelector('#viewLeft');
  var viewRightElement = document.querySelector('#viewRight');
  var viewInElement = document.querySelector('#viewIn');
  var viewOutElement = document.querySelector('#viewOut');

  var velocity = 0.7;
  var friction = 3;

  var controls = viewer.controls();
  controls.registerMethod('upElement',    new Marzipano.ElementPressControlMethod(viewUpElement,     'y', -velocity, friction), true);
  controls.registerMethod('downElement',  new Marzipano.ElementPressControlMethod(viewDownElement,   'y',  velocity, friction), true);
  controls.registerMethod('leftElement',  new Marzipano.ElementPressControlMethod(viewLeftElement,   'x', -velocity, friction), true);
  controls.registerMethod('rightElement', new Marzipano.ElementPressControlMethod(viewRightElement,  'x',  velocity, friction), true);
  controls.registerMethod('inElement',    new Marzipano.ElementPressControlMethod(viewInElement,  'zoom', -1.5, friction), true);
  controls.registerMethod('outElement',   new Marzipano.ElementPressControlMethod(viewOutElement, 'zoom',  1.5, friction), true);

  // Inicialización final
  function initializeViewer() {
    setupZoomControls();
    enableManualZoom();
    
    // Configurar la escena inicial con parámetros de zoom mejorados
    switchScene(scenes[0]);
    
    console.log('Viewer inicializado con zoom mejorado');
  }

  // Modificar switchScene para asegurar zoom
  function switchScene(scene) {
    stopAutorotate();
    
    // Asegurar parámetros de vista con mejor zoom
    var viewParams = Object.assign({}, scene.data.initialViewParameters);
    scene.view.setParameters(viewParams);
    scene.scene.switchTo();
    
    startAutorotate();
    updateSceneName(scene);
    updateSceneList(scene);
    
    // Reconfigurar controles después del cambio de escena
    setTimeout(function() {
      setupZoomControls();
      viewer.updateSize();
    }, 100);
  }

  // El resto de tus funciones originales se mantienen igual...
  function sanitize(s) {
    return s.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;');
  }

  function updateSceneName(scene) {
    sceneNameElement.innerHTML = sanitize(scene.data.name);
  }

  function updateSceneList(scene) {
    for (var i = 0; i < sceneElements.length; i++) {
      var el = sceneElements[i];
      if (el.getAttribute('data-id') === scene.data.id) {
        el.classList.add('current');
      } else {
        el.classList.remove('current');
      }
    }
  }

  // ... (todas las demás funciones se mantienen igual)

  // Inicializar
  initializeViewer();

})();
