import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 * The function should return the vega-lite-api object.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A simple bar chart with embedded data that uses a filter and calculate.",
  "data": {
    "values": [
      {"a": "A", "b": 28},
      {"a": "B", "b": 55},
      {"a": "C", "b": 43},
      {"a": "G", "b": 19},
      {"a": "H", "b": 87},
      {"a": "I", "b": 52},
      {"a": "D", "b": 91},
      {"a": "E", "b": 81},
      {"a": "F", "b": 53}
    ]
  },
  "transform": [
    {"calculate": "2*datum.b", "as": "b2"},
    {"filter": "datum.b2 > 60"}
  ],
  "mark": "bar",
  "encoding": {
    "y": {"field": "b2", "type": "quantitative"},
    "x": {"field": "a", "type": "ordinal"}
  }
}
*/
