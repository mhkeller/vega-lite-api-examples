import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */
export default function chart() {
	return vl
		.markBar()
		.description(
			'A bar chart that directly encodes color names in the data.'
		)
		.data([
			{
				color: 'red',
				b: 28
			},
			{
				color: 'green',
				b: 55
			},
			{
				color: 'blue',
				b: 43
			}
		])
		.encode(
			vl.x().fieldN('color'),
			vl.y().fieldQ('b'),
			vl.color().fieldN('color').scale(null)
		)
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A bar chart that directly encodes color names in the data.",
  "data": {
    "values": [
      {
        "color": "red",
        "b": 28
      },
      {
        "color": "green",
        "b": 55
      },
      {
        "color": "blue",
        "b": 43
      }
    ]
  },
  "mark": "bar",
  "encoding": {
    "x": {
      "field": "color",
      "type": "nominal"
    },
    "y": {
      "field": "b",
      "type": "quantitative"
    },
    "color": {
      "field": "color",
      "type": "nominal",
      "scale": null
    }
  }
}
*/
