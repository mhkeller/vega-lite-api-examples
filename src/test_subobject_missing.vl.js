import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {
    "values":[
      {
        "rank": "1"
      },
      {
        "rank": "2",
        "options": {
          "price": 16
        }
      },
      {
        "rank": "3",
        "options": {
          "price": 17
        }
      }
    ]
  },
  "transform": [{"filter": "datum.options != null"}],
  "mark": "line",
  "encoding": {
    "x": {"field": "rank", "type": "ordinal"},
    "y": {"field": "options.price", "type": "quantitative"}
  }
}
*/
