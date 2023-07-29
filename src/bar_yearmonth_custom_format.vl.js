import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart () {
	return vl
		.markBar()
		.data('data/seattle-weather.csv')
		.description('Custom time format on x-axis.')
		.encode(
			vl.x().timeUnit('yearmonth').field('date').axis({ format: '%B of %Y' }),
			vl.y().aggregate('mean').field('temp_max')
		)
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Custom time format on x-axis.",
  "data": {"url": "data/seattle-weather.csv"},
  "mark": "bar",
  "encoding": {
    "x": {
      "timeUnit": "yearmonth", "field": "date",
      "axis": {"format": "%B of %Y"}
    },
    "y": {"aggregate": "mean", "field": "temp_max"}
  }
}
*/
