import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart () {
	return vl
		.markBar({ cornerRadius: { expr: 'cornerRadius' } })
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
		.description('A simple bar chart with embedded data.')
		.params([{
			name: 'cornerRadius',
			value: 0,
			bind: { input: 'range', min: 0, max: 50, step: 1 }
		}])
		.encode(
			vl.x().fieldN('a').axis({ labelAngle: 0 }),
			vl.y().fieldQ('b')
		)
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A simple bar chart with embedded data.",
  "params": [
    { "name": "cornerRadius", "value": 0,
      "bind": {"input": "range", "min": 0, "max": 50, "step": 1} }
  ],
  "data": {
    "values": [
      {"a": "A", "b": 28}, {"a": "B", "b": 55}, {"a": "C", "b": 43},
      {"a": "D", "b": 91}, {"a": "E", "b": 81}, {"a": "F", "b": 53},
      {"a": "G", "b": 19}, {"a": "H", "b": 87}, {"a": "I", "b": 52}
    ]
  },
  "mark": {
    "type": "bar",
    "cornerRadius": {"expr": "cornerRadius"}
  },
  "encoding": {
    "x": {"field": "a", "type": "nominal", "axis": {"labelAngle": 0}},
    "y": {"field": "b", "type": "quantitative"}
  }
}
*/
