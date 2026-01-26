import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
	return vl
		.markArea()
		.data('data/unemployment-across-industries.json')
		.width(300)
		.height(200)
		.encode(
			vl
				.x()
				.timeUnit('yearmonth')
				.field('date')
				.axis({ domain: false, format: '%Y', tickSize: 0 }),
			vl
				.y()
				.aggregate('sum')
				.field('count')
				.axis(null)
				.stack('center'),
			vl.color().field('series').scale({ scheme: 'category20b' })
		)
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "width": 300, "height": 200,
  "data": {"url": "data/unemployment-across-industries.json"},
  "mark": "area",
  "encoding": {
    "x": {
      "timeUnit": "yearmonth", "field": "date",
      "axis": {"domain": false, "format": "%Y", "tickSize": 0}
    },
    "y": {
      "aggregate": "sum", "field": "count",
      "axis": null,
      "stack": "center"
    },
    "color": {"field":"series", "scale":{"scheme": "category20b"}}
  }
}
*/
