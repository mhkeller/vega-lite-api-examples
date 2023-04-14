import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {
    "values": [
      {"key": "alpha", "foo": [1, 2], "bar": ["A", "B"]},
      {"key": "beta", "foo": [3, 4, 5], "bar": ["C", "D"]}
    ]
  },
  "transform": [{"flatten": ["foo", "bar"]}],
  "mark": "circle",
  "encoding": {
    "x": {"field": "foo", "type": "quantitative"},
    "y": {"field": "bar", "type": "nominal"},
    "color":{"field": "key", "type": "nominal"}
  }
}
*/
