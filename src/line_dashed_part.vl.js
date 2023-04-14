import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 * The function should return the vega-lite-api object.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Line chart with a dashed part created by drawing multiple connecting lines. Note that the data source contains the data point at (E, 81) twice.",
  "data": {
    "values": [
      {"a": "A", "b": 28, "predicted": false},
      {"a": "B", "b": 55, "predicted": false},
      {"a": "D", "b": 91, "predicted": false},
      {"a": "E", "b": 81, "predicted": false},
      {"a": "E", "b": 81, "predicted": true},
      {"a": "G", "b": 19, "predicted": true},
      {"a": "H", "b": 87, "predicted": true}
    ]
  },
  "mark": "line",
  "encoding": {
    "x": {"field": "a", "type": "ordinal"},
    "y": {"field": "b", "type": "quantitative"},
    "strokeDash": {"field": "predicted", "type": "nominal"}
  }
}
*/
