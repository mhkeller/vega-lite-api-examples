import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */
export default function chart () {
	return vl
		.markCircle()
		.description('Using the field "c" as the color scale\'s range. Note that this only works if there is a 1:1 mapping between the color domain field (`l`) and the range field (`c`).')
		.data([
			{ y: 'X', l: 'A', c: 'red' },
			{ y: 'Y', l: 'B', c: 'blue' },
			{ y: 'Z', l: 'C', c: 'green' }
		])
		.encode(
			vl.y().fieldN('y'),
			vl
				.color()
				.fieldN('l')
				.scale({ range: { field: 'c' } })
		)
		.toSpec();
}
/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Using the field \"c\" as the color scale's range. Note that this only works if there is a 1:1 mapping between the color domain field (`l`) and the range field (`c`).",
  "mark": { "type": "circle" },
  "encoding": {
    "y": {
      "type": "nominal",
      "field": "y"
    },
    "color": {
      "type": "nominal",
      "field": "l",
      "scale": {"range": {"field": "c"}}
    }
  },
  "data": {"values":[
    {"y": "X", "l": "A", "c": "red"},
    {"y": "Y", "l": "B", "c": "blue"},
    {"y": "Z", "l": "C", "c": "green"}
  ]}
}
*/
