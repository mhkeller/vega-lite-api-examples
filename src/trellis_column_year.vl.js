import * as vl from 'vega-lite-api';



/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Stock price mean per quarter broken down by years.",
  "data": {"url": "data/stocks.csv"},
  "mark": "line",
  "encoding": {
    "x": {"timeUnit": "quarter", "field": "date", "type": "ordinal"},
    "y": {"field": "price", "type": "quantitative", "aggregate": "mean"},
    "color": {"field": "symbol", "type": "nominal"},
    "column": {"field": "date", "timeUnit": "year"}
  }
}
*/

export default function chart() {
	return vl
		.markLine()
		.description('Stock price mean per quarter broken down by years.')
		.data('data/stocks.csv')
		.encode(
			vl.x().timeUnit('quarter').field('date').type('ordinal'),
			vl.y().fieldQ('price').aggregate('mean'),
			vl.color().fieldN('symbol'),
			vl.column().field('date').timeUnit('year')
		)
		.toSpec();
}
