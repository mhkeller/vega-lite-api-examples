import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate the vega-lite JSON spec below.
 * The function should return the vega-lite-api object.
 */


/*
{
  "data": {"url": "data/cars.json"},
  "align": "all",
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "columns": 2,
  "concat": [
    {
      "mark": "point",
      "encoding": {
        "x": {"field": "Horsepower", "type": "quantitative"},
        "y": {"field": "Displacement", "type": "quantitative"},
        "color": {"field": "Origin", "type": "nominal"}
      },
      "name": "child__row_Displacementcolumn_Horsepower"
    },
    {
      "mark": "point",
      "encoding": {
        "x": {"field": "Miles_per_Gallon", "type": "quantitative"},
        "y": {"field": "Displacement", "type": "quantitative"},
        "color": {"field": "Origin", "type": "nominal"}
      },
      "name": "child__row_Displacementcolumn_Miles_per_Gallon"
    },
    {
      "mark": "point",
      "encoding": {
        "x": {"field": "Horsepower", "type": "quantitative"},
        "y": {"field": "Miles_per_Gallon", "type": "quantitative"},
        "color": {"field": "Origin", "type": "nominal"}
      },
      "name": "child__row_Miles_per_Galloncolumn_Horsepower"
    },
    {
      "mark": "point",
      "encoding": {
        "x": {"field": "Miles_per_Gallon", "type": "quantitative"},
        "y": {"field": "Miles_per_Gallon", "type": "quantitative"},
        "color": {"field": "Origin", "type": "nominal"}
      },
      "name": "child__row_Miles_per_Galloncolumn_Miles_per_Gallon"
    }
  ]
}
*/
