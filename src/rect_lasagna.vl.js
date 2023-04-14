import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "transform": [{"filter": "datum.symbol !== 'GOOG'"}],
  "width": 300,
  "height": 100,
  "data": {
    "url": "data/stocks.csv"
  },
  "mark": "rect",
  "encoding": {
    "x": {
      "timeUnit": "yearmonthdate",
      "field": "date",
      "type": "ordinal",
      "title": "Time",
      "axis": {
        "format": "%Y",
        "labelAngle": 0,
        "labelOverlap": false,
        "labelColor": {
          "condition": {
            "test": {
              "timeUnit": "monthdate",
              "field": "value",
              "equal": {"month": 1, "date": 1}
            },
            "value": "black"
          },
          "value": null
        },
        "tickColor": {
          "condition": {
            "test": {
              "timeUnit": "monthdate",
              "field": "value",
              "equal": {"month": 1, "date": 1}
            },
            "value": "black"
          },
          "value": null
        }
      }
    },
    "color": {
      "aggregate": "sum",
      "field": "price",
      "type": "quantitative",
      "title": "Price"
    },
    "y": {
      "field": "symbol",
      "type": "nominal",
      "title": null
    }
  }
}
*/
