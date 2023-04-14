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
      "mark": {
        "type": "errorband",
        "extent": "ci",
        "borders": true
      },
      "encoding": {
        "y": {
          "field": "Miles_per_Gallon",
          "type": "quantitative",
          "scale": {"zero": false},
          "title": "Miles per Gallon (95% CIs)"
        },
        "x": {"timeUnit": "year", "field": "Year"},
        "color": {"value": "black"}
      }
    }
  ]
}
*/
