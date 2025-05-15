import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */
export default function chart() {
	return vl
		.markPoint()
		.description(
			'A scatterplot showing average horsepower and displacement for cars from different origins.'
		)
		.data('data/cars.json')
		.encode(
			vl.x().aggregate('mean').field('Horsepower'),
			vl.y().aggregate('mean').field('Displacement'),
			vl.detail().field('Origin')
		)
		.toSpec();
}
/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A scatterplot showing average horsepower and displacement for cars from different origins.",
  "data": {"url": "data/cars.json"},
  "mark": "point",
  "encoding": {
    "x": {"aggregate": "mean", "field": "Horsepower"},
    "y": {"aggregate": "mean", "field": "Displacement"},
    "detail": {"field": "Origin"}
  }
}
*/
