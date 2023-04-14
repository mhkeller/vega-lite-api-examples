import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/barley.json"},
  "layer": [
    {
      "mark": "errorbar",
      "encoding": {
        "y": {
          "field": "yield",
          "type": "quantitative",
          "scale": {"zero": false}
        }
      }
    },
    {
      "mark": {
        "type": "point",
        "filled": true,
        "color": "black"
      },
      "encoding": {
        "y": {
          "field": "yield",
          "aggregate": "mean",
          "type": "quantitative"
        }
      }
    }
  ]
}
*/
