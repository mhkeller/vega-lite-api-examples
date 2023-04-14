import * as vl from 'vega-lite-api';

// Write a Node.JS function that uses the vega-lite-api library to generate the vega-lite JSON spec below. The function should return the vega-lite-api object. Call the function `chart` and export as the es6 module default export.

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
