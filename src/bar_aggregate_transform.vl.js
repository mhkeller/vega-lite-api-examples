import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */
export default function chart() {
	return vl
		.markBar()
		.data('data/cars.json')
		.transform({
			aggregate: [
				{
					op: 'mean',
					field: 'Acceleration',
					as: 'mean_acc'
				}
			],
			groupby: ['Cylinders']
		})
		.encode(
			vl.x().fieldO('Cylinders'),
			vl.y().fieldQ('mean_acc')
		)
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": { "url": "data/cars.json" },
  "transform": [
    {
      "aggregate": [{
       "op": "mean",
       "field": "Acceleration",
       "as": "mean_acc"
      }],
      "groupby": ["Cylinders"]
    }
  ],
  "mark": "bar",
  "encoding": {
    "x": { "field": "Cylinders", "type": "ordinal" },
    "y": { "field": "mean_acc", "type": "quantitative" }
  }
}
*/
