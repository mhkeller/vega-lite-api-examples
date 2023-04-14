import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/cars.json"},
  "repeat": {
    "row": ["Horsepower", "Acceleration", "Miles_per_Gallon"],
    "column": ["Miles_per_Gallon", "Acceleration", "Horsepower"]
  },
  "spec": {
    "params": [{
      "name": "brush",
      "select": {"type": "interval", "resolve": "intersect"}
    }],
    "mark": "point",
    "encoding": {
      "x": {"field": {"repeat": "column"}, "type": "quantitative"},
      "y": {"field": {"repeat": "row"}, "type": "quantitative"},
      "color": {
        "condition": {
          "param": "brush",
          "field": "Origin", "type": "nominal"
        },
        "value": "grey"
      }
    }
  }
}
*/
