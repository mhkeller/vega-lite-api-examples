import * as vl from 'vega-lite-api';



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
	return vl
		.markBar({ cornerRadiusTopRight: 8, cornerRadiusBottomRight: 8 })
		.data('data/seattle-weather.csv')
		.encode(
			vl.y().timeUnit('month').field('date').type('ordinal'),
			vl.x().aggregate('count'),
			vl.color().field('weather')
		)
		.toSpec();
}
