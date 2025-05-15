import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
	return vl
		.markBar()
		.width(300)
		.height(50)
		.data('data/flights-5k.json')
		.encode(
			vl
				.x()
				.fieldQ('delay')
				.bin({ maxbins: 100, minstep: 1 })
				.axis({
					title: 'delay',
					titleAnchor: 'start',
					format: 'd'
				})
		)
		.config({ view: { stroke: null } })
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/flights-5k.json"},
  "mark": {"type": "bar"},
  "encoding": {
    "x": {
      "field": "delay",
      "type": "quantitative",
      "bin": {"maxbins": 100, "minstep": 1},
      "axis": {"title": "delay", "titleAnchor": "start", "format": "d"}
    }
  },
  "width": 300,
  "height": 50,
  "config": {"view": {"stroke": null}}
}
*/
