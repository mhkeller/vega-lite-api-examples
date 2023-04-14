import * as vl from 'vega-lite-api';

// Write a Node.JS function that uses the vega-lite-api library to generate the vega-lite JSON spec below. The function should return the vega-lite-api object. Call the function `chart` and export as the es6 module default export.

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/barley.json"},
  "layer": [
    {
      "mark": {
        "type": "errorbar",
        "ticks": {"color": "teal"}
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
          "aggregate": "mean"
        },
        "y": {"field": "variety", "type": "ordinal"}
      }
    }
  ]
}

*/
