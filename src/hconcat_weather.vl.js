import * as vl from 'vega-lite-api';

// Write a Node.JS function that uses the vega-lite-api library to generate the vega-lite JSON spec below. The function should return the vega-lite-api object. Call the function `chart` and export as the es6 module default export.

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Two horizonally concatenated charts that show a histogram of precipitation in Seattle and the relationship between min and max temperature.",
  "data": {
    "url": "data/weather.csv"
  },
  "transform": [{
    "filter": "datum.location === 'Seattle'"
  }],
  "hconcat": [
    {
      "mark": "bar",
      "encoding": {
        "x": {
          "timeUnit": "month",
          "field": "date",
          "type": "ordinal"
        },
        "y": {
          "aggregate": "mean",
          "field": "precipitation"
        }
      }
    },
    {
      "mark": "point",
      "encoding": {
        "x": {
          "field": "temp_min",
          "bin": true
        },
        "y": {
          "field": "temp_max",
          "bin": true
        },
        "size": {"aggregate": "count"}
      }
    }
  ]
}

*/
