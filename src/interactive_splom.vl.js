import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "repeat": {
    "row": ["Horsepower", "Acceleration", "Miles_per_Gallon"],
    "column": ["Miles_per_Gallon", "Acceleration", "Horsepower"]
  },
  "spec": {
    "data": {"url": "data/cars.json"},
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
      "x": {"field": {"repeat": "column"}, "type": "quantitative"},
      "y": {
        "field": {"repeat": "row"},
        "type": "quantitative",
        "axis": {"minExtent": 30}
      },
      "color": {
        "condition": {
          "param": "brush",
          "field": "Origin",
          "type": "nominal"
        },
        "value": "grey"
      }
    }
  }
}
*/
