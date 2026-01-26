import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
	return vl
		.markLine()
		.data('data/seattle-weather.csv')
		.encode(
			vl.x().timeUnit('yearmonth').field('date'),
			vl.y().aggregate('max').field('temp_max')
		)
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/seattle-weather.csv"},
  "mark": "line",
  "encoding": {
    "x": {"timeUnit": "yearmonth", "field": "date"},
    "y": {"aggregate": "max", "field": "temp_max"}
  }
}
*/
