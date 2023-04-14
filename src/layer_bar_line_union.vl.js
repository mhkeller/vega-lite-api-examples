import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 * The function should return the vega-lite-api object.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {
    "values": [
      {"a": "A", "b": "B", "c": 28},
      {"a": "B", "b": "C", "c": 55},
      {"a": "C", "b": "D", "c": 43},
      {"a": "D", "b": "E", "c": 91},
      {"a": "E", "b": "F", "c": 81},
      {"a": "F", "b": "G", "c": 53},
      {"a": "G", "b": "H", "c": 19},
      {"a": "H", "b": "I", "c": 87},
      {"a": "I", "b": "J", "c": 52}
    ]
  },
  "layer": [
    {
      "mark": "bar",
      "encoding": {
        "x": {"field": "a", "type": "nominal"},
        "y": {"field": "c", "type": "quantitative"}
      }
    },
    {
      "mark": "line",
      "encoding": {
        "x": {"field": "b", "type": "nominal"},
        "y": {"field": "c", "type": "quantitative"},
        "color": {"value": "red"}
      }
    }
  ]
}
*/
