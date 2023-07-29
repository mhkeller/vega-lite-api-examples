import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/barley.json"},
  "encoding": {"y": {"field": "variety", "type": "ordinal"}},
  "layer": [
    {
      "mark": {"type": "point", "filled": true},
      "encoding": {
        "x": {
          "aggregate": "mean",
          "field": "yield",
          "type": "quantitative",
          "scale": {"zero": false},
          "title": "Barley Yield"
        },
        "color": {"value": "black"}
      }
    },
    {
      "mark": {"type": "errorbar", "extent": "stdev"},
      "encoding": {
        "x": {"field": "yield", "type": "quantitative", "title": "Barley Yield"}
      }
    }
  ]
}
*/
