import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 * The function should return the vega-lite-api object.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "width": 300,
  "height": 200,
  "params": [
    {
      "name": "interpolate", "value": "linear",
      "bind": {
        "input": "select",
        "options": [
          "basis",
          "cardinal",
          "catmull-rom",
          "linear",
          "monotone",
          "natural",
          "step",
          "step-after",
          "step-before"
        ]
      }
    },
    {
      "name": "tension", "value": 0,
      "bind": {"input": "range", "min": 0, "max": 1, "step": 0.05}
    }
  ],
  "data": {
    "values": [
        {"u": 1, "v": 28}, {"u": 2, "v": 55},
        {"u": 3, "v": 42}, {"u": 4, "v": 34},
        {"u": 5, "v": 36}, {"u": 6, "v": 48}
      ]
  },
  "mark": {
    "type": "area",
    "interpolate": {"expr": "interpolate"},
    "tension": {"expr": "tension"}
  },
  "encoding": {
    "x": {
      "field": "u",
      "type": "quantitative"
    },
    "y": {
      "field": "v",
      "type": "quantitative"
    }
  }
}
*/
