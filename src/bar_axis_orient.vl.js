import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate the vega-lite JSON spec below.
 * The function should return the vega-lite-api object.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A bar chart that uses signals for axis orient.",
  "data": {
    "values": [
      {"a": "A", "b": 28},
      {"a": "B", "b": 55},
      {"a": "C", "b": 43},
      {"a": "D", "b": 91},
      {"a": "E", "b": 81},
      {"a": "F", "b": 53},
      {"a": "G", "b": 19},
      {"a": "H", "b": 87},
      {"a": "I", "b": 52}
    ]
  },
  "params": [{
    "name": "xAxisOrient",
    "value": "bottom",
    "bind": {"input": "select", "options": ["top", "bottom"]}
  },
  {
    "name": "yAxisOrient",
    "value": "left",
    "bind": {"input": "select", "options": ["left", "right"]}
  }],
  "mark": "bar",
  "encoding": {
    "x": {
      "field": "a",
      "type": "ordinal",
      "axis": {"orient": {"expr": "xAxisOrient"}}
    },
    "y": {
      "field": "b",
      "type": "quantitative",
      "axis": {"orient": {"expr": "yAxisOrient"}}
    }
  }
}
*/
