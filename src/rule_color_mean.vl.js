import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
	return vl
		.markRule()
		.description('Average Stock prices of 5 Tech Companies.')
		.data('data/stocks.csv')
		.encode(
			vl.y().fieldQ('price').aggregate('mean'),
			vl.size().value(2),
			vl.color().fieldN('symbol')
		)
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Average Stock prices of 5 Tech Companies.",
  "data": {"url": "data/stocks.csv"},
  "mark": "rule",
  "encoding": {
    "y": {
      "field": "price",
      "type": "quantitative",
      "aggregate": "mean"
    },
    "size": {"value": 2},
    "color": {"field": "symbol", "type": "nominal"}
  }
}
*/
