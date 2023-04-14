import * as vl from 'vega-lite-api';

// Write a Node.JS function that uses the vega-lite-api library to generate the vega-lite JSON spec below. The function should return the vega-lite-api object. Call the function `chart` and export as the es6 module default export.

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Line with center band for timeUnit",
  "data": {"url": "data/seattle-weather.csv"},
  "mark": {
    "type": "line",
    "interpolate": "monotone"
  },
  "encoding": {
    "x": {"timeUnit": "month", "field": "date", "bandPosition": 0.5},
    "y": {"aggregate": "mean", "field": "temp_max"}
  }
}

*/
