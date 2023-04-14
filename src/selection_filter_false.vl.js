import * as vl from 'vega-lite-api';

// Write a Node.JS function that uses the vega-lite-api library to generate the vega-lite JSON spec below. The function should return the vega-lite-api object. Call the function `chart` and export as the es6 module default export.

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/cars.json"},
  "vconcat": [{
    "params": [{"name": "brush", "select": "interval"}],
    "mark": "point",
    "encoding": {
      "x": {"field": "Horsepower", "type": "quantitative"},
      "y": {"field": "Miles_per_Gallon", "type": "quantitative"}
    }
  }, {
    "transform": [
      {"filter": {"param": "brush", "empty": false}}
    ],
    "mark": "point",
    "encoding": {
      "x": {
        "field": "Acceleration", "type": "quantitative",
        "scale": {"domain": [0,25]}
      },
      "y": {
        "field": "Displacement", "type": "quantitative",
        "scale": {"domain": [0, 500]}
      }
    }
  }]
}

*/
