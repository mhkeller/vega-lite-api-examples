import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
	return vl
		.layer(
			vl.markArea().params({ name: 'brush', select: { type: 'interval', encodings: ['x'] } }),
			vl.markArea({ color: 'goldenrod' }).transform(vl.filter({ param: 'brush' }))
		)
		.data('data/unemployment-across-industries.json')
		.encode(
			vl.x().timeUnit('yearmonth').field('date'),
			vl.y().aggregate('sum').field('count')
		)
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/unemployment-across-industries.json"},
  "encoding": {
      "x": {"timeUnit": "yearmonth", "field": "date"},
      "y": {"aggregate": "sum", "field": "count"}
  },
  "layer": [{
    "params": [{
      "name": "brush",
      "select": {"type": "interval", "encodings": ["x"]}
    }],
    "mark": "area"
  }, {
    "transform": [
      {"filter": {"param": "brush"}}
    ],
    "mark": {"type": "area", "color": "goldenrod"}
  }]
}
*/
