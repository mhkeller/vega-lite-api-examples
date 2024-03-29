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
      {"ts": 1500400000000, "v": 1},
      {"ts": 1500500000000, "v": 2},
      {"ts": 1500600000000, "v": 3},
      {"ts": 1500700000000, "v": 2}
    ]
  },
  "width": 800,
  "height": 300,
  "mark": {"type": "line"},
  "encoding": {
    "x": {"field": "ts", "type": "temporal", "scale": {"domain": [1500000000000, 1500900000000]}},
    "y": {"field": "v", "type": "quantitative", "scale": {"domain": [0, 5]}}
  }
}
*/
