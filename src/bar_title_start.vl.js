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
		.title({ text: 'A Simple Bar Chart', anchor: 'start' })
		.encode(vl.x().fieldN('a'), vl.y().fieldQ('b'))
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": {
    "text": "A Simple Bar Chart",
    "anchor": "start"
  },
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
    "y": {"field": "b", "type": "quantitative"}
  }
}
*/
