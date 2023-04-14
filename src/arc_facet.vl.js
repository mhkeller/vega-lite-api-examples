import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */
export default function chart () {
	return vl.markArc()
		.data('data/barley.json')
		.encode(
			vl.column().field('year'),
			vl.theta().fieldQ('yield').aggregate('sum'),
			vl.color().fieldN('site')
		)
		.toSpec();
}
/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/barley.json"},
  "mark": { "type": "arc" },
  "encoding": {
    "column": {"field": "year"},
    "theta": {"field": "yield", "type": "quantitative", "aggregate": "sum"},
    "color": {"field": "site", "type": "nominal"}
  }
}
*/
