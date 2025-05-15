import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
	return vl
		.markBar()
		.width('container')
		.height(250)
		.autosize({ type: 'fit-x', contains: 'padding' })
		.data('data/cars.json')
		.encode(
			vl.x().field('Origin'),
			vl.y().aggregate('count').title('Number of Cars')
		)
		.toSpec();
}
/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "width": "container",
  "height": 250,
  "data": {"url": "data/cars.json"},
  "mark": "bar",
  "encoding": {
    "x": {"field": "Origin"},
    "y": {"aggregate": "count", "title": "Number of Cars"}
  },
  "autosize": {"type": "fit-x", "contains": "padding"}
}
*/
