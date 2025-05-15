import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
	return vl
		.markBoxplot({ invalid: 'filter' })
		.data({
			values: [
				{ a: 'null', b: 28 },
				{ a: 33, b: 55 },
				{ a: 33, b: 43 },
				{ a: 'null', b: 91 },
				{ a: 'null', b: 81 },
				{ a: 'null', b: 53 }
			]
		})
		.encode(
			vl.x().fieldQ('a').axis({ labelAngle: 0 }),
			vl.y().fieldQ('b')
		)
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {
    "values": [
      {"a": "null", "b": 28}, {"a": 33, "b": 55}, {"a": 33, "b": 43},
      {"a": "null", "b": 91}, {"a": "null", "b": 81}, {"a": "null", "b": 53}
    ]
  },
  "mark": {"type": "boxplot", "invalid": "filter"},
  "encoding": {
    "x": {"field": "a", "type": "quantitative", "axis": {"labelAngle": 0}},
    "y": {"field": "b", "type": "quantitative"}
  }
}
*/
