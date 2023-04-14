import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 * The function should return the vega-lite-api object.
 */
export default function chart () {
	return vl
		.markBar()
		.data('data/seattle-weather.csv')
		.encode(
			vl.x().field('precipitation').bin(true),
			vl.y().aggregate('count')
		)
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/seattle-weather.csv"},
  "mark": "bar",
  "encoding": {
    "x": {"bin": true, "field": "precipitation"},
    "y": {"aggregate": "count"}
  }
}
*/
