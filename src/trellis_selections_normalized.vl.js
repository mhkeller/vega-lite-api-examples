import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Anscombe's Quartet",
  "data": {"url": "data/anscombe.json"},
  "facet": {"column": {"field": "Series"}},
  "spec": {
    "mark": "circle",
    "encoding": {
      "x": {"field": "X", "type": "quantitative", "scale": {"zero": false}},
      "y": {"field": "Y", "type": "quantitative", "scale": {"zero": false}},
      "size": {"value": 100, "condition": {"param": "brush", "value": 250}},
      "color": {
        "value": "steelblue",
        "condition": {"param": "xenc", "value": "red"}
      },
      "opacity": {"value": 1}
    },
    "params": [
      {
        "name": "brush",
        "select": {
          "type": "interval",
          "encodings": ["x"],
          "resolve": "intersect",
          "on": "[mousedown[event.shiftKey], mouseup] > mousemove",
          "translate": "[mousedown[event.shiftKey], mouseup] > mousemove"
        }
      },
      {
        "name": "grid",
        "select": {
          "type": "interval",
          "resolve": "global",
          "translate": "[mousedown[!event.shiftKey], mouseup] > mousemove"
        },
        "bind": "scales"
      },
      {
        "name": "xenc",
        "select": {
          "type": "point",
          "fields": ["X"],
          "resolve": "global",
          "on": "mouseover",
          "nearest": true
        },
        "bind": {"input": "number"}
      }
    ]
  }
}
*/
