import * as vl from 'vega-lite-api';



/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/seattle-weather.csv"},
  "mark": {"type": "bar", "cornerRadiusTopLeft": 3, "cornerRadiusTopRight": 3},
  "encoding": {
    "x": {"timeUnit": "month", "field": "date", "type": "ordinal"},
    "y": {"aggregate": "count"},
    "color": {"field": "weather"}
  }
}
*/

export default function chart() {
	return vl
		.markBar({ cornerRadiusTopLeft: 3, cornerRadiusTopRight: 3 })
		.data('data/seattle-weather.csv')
		.encode(
			vl.x().timeUnit('month').field('date').type('ordinal'),
			vl.y().aggregate('count'),
			vl.color().field('weather')
		)
		.toSpec();
}
