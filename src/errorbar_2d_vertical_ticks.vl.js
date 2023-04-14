import * as vl from 'vega-lite-api';

// Write a Node.JS function that uses the vega-lite-api library to generate the vega-lite JSON spec below. The function should return the vega-lite-api object. Call the function `chart` and export as the es6 module default export.

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/cars.json"},
  "mark": {
    "type": "errorbar",
    "extent": "ci",
    "ticks": true
  },
  "encoding": {
    "y": {
      "field": "Miles_per_Gallon",
      "type": "quantitative",
      "scale": {"zero": false},
      "title": "Miles per Gallon (95% CIs)"
    },
    "x": {"timeUnit": "year", "field": "Year"}
  }
}

*/
