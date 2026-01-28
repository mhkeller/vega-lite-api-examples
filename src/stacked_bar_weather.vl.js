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
      "type": "ordinal",
      "title": "Month of the year"
    },
    "y": {
      "aggregate": "count",
      "type": "quantitative"
    },
    "color": {
      "field": "weather",
      "type": "nominal",
      "scale": {
        "domain": ["sun", "fog", "drizzle", "rain", "snow"],
        "range": ["#e7ba52", "#c7c7c7", "#aec7e8", "#1f77b4", "#9467bd"]
      },
      "title": "Weather type"
    }
  }
}
*/

export default function chart() {
	return vl
		.markBar()
		.data('data/seattle-weather.csv')
		.encode(
			vl.x().timeUnit('month').field('date').type('ordinal').title('Month of the year'),
			vl.y().aggregate('count').type('quantitative'),
			vl.color().fieldN('weather')
				.scale({
					domain: ['sun', 'fog', 'drizzle', 'rain', 'snow'],
					range: ['#e7ba52', '#c7c7c7', '#aec7e8', '#1f77b4', '#9467bd']
				})
				.title('Weather type')
		)
		.toSpec();
}
