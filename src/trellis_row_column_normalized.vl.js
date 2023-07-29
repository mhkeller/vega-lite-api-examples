import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/cars.json"},
  "facet": {"row": {"field": "Cylinders"}, "column": {"field": "Origin"}},
  "spec": {
    "mark": "point",
    "encoding": {
      "x": {"field": "Horsepower", "type": "quantitative"},
      "y": {"field": "Miles_per_Gallon", "type": "quantitative"},
      "color": {"field": "Cylinders", "type": "nominal"},
      "shape": {"field": "Origin", "type": "nominal"}
    }
  }
}
*/
