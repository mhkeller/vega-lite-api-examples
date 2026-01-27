import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/seattle-weather.csv"},
  "mark": {"type": "bar", "cornerRadiusTopRight": 8, "cornerRadiusBottomRight": 8},
  "encoding": {
    "y": {"timeUnit": "month", "field": "date", "type": "ordinal"},
    "x": {"aggregate": "count"},
    "color": {"field": "weather"}
  }
}
*/

export default function chart() {
	return {
		$schema: 'https://vega.github.io/schema/vega-lite/v5.json',
		data: { url: 'data/seattle-weather.csv' },
		mark: { type: 'bar', cornerRadiusTopRight: 8, cornerRadiusBottomRight: 8 },
		encoding: {
			y: { timeUnit: 'month', field: 'date', type: 'ordinal' },
			x: { aggregate: 'count' },
			color: { field: 'weather' }
		}
	};
}
