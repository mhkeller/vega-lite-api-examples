import * as vl from 'vega-lite-api';

// Write a Node.JS function that uses the vega-lite-api library to generate the vega-lite JSON spec below. The function should return the vega-lite-api object. Call the function `chart` and export as the es6 module default export.

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A trellis scatterplot showing Horsepower and Miles per gallons, faceted by binned values of Acceleration.",
  "data": {"url": "data/cars.json"},
  "facet": {"row": {"field": "Acceleration", "bin": true}},
  "spec": {
    "mark": "point",
    "encoding": {
      "x": {"field": "Horsepower", "type": "quantitative"},
      "y": {"field": "Miles_per_Gallon", "type": "quantitative"}
    }
  }
}
*/
