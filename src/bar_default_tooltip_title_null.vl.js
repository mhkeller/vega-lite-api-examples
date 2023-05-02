import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */
export default function chart () {
	return vl.markBar({ tooltip: true })
		.description('Field definition\'s title is applied to both axis title and tooltip\'s field title. Meanwhile, axis.title is specific to axis.')
		.data([
			{ a: 'A', b: 28 }, { a: 'B', b: 55 }, { a: 'C', b: 43 },
			{ a: 'D', b: 91 }, { a: 'E', b: 81 }, { a: 'F', b: 53 },
			{ a: 'G', b: 19 }, { a: 'H', b: 87 }, { a: 'I', b: 52 }
		])
		.encode(
			vl.x().fieldN('a').title(''),
			vl.y().fieldQ('b').axis({ title: null })
		).toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Field definition's title is applied to both axis title and tooltip's field title. Meanwhile, axis.title is specific to axis.",
  "data": {
    "values": [
      {"a": "A", "b": 28}, {"a": "B", "b": 55}, {"a": "C", "b": 43},
      {"a": "D", "b": 91}, {"a": "E", "b": 81}, {"a": "F", "b": 53},
      {"a": "G", "b": 19}, {"a": "H", "b": 87}, {"a": "I", "b": 52}
    ]
  },
  "mark": {"type": "bar", "tooltip": true},
  "encoding": {
    "x": {"field": "a", "type": "nominal", "title": ""},
    "y": {"field": "b", "type": "quantitative", "axis": {"title": null}}
  }
}
*/
