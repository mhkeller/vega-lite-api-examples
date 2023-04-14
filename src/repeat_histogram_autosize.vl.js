import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate the vega-lite JSON spec below.
 * The function should return the vega-lite-api object.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "repeat": ["Horsepower", "Miles_per_Gallon"],
  "columns": 1,
  "spec": {
    "data": {"url": "data/cars.json"},
    "mark": "bar",
    "encoding": {
      "x": {
        "field": {"repeat": "repeat"},
        "bin": true
      },
      "y": {"aggregate": "count"}
    }
  },
  "autosize": {"type": "fit-x", "contains": "padding"}
}
*/
