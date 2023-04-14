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
  "repeat": {
    "row": ["Displacement", "Miles_per_Gallon"],
    "column": ["Horsepower", "Miles_per_Gallon"]
  },
  "spec": {
    "mark": "point",
    "encoding": {
      "x": {"field": {"repeat": "column"}, "type": "quantitative"},
      "y": {"field": {"repeat": "row"}, "type": "quantitative"},
      "color": {"field": "Origin", "type": "nominal"}
    }
  }
}
*/
