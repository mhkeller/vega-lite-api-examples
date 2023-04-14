import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 * The function should return the vega-lite-api object.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/barley.json"},
  "layer": [
    {
      "mark": {
        "type": "errorbar",
        "extent": "iqr"
      },
      "encoding": {
        "x": {
          "field": "yield",
          "type": "quantitative",
          "scale": {"zero": false}
        },
        "y": {"field": "variety", "type": "ordinal"}
      }
    },
    {
      "mark": {
        "type": "point",
        "filled": true,
        "color": "black"
      },
      "encoding": {
        "x": {
          "field": "yield",
          "type": "quantitative",
          "aggregate": "median"
        },
        "y": {"field": "variety", "type": "ordinal"}
      }
    }
  ]
}
*/
