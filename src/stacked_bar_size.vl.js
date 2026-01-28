import * as vl from 'vega-lite-api';



/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/seattle-weather.csv"},
  "mark": "bar",
  "encoding": {
    "x": {
      "timeUnit": "month",
      "field": "date",
      "type": "ordinal"
    },
    "y": {
      "aggregate": "count",
      "type": "quantitative"
    },
    "size": {
      "field": "weather",
      "type": "ordinal"
    },
    "opacity": {"value": 0.5}
  }
}
*/

export default function chart() {
	return vl
		.markBar()
		.data('data/seattle-weather.csv')
		.encode(
			vl.x().timeUnit('month').field('date').type('ordinal'),
			vl.y().aggregate('count').type('quantitative'),
			vl.size().fieldO('weather'),
			vl.opacity().value(0.5)
		)
		.toSpec();
}
