import * as vl from 'vega-lite-api';



/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/barley.json"},
  "mark": "bar",
  "encoding": {
    "column": {"field": "year"},
    "x": {"field": "yield", "type": "quantitative", "aggregate": "sum"},
    "y": {"field": "variety", "type": "nominal"},
    "color": {"field": "site", "type": "nominal"}
  }
}
*/

export default function chart() {
	return vl
		.markBar()
		.data('data/barley.json')
		.encode(
			vl.column().field('year'),
			vl.x().fieldQ('yield').aggregate('sum'),
			vl.y().fieldN('variety'),
			vl.color().fieldN('site')
		)
		.toSpec();
}
