var APP_DATA = {
  "scenes": [
    {
      "id": "0-vista-entrada",
      "name": "vista entrada",
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
        "yaw": 0.05008336114417489,
        "pitch": 0.04294342350128133,
        "fov": 1.1678810529903434
      },
      "linkHotspots": [
        {
          "yaw": -0.1679712791544148,
          "pitch": -0.21518483225781537,
          "rotation": 0,
          "target": "1-vista-frontal"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.14993828686641741,
          "pitch": -0.549527661515782,
          "title": "<font dir=\"auto\" style=\"vertical-align: inherit;\"><font dir=\"auto\" style=\"vertical-align: inherit;\">Torre Cerro Tapado</font></font>",
          "text": "<font dir=\"auto\" style=\"vertical-align: inherit;\"><font dir=\"auto\" style=\"vertical-align: inherit;\">Tour virtual 360</font></font>"
        }
      ]
    },
    {
      "id": "1-vista-frontal",
      "name": "vista frontal",
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
          "yaw": -0.7034893982018389,
          "pitch": -0.002203528786344222,
          "rotation": 0,
          "target": "2-vista-lateral"
        },
        {
          "yaw": 0.46569054669514465,
          "pitch": -0.12316398218356994,
          "rotation": 0,
          "target": "3-vista-literal"
        },
        {
          "yaw": 2.585186510474472,
          "pitch": -0.2526056720836536,
          "rotation": 0,
          "target": "0-vista-entrada"
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
          "yaw": 0.9344675740211699,
          "pitch": -0.08620638509811585,
          "rotation": 0,
          "target": "0-vista-entrada"
        },
        {
          "yaw": 1.1438194003225313,
          "pitch": -0.0549370096049806,
          "rotation": 0,
          "target": "1-vista-frontal"
        },
        {
          "yaw": -0.5376441449544274,
          "pitch": 0.050091974661160776,
          "rotation": 0,
          "target": "3-vista-literal"
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
          "yaw": 0.875561758502009,
          "pitch": -0.18103467659944705,
          "rotation": 0,
          "target": "1-vista-frontal"
        },
        {
          "yaw": -0.3512175506684905,
          "pitch": -0.2964097142046622,
          "rotation": 0,
          "target": "0-vista-entrada"
        },
        {
          "yaw": 0.3599891164356066,
          "pitch": -0.2228948177385739,
          "rotation": 0,
          "target": "1-vista-frontal"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "cerro tapado",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
