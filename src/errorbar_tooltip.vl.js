import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
	return vl
		.markErrorbar()
		.data('data/barley.json')
		.encode(
			vl.x().fieldQ('yield').scale({ zero: false }),
			vl.y().fieldO('variety'),
			vl.tooltip().fieldO('variety')
		)
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {
    "url": "data/barley.json"
  },
  "mark": "errorbar",
  "encoding": {
    "x": {
      "field": "yield",
      "type": "quantitative",
      "scale": {
        "zero": false
      }
    },
    "y": {
      "field": "variety",
      "type": "ordinal"
    },
    "tooltip": {
      "field": "variety",
      "type": "ordinal"
    }
  }
}
*/
