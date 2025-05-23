import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */
export default function chart() {
	return vl
		.markPoint()
		.data('data/seattle-weather.csv')
		.encode(
			vl.color().timeUnit('yearmonth').field('date'),
			vl.x().aggregate('mean').field('temp_max')
		)
		.toSpec();
}
/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/seattle-weather.csv"},
  "mark": "point",
  "encoding": {
    "color": {"timeUnit": "yearmonth", "field": "date"},
    "x": {"aggregate": "mean", "field": "temp_max"}
  }
}
*/
