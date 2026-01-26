import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/seattle-weather.csv"},
  "transform": [
    {"calculate": "datum.temp_max - datum.temp_min", "as": "temp_range"}
  ],
  "mark": "line",
  "encoding": {
    "x": {
      "timeUnit": "month",
      "field": "date"
    },
    "y": {
      "aggregate": "mean",
      "field": "temp_range"
    }
  }
}
*/

export default function chart() {
	return vl
		.markLine()
		.data('data/seattle-weather.csv')
		.transform({
			calculate: 'datum.temp_max - datum.temp_min',
			as: 'temp_range'
		})
		.encode(
			vl.x().field('date').timeUnit('month'),
			vl.y().field('temp_range').aggregate('mean')
		)
		.toSpec();
}
