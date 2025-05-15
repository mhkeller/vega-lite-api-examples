import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Stock prices of 5 Tech Companies over Time.",
  "data": {"url": "data/stocks.csv"},
  "mark": "line",
  "encoding": {
    "x": {"field": "date", "type": "temporal"},
    "y": {"field": "price", "type": "quantitative"},
    "strokeDash": {"field": "symbol", "type": "nominal"}
  }
}
*/

export default function chart() {
	return vl
		.markLine()
		.description(
			'Stock prices of 5 Tech Companies over Time.'
		)
		.data('data/stocks.csv')
		.encode(
			vl.x().fieldT('date'),
			vl.y().fieldQ('price'),
			vl.strokeDash().fieldN('symbol')
		)
		.toSpec();
}
