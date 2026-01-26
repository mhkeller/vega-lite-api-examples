import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Stock price average broken down by quarter.",
  "data": {"url": "data/stocks.csv"},
  "mark": "line",
  "encoding": {
    "x": {"field": "date", "type": "temporal", "timeUnit": "year"},
    "y": {"field": "price", "type": "quantitative", "aggregate": "mean"},
    "color": {"field": "date", "type": "temporal", "timeUnit": "quarter"}
  }
}
*/

export default function chart() {
	return vl
		.markLine()
		.description(
			'Stock price average broken down by quarter.'
		)
		.data('data/stocks.csv')
		.encode(
			vl.x().fieldT('date').timeUnit('year'),
			vl.y().fieldQ('price').aggregate('mean'),
			vl.color().fieldT('date').timeUnit('quarter')
		)
		.toSpec();
}
