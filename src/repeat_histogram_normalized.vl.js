import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

/*
{
  "data": {"url": "data/cars.json"},
  "align": "all",
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "columns": 2,
  "concat": [
    {
      "mark": "bar",
      "encoding": {
        "x": {"field": "Horsepower", "bin": true},
        "y": {"aggregate": "count"},
        "color": {"field": "Origin"}
      },
      "name": "child__Horsepower"
    },
    {
      "mark": "bar",
      "encoding": {
        "x": {"field": "Miles_per_Gallon", "bin": true},
        "y": {"aggregate": "count"},
        "color": {"field": "Origin"}
      },
      "name": "child__Miles_per_Gallon"
    },
    {
      "mark": "bar",
      "encoding": {
        "x": {"field": "Acceleration", "bin": true},
        "y": {"aggregate": "count"},
        "color": {"field": "Origin"}
      },
      "name": "child__Acceleration"
    },
    {
      "mark": "bar",
      "encoding": {
        "x": {"field": "Displacement", "bin": true},
        "y": {"aggregate": "count"},
        "color": {"field": "Origin"}
      },
      "name": "child__Displacement"
    }
  ]
}
*/
