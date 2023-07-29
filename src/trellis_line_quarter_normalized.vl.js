import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Stock price mean per quarter broken down by years.",
  "data": {"url": "data/stocks.csv"},
  "facet": {"column": {"field": "date", "timeUnit": "year"}},
  "spec": {
    "mark": "point",
    "encoding": {
      "x": {"timeUnit": "quarter", "field": "date", "type": "ordinal"},
      "y": {"field": "price", "type": "quantitative", "aggregate": "mean"},
      "color": {"field": "symbol", "type": "nominal"}
    }
  }
}
*/
