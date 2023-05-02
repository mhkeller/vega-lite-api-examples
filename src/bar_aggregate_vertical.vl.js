import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */
export default function chart () {
	return vl.markBar()
		.data('data/cars.json')
		.encode(
			vl.x().field('Cylinders'),
			vl.y().field('Acceleration').aggregate('mean')
		)
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/cars.json"},
  "mark": "bar",
  "encoding": {
    "x": {"field": "Cylinders"},
    "y": {"aggregate": "mean", "field": "Acceleration"}
  }
}
*/
