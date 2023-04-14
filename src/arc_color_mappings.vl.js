import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 * The function should return the vega-lite-api object.
 */
export default function chart () {
	return vl
		.markArc()
		.description('A simple pie chart with embedded data.')
		.data([
			{ category: 1, value: 4 },
			{ category: 2, value: 6 },
			{ category: 3, value: 10 },
			{ category: 4, value: 3 },
			{ category: 5, value: 7 },
			{ category: 6, value: 8 }
		])
		.encode(
			vl.theta().fieldQ('value'),
			vl
				.color()
				.fieldN('category')
				.scale({
					range: ['purple', 'green', 'blue', 'yellow', 'magenta', 'brown'],
					domain: { unionWith: [5, 6] }
				})
				.sort(null)
		)
		.toSpec();
}
/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A simple pie chart with embedded data.",
  "data": {
    "values": [
      {
        "category": 1,
        "value": 4
      },
      {
        "category": 2,
        "value": 6
      },
      {
        "category": 3,
        "value": 10
      },
      {
        "category": 4,
        "value": 3
      },
      {
        "category": 5,
        "value": 7
      },
      {
        "category": 6,
        "value": 8
      }
    ]
  },
  "mark": { "type": "arc" },
  "encoding": {
    "theta": {
      "field": "value",
      "type": "quantitative"
    },
    "color": {
      "field": "category",
      "type": "nominal",
      "scale": {
        "range": [
          "purple",
          "green",
          "blue",
          "yellow",
          "magenta",
          "brown"
        ],
        "domain": {
          "unionWith": [
            5,
            6
          ]
        }
      },
      "sort": null
    }
  }
}
*/
