import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate the vega-lite JSON spec below.
 * The function should return the vega-lite-api object.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Stock prices of 5 Tech Companies over Time with Averages.",
  "data": {"url": "data/stocks.csv"},
  "layer": [
    {
      "mark": "line",
      "encoding": {
        "x": {"field": "date", "type": "temporal"},
        "y": {"field": "price", "type": "quantitative"},
        "color": {"field": "symbol", "type": "nominal"}
      }
    },
    {
      "mark": "rule",
      "encoding": {
        "y": {"field": "price", "aggregate": "mean"},
        "size": {"value": 2},
        "color": {"field": "symbol"}
      }
    }
  ]
}
*/
