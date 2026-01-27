import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

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
      "axis": {"grid": false}
    },
    "y": {
      "field": "price",
      "type": "quantitative",
      "title": "Price",
      "axis": {"grid": false}
    },
    "color": {
      "field": "symbol",
      "type": "nominal",
      "legend": null
    },
    "row": {
      "field": "symbol",
      "type": "nominal",
      "title": "Symbol"
    }
  }
}
*/

export default function chart() {
	return {
		$schema: 'https://vega.github.io/schema/vega-lite/v5.json',
		description: 'Stock prices of four large companies as a small multiples of area charts.',
		transform: [{ filter: "datum.symbol !== 'GOOG'" }],
		width: 300,
		height: 40,
		data: { url: 'data/stocks.csv' },
		mark: { type: 'area' },
		encoding: {
			x: { field: 'date', type: 'temporal', title: 'Time', axis: { grid: false } },
			y: { field: 'price', type: 'quantitative', title: 'Price', axis: { grid: false } },
			color: { field: 'symbol', type: 'nominal', legend: null },
			row: { field: 'symbol', type: 'nominal', title: 'Symbol' }
		}
	};
}
