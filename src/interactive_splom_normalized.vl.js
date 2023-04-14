import * as vl from 'vega-lite-api';

// Write a Node.JS function that uses the vega-lite-api library to generate the vega-lite JSON spec below. The function should return the vega-lite-api object. Call the function `chart` and export as the es6 module default export.

/*
{
  "data": {"url": "data/cars.json"},
  "align": "all",
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "columns": 3,
  "concat": [
    {
      "mark": "point",
      "params": [
        {
          "name": "brush",
          "select": {
            "type": "interval",
            "resolve": "union",
            "on": "[mousedown[event.shiftKey], window:mouseup] > window:mousemove!",
            "translate": "[mousedown[event.shiftKey], window:mouseup] > window:mousemove!",
            "zoom": "wheel![event.shiftKey]"
          }
        },
        {
          "name": "grid",
          "select": {
            "type": "interval",
            "resolve": "global",
            "translate": "[mousedown[!event.shiftKey], window:mouseup] > window:mousemove!",
            "zoom": "wheel![!event.shiftKey]"
          },
          "bind": "scales"
        }
      ],
      "encoding": {
        "x": {"field": "Miles_per_Gallon", "type": "quantitative"},
        "y": {
          "field": "Horsepower",
          "type": "quantitative",
          "axis": {"minExtent": 30}
        },
        "color": {
          "condition": {"param": "brush", "field": "Origin", "type": "nominal"},
          "value": "grey"
        }
      },
      "name": "child__row_Horsepowercolumn_Miles_per_Gallon"
    },
    {
      "mark": "point",
      "params": [
        {
          "name": "brush",
          "select": {
            "type": "interval",
            "resolve": "union",
            "on": "[mousedown[event.shiftKey], window:mouseup] > window:mousemove!",
            "translate": "[mousedown[event.shiftKey], window:mouseup] > window:mousemove!",
            "zoom": "wheel![event.shiftKey]"
          }
        },
        {
          "name": "grid",
          "select": {
            "type": "interval",
            "resolve": "global",
            "translate": "[mousedown[!event.shiftKey], window:mouseup] > window:mousemove!",
            "zoom": "wheel![!event.shiftKey]"
          },
          "bind": "scales"
        }
      ],
      "encoding": {
        "x": {"field": "Acceleration", "type": "quantitative"},
        "y": {
          "field": "Horsepower",
          "type": "quantitative",
          "axis": {"minExtent": 30}
        },
        "color": {
          "condition": {"param": "brush", "field": "Origin", "type": "nominal"},
          "value": "grey"
        }
      },
      "name": "child__row_Horsepowercolumn_Acceleration"
    },
    {
      "mark": "point",
      "params": [
        {
          "name": "brush",
          "select": {
            "type": "interval",
            "resolve": "union",
            "on": "[mousedown[event.shiftKey], window:mouseup] > window:mousemove!",
            "translate": "[mousedown[event.shiftKey], window:mouseup] > window:mousemove!",
            "zoom": "wheel![event.shiftKey]"
          }
        },
        {
          "name": "grid",
          "select": {
            "type": "interval",
            "resolve": "global",
            "translate": "[mousedown[!event.shiftKey], window:mouseup] > window:mousemove!",
            "zoom": "wheel![!event.shiftKey]"
          },
          "bind": "scales"
        }
      ],
      "encoding": {
        "x": {"field": "Horsepower", "type": "quantitative"},
        "y": {
          "field": "Horsepower",
          "type": "quantitative",
          "axis": {"minExtent": 30}
        },
        "color": {
          "condition": {"param": "brush", "field": "Origin", "type": "nominal"},
          "value": "grey"
        }
      },
      "name": "child__row_Horsepowercolumn_Horsepower"
    },
    {
      "mark": "point",
      "params": [
        {
          "name": "brush",
          "select": {
            "type": "interval",
            "resolve": "union",
            "on": "[mousedown[event.shiftKey], window:mouseup] > window:mousemove!",
            "translate": "[mousedown[event.shiftKey], window:mouseup] > window:mousemove!",
            "zoom": "wheel![event.shiftKey]"
          }
        },
        {
          "name": "grid",
          "select": {
            "type": "interval",
            "resolve": "global",
            "translate": "[mousedown[!event.shiftKey], window:mouseup] > window:mousemove!",
            "zoom": "wheel![!event.shiftKey]"
          },
          "bind": "scales"
        }
      ],
      "encoding": {
        "x": {"field": "Miles_per_Gallon", "type": "quantitative"},
        "y": {
          "field": "Acceleration",
          "type": "quantitative",
          "axis": {"minExtent": 30}
        },
        "color": {
          "condition": {"param": "brush", "field": "Origin", "type": "nominal"},
          "value": "grey"
        }
      },
      "name": "child__row_Accelerationcolumn_Miles_per_Gallon"
    },
    {
      "mark": "point",
      "params": [
        {
          "name": "brush",
          "select": {
            "type": "interval",
            "resolve": "union",
            "on": "[mousedown[event.shiftKey], window:mouseup] > window:mousemove!",
            "translate": "[mousedown[event.shiftKey], window:mouseup] > window:mousemove!",
            "zoom": "wheel![event.shiftKey]"
          }
        },
        {
          "name": "grid",
          "select": {
            "type": "interval",
            "resolve": "global",
            "translate": "[mousedown[!event.shiftKey], window:mouseup] > window:mousemove!",
            "zoom": "wheel![!event.shiftKey]"
          },
          "bind": "scales"
        }
      ],
      "encoding": {
        "x": {"field": "Acceleration", "type": "quantitative"},
        "y": {
          "field": "Acceleration",
          "type": "quantitative",
          "axis": {"minExtent": 30}
        },
        "color": {
          "condition": {"param": "brush", "field": "Origin", "type": "nominal"},
          "value": "grey"
        }
      },
      "name": "child__row_Accelerationcolumn_Acceleration"
    },
    {
      "mark": "point",
      "params": [
        {
          "name": "brush",
          "select": {
            "type": "interval",
            "resolve": "union",
            "on": "[mousedown[event.shiftKey], window:mouseup] > window:mousemove!",
            "translate": "[mousedown[event.shiftKey], window:mouseup] > window:mousemove!",
            "zoom": "wheel![event.shiftKey]"
          }
        },
        {
          "name": "grid",
          "select": {
            "type": "interval",
            "resolve": "global",
            "translate": "[mousedown[!event.shiftKey], window:mouseup] > window:mousemove!",
            "zoom": "wheel![!event.shiftKey]"
          },
          "bind": "scales"
        }
      ],
      "encoding": {
        "x": {"field": "Horsepower", "type": "quantitative"},
        "y": {
          "field": "Acceleration",
          "type": "quantitative",
          "axis": {"minExtent": 30}
        },
        "color": {
          "condition": {"param": "brush", "field": "Origin", "type": "nominal"},
          "value": "grey"
        }
      },
      "name": "child__row_Accelerationcolumn_Horsepower"
    },
    {
      "mark": "point",
      "params": [
        {
          "name": "brush",
          "select": {
            "type": "interval",
            "resolve": "union",
            "on": "[mousedown[event.shiftKey], window:mouseup] > window:mousemove!",
            "translate": "[mousedown[event.shiftKey], window:mouseup] > window:mousemove!",
            "zoom": "wheel![event.shiftKey]"
          }
        },
        {
          "name": "grid",
          "select": {
            "type": "interval",
            "resolve": "global",
            "translate": "[mousedown[!event.shiftKey], window:mouseup] > window:mousemove!",
            "zoom": "wheel![!event.shiftKey]"
          },
          "bind": "scales"
        }
      ],
      "encoding": {
        "x": {"field": "Miles_per_Gallon", "type": "quantitative"},
        "y": {
          "field": "Miles_per_Gallon",
          "type": "quantitative",
          "axis": {"minExtent": 30}
        },
        "color": {
          "condition": {"param": "brush", "field": "Origin", "type": "nominal"},
          "value": "grey"
        }
      },
      "name": "child__row_Miles_per_Galloncolumn_Miles_per_Gallon"
    },
    {
      "mark": "point",
      "params": [
        {
          "name": "brush",
          "select": {
            "type": "interval",
            "resolve": "union",
            "on": "[mousedown[event.shiftKey], window:mouseup] > window:mousemove!",
            "translate": "[mousedown[event.shiftKey], window:mouseup] > window:mousemove!",
            "zoom": "wheel![event.shiftKey]"
          }
        },
        {
          "name": "grid",
          "select": {
            "type": "interval",
            "resolve": "global",
            "translate": "[mousedown[!event.shiftKey], window:mouseup] > window:mousemove!",
            "zoom": "wheel![!event.shiftKey]"
          },
          "bind": "scales"
        }
      ],
      "encoding": {
        "x": {"field": "Acceleration", "type": "quantitative"},
        "y": {
          "field": "Miles_per_Gallon",
          "type": "quantitative",
          "axis": {"minExtent": 30}
        },
        "color": {
          "condition": {"param": "brush", "field": "Origin", "type": "nominal"},
          "value": "grey"
        }
      },
      "name": "child__row_Miles_per_Galloncolumn_Acceleration"
    },
    {
      "mark": "point",
      "params": [
        {
          "name": "brush",
          "select": {
            "type": "interval",
            "resolve": "union",
            "on": "[mousedown[event.shiftKey], window:mouseup] > window:mousemove!",
            "translate": "[mousedown[event.shiftKey], window:mouseup] > window:mousemove!",
            "zoom": "wheel![event.shiftKey]"
          }
        },
        {
          "name": "grid",
          "select": {
            "type": "interval",
            "resolve": "global",
            "translate": "[mousedown[!event.shiftKey], window:mouseup] > window:mousemove!",
            "zoom": "wheel![!event.shiftKey]"
          },
          "bind": "scales"
        }
      ],
      "encoding": {
        "x": {"field": "Horsepower", "type": "quantitative"},
        "y": {
          "field": "Miles_per_Gallon",
          "type": "quantitative",
          "axis": {"minExtent": 30}
        },
        "color": {
          "condition": {"param": "brush", "field": "Origin", "type": "nominal"},
          "value": "grey"
        }
      },
      "name": "child__row_Miles_per_Galloncolumn_Horsepower"
    }
  ]
}
*/
