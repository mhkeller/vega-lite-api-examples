import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart () {
	return vl
		.markBar()
		.data('data/cars.json')
		.description('A scatterplot showing horsepower and miles per gallons for various cars.')
		.encode(
			vl.x().sort({ op: 'count', order: 'descending' }).field('Cylinders'),
			vl.y().aggregate('count')
		)
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A scatterplot showing horsepower and miles per gallons for various cars.",
  "data": {"url": "data/cars.json"},
  "mark": "bar",
  "encoding": {
    "x": {"field": "Cylinders", "sort": {"op": "count", "order": "descending"}},
    "y": {"aggregate": "count"}
  }
}
*/
