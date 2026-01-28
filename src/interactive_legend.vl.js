import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
	const industry = vl.selectPoint('industry').fields('series').bind('legend');

	return vl
		.markArea()
		.width(300)
		.height(200)
		.data('data/unemployment-across-industries.json')
		.params(industry)
		.encode(
			vl.x().timeUnit('yearmonth').field('date').axis({ domain: false, format: '%Y', tickSize: 0 }),
			vl.y().aggregate('sum').field('count').stack('center').axis(null),
			vl.color().field('series').scale({ scheme: 'category20b' }),
			vl.opacity().if(industry, vl.value(1)).value(0.2)
		)
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "width": 300, "height": 200,
  "data": {"url": "data/unemployment-across-industries.json"},
  "mark": "area",
  "params": [{
    "name": "industry",
    "select": {"type": "point", "fields": ["series"]},
    "bind": "legend"
  }],
  "encoding": {
    "x": {
      "timeUnit": "yearmonth", "field": "date",
      "axis": {"domain": false, "format": "%Y", "tickSize": 0}
    },
    "y": {
      "aggregate": "sum", "field": "count",
      "stack": "center", "axis": null
    },
    "color": {
      "field":"series",
      "scale": {"scheme": "category20b"}
    },
    "opacity": {
      "condition": {"param": "industry", "value": 1},
      "value": 0.2
    }
  }
}
*/
