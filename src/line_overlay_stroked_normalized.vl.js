import * as vl from 'vega-lite-api';

// Write a Node.JS function that uses the vega-lite-api library to generate the vega-lite JSON spec below. The function should return the vega-lite-api object. Call the function `chart` and export as the es6 module default export.

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Stock prices of 5 Tech Companies over Time.",
  "data": {"url": "data/stocks.csv"},
  "layer": [
    {
      "mark": "line",
      "encoding": {
        "x": {
          "timeUnit": {"unit": "year"},
          "field": "date",
          "type": "temporal"
        },
        "y": {"aggregate": "mean", "field": "price", "type": "quantitative"},
        "color": {"field": "symbol", "type": "nominal"}
      }
    },
    {
      "mark": {"type": "point", "opacity": 1, "filled": false, "fill": "white"},
      "encoding": {
        "x": {
          "timeUnit": {"unit": "year"},
          "field": "date",
          "type": "temporal"
        },
        "y": {"aggregate": "mean", "field": "price", "type": "quantitative"},
        "color": {"field": "symbol", "type": "nominal"}
      }
    }
  ]
}
*/