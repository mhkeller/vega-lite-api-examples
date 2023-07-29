import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart () {
	return vl
		.markBar()
		.data({
			values: [
				{ a: 'A', b: -28 },
				{ a: 'B', b: 55 },
				{ a: 'C', b: -33 },
				{ a: 'D', b: 91 },
				{ a: 'E', b: 81 },
				{ a: 'F', b: 53 },
				{ a: 'G', b: -19 },
				{ a: 'H', b: 87 },
				{ a: 'I', b: 52 }
			]
		})
		.description('A bar chart with negative values. We can hide the axis domain line, and instead use a conditional grid color to draw a zero baseline.')
		.encode(
			vl.x().fieldN('a').axis({
				domain: false,
				ticks: false,
				labelAngle: 0,
				labelPadding: 4
			}),
			vl.y().fieldQ('b').axis({
				gridColor: {
					condition: { test: 'datum.value === 0', value: 'black' },
					value: '#ddd'
				}
			})
		)
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A bar chart with negative values. We can hide the axis domain line, and instead use a conditional grid color to draw a zero baseline.",
  "data": {
    "values": [
      {"a": "A", "b": -28}, {"a": "B", "b": 55}, {"a": "C", "b": -33},
      {"a": "D", "b": 91}, {"a": "E", "b": 81}, {"a": "F", "b": 53},
      {"a": "G", "b": -19}, {"a": "H", "b": 87}, {"a": "I", "b": 52}
    ]
  },
  "mark": "bar",
  "encoding": {
    "x": {
      "field": "a", "type": "nominal",
      "axis": {
        "domain": false,
        "ticks": false,
        "labelAngle": 0,
        "labelPadding": 4
      }
    },
    "y": {
      "field": "b", "type": "quantitative",
      "axis": {
        "gridColor": {
          "condition": {"test": "datum.value === 0", "value": "black"},
          "value": "#ddd"
        }
      }
    }
  }
}
*/
