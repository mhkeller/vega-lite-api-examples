import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/cars.json"},
  "facet": {"row": {"field": "Origin"}},
  "spec": {
    "facet": {"row": {"field": "Cylinders"}},
    "spec": {
      "mark": "point",
      "encoding": {
        "x": {"field": "Horsepower", "type": "quantitative"},
        "y": {"field": "Acceleration", "type": "quantitative"}
      }
    }
  }
}
*/
