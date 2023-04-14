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
      "mark": "point",
      "encoding": {
        "x": {
          "field": "Horsepower",
          "type": "quantitative"
        },
        "y": {
          "field": "Miles_per_Gallon",
          "type": "quantitative"
        }
      }
    },
    {
      "mark": {
        "type": "errorband",
        "extent": "stdev"
      },
      "encoding": {
        "y": {
          "field": "Miles_per_Gallon",
          "type": "quantitative",
          "title": "Miles per Gallon"
        }
      }
    }
  ]
}
*/
