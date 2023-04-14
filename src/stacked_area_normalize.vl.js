import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 * The function should return the vega-lite-api object.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/unemployment-across-industries.json"},
  "width": 300, "height": 200,
  "mark": "area",
  "encoding": {
    "x": {
      "timeUnit": "yearmonth", "field": "date",
      "axis": {"domain": false, "format": "%Y"}
    },
    "y": {
      "aggregate": "sum", "field": "count",
      "axis": null,
      "stack": "normalize"

    },
    "color": {"field":"series", "scale":{"scheme": "category20b"}}
  }
}
*/
