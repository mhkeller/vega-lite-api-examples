import * as vl from 'vega-lite-api';

// Write a Node.JS function that uses the vega-lite-api library to generate the vega-lite JSON spec below. The function should return the vega-lite-api object. Call the function `chart` and export as the es6 module default export.

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
