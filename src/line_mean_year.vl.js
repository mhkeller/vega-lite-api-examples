import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/seattle-weather.csv"},
  "mark": "line",
  "encoding": {
    "x": {"timeUnit": "year", "field": "date"},
    "y": {"aggregate": "mean", "field": "temp_max"}
  }
}
*/

export default function chart() {
	return vl
		.markLine()
		.data('data/seattle-weather.csv')
		.encode(
			vl.x().field('date').timeUnit('year'),
			vl.y().field('temp_max').aggregate('mean')
		)
		.toSpec();
}
