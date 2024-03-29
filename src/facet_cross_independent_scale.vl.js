import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"values": [
    {"r": "r1", "c": "c1", "a": "a1", "b": "b1"},
    {"r": "r1", "c": "c1", "a": "a2", "b": "b2"},
    {"r": "r2", "c": "c2", "a": "a1", "b": "b1"},
    {"r": "r3", "c": "c2", "a": "a3", "b": "b2"}
  ]},
  "facet": {
    "row": {"field": "r"},
    "column": {"field": "c"}
  },
  "spec": {
    "mark": "rect",
    "encoding": {
      "y": {"field": "b", "type": "nominal"},
      "x": {"field": "a", "type": "nominal"}
    }
  },
  "resolve": {
    "scale": {
      "x": "independent",
      "y": "independent"
    }
  }
}
*/
