import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */
export default function chart () {
	return vl
		.markBar()
		.data([
			{ a: 'A', b: 28 },
			{ a: 'B', b: 55 },
			{ a: 'C', b: 43 },
			{ a: 'Z', b: 91 },
			{ a: 'Y', b: 81 },
			{ a: 'X', b: 53 }
		])
		.encode(
			vl.x().fieldO('a').sort(['B', 'A', 'C']),
			vl.y().fieldQ('b')
		)
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {
    "values": [
      {"a": "A", "b": 28}, {"a": "B", "b": 55}, {"a": "C", "b": 43},
      {"a": "Z", "b": 91}, {"a": "Y", "b": 81}, {"a": "X", "b": 53}
    ]
  },
  "mark": "bar",
  "encoding": {
    "x": {"field": "a", "type": "ordinal", "sort": ["B", "A", "C"]},
    "y": {"field": "b", "type": "quantitative"}
  }
}
*/
