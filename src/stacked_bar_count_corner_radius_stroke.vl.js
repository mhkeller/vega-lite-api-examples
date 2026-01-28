import * as vl from 'vega-lite-api';



/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/seattle-weather.csv"},
  "mark": {"type": "bar", "cornerRadius": 10, "stroke": "black"},
  "encoding": {
    "x": {"timeUnit": "month", "field": "date", "type": "ordinal"},
    "y": {"aggregate": "count"},
    "color": {"field": "weather"}
  },
  "config": {"bar": {"strokeWidth": 2}}
}
*/

export default function chart() {
	return vl
		.markBar({ cornerRadius: 10, stroke: 'black' })
		.data('data/seattle-weather.csv')
		.encode(
			vl.x().timeUnit('month').field('date').type('ordinal'),
			vl.y().aggregate('count'),
			vl.color().field('weather')
		)
		.config({ bar: { strokeWidth: 2 } })
		.toSpec();
}
