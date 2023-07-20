import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
  return vl
    .markTick()
    .data({values: [28, 55, 28, 91, 81, 55, 19, 81, 52]})
    .encode(
      vl.y().aggregate('mean').field('data'),
      vl.tooltip().field('data')
    )
    .toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"values": [28, 55, 28, 91, 81, 55, 19, 81, 52]},
  "mark": "tick",
  "encoding": {
    "y": {"field": "data", "aggregate": "mean"},
    "tooltip": {"field": "data"}
  }
}
*/
