import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
	return {
		$schema: 'https://vega.github.io/schema/vega-lite/v5.json',
		data: { url: 'data/cars.json' },
		encoding: { x: { field: 'Year', timeUnit: 'year' } },
		layer: [
			{
				mark: { type: 'errorband', extent: 'ci' },
				encoding: {
					y: {
						field: 'Miles_per_Gallon',
						type: 'quantitative',
						title: 'Mean of Miles per Gallon (95% CIs)'
					}
				}
			},
			{
				mark: { type: 'line' },
				encoding: { y: { aggregate: 'mean', field: 'Miles_per_Gallon' } }
			}
		]
	};
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/cars.json"},
  "encoding": {
    "x": {
      "field": "Year",
      "timeUnit": "year"
    }
  },
  "layer": [
    {
      "mark": {"type": "errorband", "extent": "ci"},
      "encoding": {
        "y": {
          "field": "Miles_per_Gallon",
          "type": "quantitative",
          "title": "Mean of Miles per Gallon (95% CIs)"
        }
      }
    },
    {
      "mark": "line",
      "encoding": {
        "y": {
          "aggregate": "mean",
          "field": "Miles_per_Gallon"
        }
      }
    }
  ]
}
*/
