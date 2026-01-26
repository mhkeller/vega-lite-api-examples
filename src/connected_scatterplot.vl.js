import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
	return vl
		.markLine({ point: true })
		.data('data/driving.json')
		.encode(
			vl.x().fieldQ('miles').scale({ zero: false }),
			vl.y().fieldQ('gas').scale({ zero: false }),
			vl.order().field('year')
		)
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/driving.json"},
  "mark": {"type": "line", "point": true},
  "encoding": {
    "x": {
      "field": "miles", "type": "quantitative",
      "scale": {"zero": false}
    },
    "y": {
      "field": "gas", "type": "quantitative",
      "scale": {"zero": false}
    },
    "order": {"field": "year"}
  }
}
*/
