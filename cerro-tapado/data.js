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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.0037653221685616245,
          "pitch": -0.15684334608653572,
          "rotation": 0,
          "target": "1-vista-frontal"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.1863665938043475,
          "pitch": -0.4098476945376852,
          "title": "<font dir=\"auto\" style=\"vertical-align: inherit;\"><font dir=\"auto\" style=\"vertical-align: inherit;\">Torre Cerro Tapado</font></font>",
          "text": "<font dir=\"auto\" style=\"vertical-align: inherit;\"><font dir=\"auto\" style=\"vertical-align: inherit;\">Tur virtual en 360</font></font>"
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
          "yaw": -0.6923054425767887,
          "pitch": -0.026327165455199975,
          "rotation": 0,
          "target": "2-vista-lateral"
        },
        {
          "yaw": 0.032018146705645734,
          "pitch": -0.010138476379433214,
          "rotation": 0,
          "target": "3-vista-literal"
        },
        {
          "yaw": 1.3795108861953587,
          "pitch": 0.01147994515604367,
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
          "yaw": 0.9522947807130606,
          "pitch": -0.12596298552826113,
          "rotation": 0,
          "target": "0-entrada"
        },
        {
          "yaw": -0.49993305984321346,
          "pitch": 0.15738879980797726,
          "rotation": 0,
          "target": "3-vista-literal"
        },
        {
          "yaw": 1.2195802694748856,
          "pitch": -0.11422961871324944,
          "rotation": 0,
          "target": "1-vista-frontal"
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
          "yaw": 0.8910721766782839,
          "pitch": -0.009645154495672159,
          "rotation": 0,
          "target": "2-vista-lateral"
        },
        {
          "yaw": 0.25305715207190005,
          "pitch": -0.15947069853226736,
          "rotation": 0,
          "target": "1-vista-frontal"
        },
        {
          "yaw": -0.3227762279248658,
          "pitch": -0.20226794873279985,
          "rotation": 0,
          "target": "0-entrada"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "cerro tapado",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
