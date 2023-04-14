import * as vl from 'vega-lite-api';

// Write a Node.JS function that uses the vega-lite-api library to generate the vega-lite JSON spec below. The function should return the vega-lite-api object. Call the function `chart` and export as the es6 module default export.

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Stock price mean per quarter broken down by years.",
  "data": {"url": "data/stocks.csv"},
  "facet": {"column": {"field": "date", "timeUnit": "year"}},
  "spec": {
    "mark": "line",
    "encoding": {
      "x": {"timeUnit": "quarter", "field": "date", "type": "ordinal"},
      "y": {"field": "price", "type": "quantitative", "aggregate": "mean"},
      "color": {"field": "symbol", "type": "nominal"}
    }
  }
}
*/