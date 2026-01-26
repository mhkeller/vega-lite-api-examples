import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
	return vl
		.markBar()
		.data('data/barley.json')
		.encode(
			vl.x().field('variety'),
			vl.y().aggregate('sum').field('yield'),
			vl.color().field('site')
		)
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/barley.json"},
  "mark": "bar",
  "encoding": {
    "x": {"field": "variety"},
    "y": {"aggregate": "sum", "field": "yield"},
    "color": {"field": "site"}
  }
}
*/
