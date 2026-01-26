import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
	return {
		$schema: 'https://vega.github.io/schema/vega-lite/v5.json',
		layer: [
			{
				data: { url: 'data/cars.json' },
				mark: { type: 'line' },
				encoding: {
					x: { field: 'Cylinders', type: 'ordinal' },
					y: {
						aggregate: 'max',
						field: 'Horsepower',
						type: 'quantitative'
					},
					color: { value: 'darkred' }
				}
			},
			{
				data: { url: 'data/cars.json' },
				mark: { type: 'line' },
				encoding: {
					x: { field: 'Cylinders', type: 'ordinal' },
					y: {
						aggregate: 'min',
						field: 'Horsepower',
						type: 'quantitative'
					}
				}
			}
		],
		config: { line: { point: true } }
	};
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "layer": [
    {
      "data": {"url": "data/cars.json"},
      "mark": "line",
      "encoding": {
        "x": {"field": "Cylinders", "type": "ordinal"},
        "y": {
          "aggregate": "max",
          "field": "Horsepower",
          "type": "quantitative"
        },
        "color": {"value": "darkred"}
      }
    },
    {
      "data": {"url": "data/cars.json"},
      "mark": "line",
      "encoding": {
        "x": {"field": "Cylinders", "type": "ordinal"},
        "y": {
          "aggregate": "min",
          "field": "Horsepower",
          "type": "quantitative"
        }
      }
    }
  ],
  "config": {
    "line": {"point": true}
  }
}
*/
