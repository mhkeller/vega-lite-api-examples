import * as vl from 'vega-lite-api';

// Write a Node.JS function that uses the vega-lite-api library to generate the vega-lite JSON spec below. The function should return the vega-lite-api object. Call the function `chart` and export as the es6 module default export.

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "width": 200,
  "height": 200,
  "layer": [
    {
      "data": {"sphere": true},
      "mark": {"type": "geoshape", "fill": "aliceblue"},
      "projection": {
        "type": "orthographic",
        "scale": 100,
        "translate": [100, 100]
      }
    },
    {
      "data": {"graticule": true},
      "mark": {"type": "geoshape", "stroke": "black", "strokeWidth": 0.5},
      "projection": {
        "type": "orthographic",
        "scale": 100,
        "translate": [100, 100]
      }
    }
  ]
}
*/
