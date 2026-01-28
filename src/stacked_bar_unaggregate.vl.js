import * as vl from 'vega-lite-api';



/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {
    "values": [
      {"a": "A1", "b": 28, "c": "x"},
      {"a": "A1", "b": 23, "c": "y"},
      {"a": "A2", "b": 18, "c": "x"},
      {"a": "A2", "b": 21, "c": "y"}
    ]
  },
  "mark": {"type": "bar"},
  "encoding": {
    "x": {"field": "a", "type": "ordinal"},
    "y": {"field": "b", "type": "quantitative", "stack": "zero"},
    "color": {"field": "c", "type": "nominal"}
  }
}
*/

export default function chart() {
	const data = [
		{ a: 'A1', b: 28, c: 'x' },
		{ a: 'A1', b: 23, c: 'y' },
		{ a: 'A2', b: 18, c: 'x' },
		{ a: 'A2', b: 21, c: 'y' }
	];

	return vl
		.markBar()
		.data({ values: data })
		.encode(
			vl.x().fieldO('a'),
			vl.y().fieldQ('b').stack('zero'),
			vl.color().fieldN('c')
		)
		.toSpec();
}
