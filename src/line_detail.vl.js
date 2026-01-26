import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
	return vl
		.markLine()
		.description('Stock prices of 5 Tech Companies Over Time.')
		.data('data/stocks.csv')
		.encode(
			vl.x().fieldT('date'),
			vl.y().fieldQ('price'),
			vl.detail().fieldN('symbol')
		)
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Stock prices of 5 Tech Companies Over Time.",
  "data": {"url": "data/stocks.csv"},
  "mark": "line",
  "encoding": {
    "x": {"field": "date", "type": "temporal"},
    "y": {"field": "price", "type": "quantitative"},
    "detail": {"field": "symbol", "type": "nominal"}
  }
}
*/
