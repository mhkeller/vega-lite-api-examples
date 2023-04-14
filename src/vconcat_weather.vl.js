import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Two vertically concatenated charts that show a histogram of precipitation in Seattle and the relationship between min and max temperature.",
  "data": {
    "url": "data/weather.csv"
  },
  "transform": [{
    "filter": "datum.location === 'Seattle'"
  }],
  "vconcat": [
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
          "field": "precipitation",
          "type": "quantitative"
        }
      }
    },
    {
      "mark": "point",
      "encoding": {
        "x": {
          "field": "temp_min",
          "type": "quantitative",
          "bin": true
        },
        "y": {
          "field": "temp_max",
          "type": "quantitative",
          "bin": true
        },
        "size": {
          "aggregate": "count",
          "type": "quantitative"
        }
      }
    }
  ]
}
*/
