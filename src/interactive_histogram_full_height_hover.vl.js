import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/movies.json"},
  "layer": [
    {
      "params": [
        {
          "name": "hover",
          "select": {"type": "point", "on": "mouseover", "clear": "mouseout"}
        }
      ],
      "mark": {"type": "bar", "color": "#eee", "tooltip": true},
      "encoding": {
        "x": {"bin": true, "field": "IMDB Rating"},
        "opacity": {
          "condition": {"test": {"param": "hover", "empty": false}, "value": 0.5},
          "value": 0
        },
        "detail": [{"aggregate": "count"}]
      }
    },
    {
      "mark": "bar",
      "encoding": {
        "x": {"bin": true, "field": "IMDB Rating"},
        "y": {"aggregate": "count"}
      }
    }
  ]
}
*/
