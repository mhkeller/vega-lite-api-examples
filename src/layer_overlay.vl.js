import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "layer": [
    {
      "data": {"url": "data/cars.json"},
      "mark": "line",
      "encoding": {
        "x": {"field": "Cylinders", "type": "ordinal"},
        "y": {
          "aggregate": "max",
          "field": "Horsepower",
          "type": "quantitative"
        },
        "color": {"value": "darkred"}
      }
    },
    {
      "data": {"url": "data/cars.json"},
      "mark": "line",
      "encoding": {
        "x": {"field": "Cylinders", "type": "ordinal"},
        "y": {
          "aggregate": "min",
          "field": "Horsepower",
          "type": "quantitative"
        }
      }
    }
  ],
  "config": {
    "line": {"point": true}
  }
}
*/
