import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate the vega-lite JSON spec below.
 * The function should return the vega-lite-api object.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {
    "values": [
      {"a": "A", "b": 28},
      {"a": "B", "b": 55},
      {"a": "C", "b": 43}
    ]
  },
  "layer": [{
    "mark": "bar",
    "encoding": {
      "y": {"field": "a", "type": "nominal"},
      "x": {"field": "b", "type": "quantitative"}
    }
  }, {
    "mark": {"type": "text", "style": "label"},
    "encoding": {
      "y": {"field": "a", "type": "nominal"},
      "x": {"field": "b", "type": "quantitative"},
      "text": {"field": "b", "type": "quantitative"}
    }
  }],
  "config": {
    "style": {
      "label": {
        "align": "left",
        "baseline": "middle",
        "dx": 3
      }
    }
  }
}
*/
