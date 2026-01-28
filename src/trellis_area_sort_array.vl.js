import * as vl from 'vega-lite-api';



/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Stock prices of four large companies as a small multiples of area charts.",
  "transform": [{"filter": "datum.symbol !== 'GOOG'"}],
  "width": 300,
  "height": 40,
  "data": {"url": "data/stocks.csv"},
  "mark": "area",
  "encoding": {
      "x": {
        "field": "date",
        "type": "temporal",
        "title": "Time",
        "axis": {"format": "%Y", "grid": false}
      },
      "y": {
          "field": "price",
          "type": "quantitative",
          "title": "Price",
          "axis": {"grid": false}
      },
      "color": {"field": "symbol", "type": "nominal"},
      "row": {
          "field": "symbol",
          "type": "nominal",
          "title": "Symbol",
          "sort": ["MSFT", "AAPL", "IBM", "AMZN"]
      }
  }
}
*/

export default function chart() {
	return vl
		.markArea()
		.description('Stock prices of four large companies as a small multiples of area charts.')
		.width(300)
		.height(40)
		.data('data/stocks.csv')
		.transform(vl.filter("datum.symbol !== 'GOOG'"))
		.encode(
			vl.x().fieldT('date').title('Time').axis({ format: '%Y', grid: false }),
			vl.y().fieldQ('price').title('Price').axis({ grid: false }),
			vl.color().fieldN('symbol'),
			vl.row().fieldN('symbol').title('Symbol').sort(['MSFT', 'AAPL', 'IBM', 'AMZN'])
		)
		.toSpec();
}
