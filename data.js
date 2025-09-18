var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrada",
      "name": "entrada",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.1678810529903434
      },
      "linkHotspots": [
        {
          "yaw": 0.19993405705832856,
          "pitch": -0.006959081215679674,
          "rotation": 6.283185307179586,
          "target": "1-vista-frontal"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.0590924240161943,
          "pitch": -0.525648636071157,
          "title": "<font dir=\"auto\" style=\"vertical-align: inherit;\"><font dir=\"auto\" style=\"vertical-align: inherit;\">Torre Barranco Adentro</font></font>",
          "text": "<font dir=\"auto\" style=\"vertical-align: inherit;\"><font dir=\"auto\" style=\"vertical-align: inherit;\">vista 360 turvirtual del sitio</font></font>"
        }
      ]
    },
    {
      "id": "1-vista-frontal",
      "name": "vista Frontal",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.7564375207349379,
          "pitch": -0.02178994509124621,
          "rotation": 0,
          "target": "2-vista-lateral"
        },
        {
          "yaw": 0.4469501957252806,
          "pitch": -0.07508508409936532,
          "rotation": 0,
          "target": "3-vista-literal"
        },
        {
          "yaw": -2.1391944130302036,
          "pitch": -0.08680816860652918,
          "rotation": 0,
          "target": "0-entrada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-vista-lateral",
      "name": "vista lateral",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.417716272708736,
          "pitch": -0.0041512589493102325,
          "rotation": 0,
          "target": "3-vista-literal"
        },
        {
          "yaw": 1.3399579995583544,
          "pitch": -0.06649592792495085,
          "rotation": 0,
          "target": "0-entrada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-vista-literal",
      "name": "vista literal",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.0161643451489724,
          "pitch": 0.05688988254355998,
          "rotation": 0,
          "target": "2-vista-lateral"
        },
        {
          "yaw": 0.3636855859160377,
          "pitch": -0.03359505682063357,
          "rotation": 0,
          "target": "0-entrada"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Barranco adentro",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
