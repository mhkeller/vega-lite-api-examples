import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
	return {
		$schema: 'https://vega.github.io/schema/vega-lite/v5.json',
		description:
			'A vertical box plot showing median, min, and max body mass of penguins.',
		data: { url: 'data/cars.json' },
		encoding: {
			x: { field: 'Cylinders', type: 'nominal' },
			xOffset: { field: 'Origin', type: 'nominal' }
		},
		layer: [
			{
				mark: { type: 'bar' },
				encoding: {
					y: {
						aggregate: 'mean',
						field: 'Acceleration',
						type: 'quantitative'
					},
					color: { field: 'Origin', type: 'nominal' }
				}
			},
			{
				mark: { type: 'tick', color: 'black' },
				encoding: { y: { datum: 10 } }
			}
		]
	};
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A vertical box plot showing median, min, and max body mass of penguins.",
  "data": {"url": "data/cars.json"},
  "encoding": {
    "x": {"field": "Cylinders", "type": "nominal"},
    "xOffset": {"field": "Origin", "type": "nominal"}
  },
  "layer": [{
    "mark": "bar",
    "encoding": {
      "y": {
        "aggregate": "mean",
        "field": "Acceleration",
        "type": "quantitative"
      },
      "color": {"field": "Origin", "type": "nominal"}
    }
  },{
    "mark": {"type": "tick", "color": "black"},
    "encoding": {
      "y": {
        "datum": 10
      }
    }
  }]
}
*/
