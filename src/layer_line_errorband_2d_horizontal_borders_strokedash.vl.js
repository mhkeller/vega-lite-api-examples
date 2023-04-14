import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 * The function should return the vega-lite-api object.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/cars.json"},
  "encoding": {
    "x": {"field": "Year", "timeUnit": "year"},
    "y": {
      "type": "quantitative",
      "scale": {"zero": false},
      "axis": {"title": "Miles per Gallon (95% CIs)"}
    }
  },
  "layer": [
    {
      "mark": {
        "type": "errorband",
        "extent": "ci",
        "borders": {
          "opacity": 0.5,
          "strokeDash": [6, 4]
        }
      },
      "encoding": {
        "y": {"field": "Miles_per_Gallon"}
      }
    },
    {
      "mark": "line",
      "encoding": {
        "y": {"field": "Miles_per_Gallon", "aggregate": "mean"}
      }
    }
  ]
}
*/
