import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate the vega-lite JSON spec below.
 * The function should return the vega-lite-api object.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/flights-2k.json"},
  "layer": [
    {
      "mark": "bar",
      "encoding": {
        "x": {"field": "distance", "bin": true},
        "y": {"aggregate": "count"}
      }
    },
    {
      "transform": [{"filter": "datum.delay < 5"}],
      "mark": "bar",
      "encoding": {
        "x": {"field": "distance", "bin": true},
        "y": {"aggregate": "count"},
        "color": {"value": "goldenrod"}
      }
    }
  ]
}
*/
