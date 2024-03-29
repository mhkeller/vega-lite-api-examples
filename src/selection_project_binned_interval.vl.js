import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/cars.json"},
  "layer": [
    {
      "params": [{
        "name": "brush",
        "select": {"type": "interval", "encodings": ["x"]}
      }],
      "mark": "bar",
      "encoding": {
        "x": {"field": "Acceleration", "bin": true},
        "y": {"aggregate": "count"}
      }
    },
    {
      "transform": [{"filter": {"param": "brush"}}],
      "mark": "bar",
      "encoding": {
        "x": {"field": "Acceleration", "bin": true},
        "y": {"aggregate": "count"},
        "color": {"value": "goldenrod"}
      }
    }
  ]
}
*/
