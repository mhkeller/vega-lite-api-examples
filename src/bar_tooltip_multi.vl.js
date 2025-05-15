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
				{ a: 'A', b: 28 },
				{ a: 'B', b: 55 },
				{ a: 'C', b: 43 },
				{ a: 'D', b: 91 },
				{ a: 'E', b: 81 },
				{ a: 'F', b: 53 },
				{ a: 'G', b: 19 },
				{ a: 'H', b: 87 },
				{ a: 'I', b: 52 }
			]
		})
		.encode(
			vl.x().fieldN('a'),
			vl.y().fieldQ('b'),
			vl.tooltip([vl.fieldN('a'), vl.fieldQ('b')])
		)
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {
    "values": [
      {"a": "A", "b": 28}, {"a": "B", "b": 55}, {"a": "C", "b": 43},
      {"a": "D", "b": 91}, {"a": "E", "b": 81}, {"a": "F", "b": 53},
      {"a": "G", "b": 19}, {"a": "H", "b": 87}, {"a": "I", "b": 52}
    ]
  },
  "mark": "bar",
  "encoding": {
    "x": {"field": "a", "type": "nominal"},
    "y": {"field": "b", "type": "quantitative"},
    "tooltip": [
      {"field": "a", "type": "nominal"},
      {"field": "b", "type": "quantitative"}
    ]
  }
}
*/
