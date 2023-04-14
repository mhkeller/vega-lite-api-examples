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
    "values": [{"a": 0, "b": 28, "c": 0},
               {"a": 0, "b": 91, "c": 1},
               {"a": 1, "b": 43, "c": 0},
               {"a": 1, "b": 55, "c": 1},
               {"a": 2, "b": 81, "c": 0},
               {"a": 2, "b": 53, "c": 1},
               {"a": 3, "b": 19, "c": 0}]
  },
  "transform": [{
    "impute": "b",
      "key": "a",
      "value": 100,
      "groupby": ["c"],
      "keyvals": [4]
  }],
  "mark": "line",
  "encoding": {
    "x": {"field": "a", "type": "quantitative", "scale": {"nice": 1}},
    "y": {"field": "b", "type": "quantitative"},
    "color": {"field": "c", "type": "nominal"}
  }
}
*/
