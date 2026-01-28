import * as vl from 'vega-lite-api';



/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/barley.json"},
  "mark": "bar",
  "encoding": {
    "x": {"aggregate": "sum", "field": "yield"},
    "y": {"field": "variety"},
    "color": {"field": "site"},
    "order": {"aggregate": "sum", "field": "yield"}
  }
}
*/

export default function chart() {
	return vl
		.markBar()
		.data('data/barley.json')
		.encode(
			vl.x().aggregate('sum').field('yield'),
			vl.y().field('variety'),
			vl.color().field('site'),
			vl.order().aggregate('sum').field('yield')
		)
		.toSpec();
}
