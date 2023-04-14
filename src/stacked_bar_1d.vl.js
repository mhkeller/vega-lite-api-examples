import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate the vega-lite JSON spec below.
 * The function should return the vega-lite-api object.
 */
export default function chart () {
	return vl
		.markBar()
		.data('data/cars.json')
		.encode(
			vl.x().aggregate('sum').field('Acceleration'),
			vl.color().field('Origin')
		)
		.toSpec();
}
/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/cars.json"},
  "mark": "bar",
  "encoding": {
    "x": {"aggregate": "sum", "field": "Acceleration"},
    "color": {"field": "Origin"}
  }
}
*/
