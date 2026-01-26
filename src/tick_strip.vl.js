import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
	return vl
		.markTick()
		.description(
			'Shows the relationship between horsepower and the number of cylinders using tick marks.'
		)
		.data('data/cars.json')
		.encode(
			vl.x().fieldQ('Horsepower'),
			vl.y().fieldO('Cylinders')
		)
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Shows the relationship between horsepower and the number of cylinders using tick marks.",
  "data": {"url": "data/cars.json"},
  "mark": "tick",
  "encoding": {
    "x": {"field": "Horsepower", "type": "quantitative"},
    "y": {"field": "Cylinders", "type": "ordinal"}
  }
}
*/
