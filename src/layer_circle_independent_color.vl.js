import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
	return {
		$schema: 'https://vega.github.io/schema/vega-lite/v5.json',
		description:
			'Cars from Japan compared to all cars. Demonstrates independent legends in layers.',
		data: { url: 'data/cars.json' },
		layer: [
			{
				mark: { type: 'circle' },
				encoding: {
					x: { bin: true, field: 'Acceleration', type: 'quantitative' },
					y: { bin: true, field: 'Horsepower', type: 'quantitative' },
					size: {
						aggregate: 'count',
						type: 'quantitative',
						title: 'All Cars Count'
					}
				}
			},
			{
				transform: [{ filter: "datum.Origin === 'Japan'" }],
				mark: { type: 'circle' },
				encoding: {
					x: { bin: true, field: 'Acceleration', type: 'quantitative' },
					y: { bin: true, field: 'Horsepower', type: 'quantitative' },
					size: {
						aggregate: 'count',
						type: 'quantitative',
						title: 'Cars from Japan Count'
					},
					color: { value: 'firebrick' }
				}
			}
		],
		resolve: { legend: { size: 'independent' } }
	};
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Cars from Japan compared to all cars. Demonstrates independent legends in layers.",
  "data": {"url": "data/cars.json"},
  "layer": [
    {
      "mark": "circle",
      "encoding": {
        "x": {
          "bin": true,
          "field": "Acceleration",
          "type": "quantitative"
        },
        "y": {
          "bin": true,
          "field": "Horsepower",
          "type": "quantitative"
        },
        "size": {
          "aggregate": "count",
          "type": "quantitative",
          "title": "All Cars Count"
        }
      }
    },
    {
      "transform": [{
        "filter": "datum.Origin === 'Japan'"
      }],
      "mark": "circle",
      "encoding": {
        "x": {
          "bin": true,
          "field": "Acceleration",
          "type": "quantitative"
        },
        "y": {
          "bin": true,
          "field": "Horsepower",
          "type": "quantitative"
        },
        "size": {
          "aggregate": "count",
          "type": "quantitative",
          "title": "Cars from Japan Count"
        },
        "color": {
          "value": "firebrick"
        }
      }
    }
  ],
  "resolve": {"legend": {"size": "independent"}}
}
*/
