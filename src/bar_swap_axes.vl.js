import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
  return vl
    .markBar()
    .data({
      values: [
        { a: 'C', b: 2 },
        { a: 'C', b: 7 },
        { a: 'C', b: 4 },
        { a: 'D', b: 1 },
        { a: 'D', b: 2 },
        { a: 'D', b: 6 },
        { a: 'E', b: 8 },
        { a: 'E', b: 4 },
        { a: 'E', b: 7 }
      ]
    })
    .encode(
      vl.x().aggregate('average').fieldQ('b'),
      vl.y().fieldN('a')
    )
    .toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {
    "values": [
      {"a": "C", "b": 2}, {"a": "C", "b": 7}, {"a": "C", "b": 4},
      {"a": "D", "b": 1}, {"a": "D", "b": 2}, {"a": "D", "b": 6},
      {"a": "E", "b": 8}, {"a": "E", "b": 4}, {"a": "E", "b": 7}
    ]
  },
  "mark": "bar",
  "encoding": {
    "y": {"field": "a", "type": "nominal"},
    "x": {"aggregate": "average", "field": "b", "type": "quantitative"}
  }
}
*/
