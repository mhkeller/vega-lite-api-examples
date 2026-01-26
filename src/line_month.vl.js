import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
	return vl
		.markLine({ interpolate: 'monotone' })
		.data('data/seattle-weather.csv')
		.encode(
			vl.x().timeUnit('month').field('date'),
			vl.y().aggregate('mean').field('temp_max')
		)
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/seattle-weather.csv"},
  "mark": {
    "type": "line",
    "interpolate": "monotone"
  },
  "encoding": {
    "x": {"timeUnit": "month", "field": "date"},
    "y": {"aggregate": "mean", "field": "temp_max"}
  }
}
*/
