import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 * The function should return the vega-lite-api object.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Drag out a rectangular brush to highlight points.",
  "data": {"url": "data/cars.json"},
  "layer": [
    {
      "params": [
        {
          "name": "grid",
          "select": {
            "type": "interval",
            "translate": "[mousedown[!event.shiftKey], mouseup] > mousemove"
          },
          "bind": "scales"
        },
        {
          "name": "cyl",
          "select": {"type": "point", "fields": ["Cylinders"]},
          "bind": {"input": "range", "min": 3, "max": 8, "step": 1}
        }
      ],
      "mark": "point",
      "encoding": {
        "x": {"field": "Horsepower", "type": "quantitative"},
        "y": {"field": "Miles_per_Gallon", "type": "quantitative"},
        "color": {
          "condition": {"param": "brush", "value": "grey"},
          "field": "Cylinders",
          "type": "ordinal"
        },
        "size": {"value": 100}
      }
    },
    {
      "mark": "square",
      "params": [
        {
          "name": "brush",
          "select": {
            "type": "interval",
            "on": "[mousedown[event.shiftKey], mouseup] > mousemove",
            "translate": "[mousedown[event.shiftKey], mouseup] > mousemove"
          }
        }
      ],
      "encoding": {
        "x": {"field": "Horsepower", "type": "quantitative"},
        "y": {"field": "Miles_per_Gallon", "type": "quantitative"},
        "color": {
          "condition": {"param": "brush", "field": "Cylinders", "type": "ordinal"},
          "value": "grey"
        },
        "size": {
          "value": 50,
          "condition": {
            "param": "cyl",
            "value": 150
          }
        }
      }
    }
  ]
}
*/
