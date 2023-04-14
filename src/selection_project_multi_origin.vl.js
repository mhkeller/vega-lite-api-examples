import * as vl from 'vega-lite-api';

// Write a Node.JS function that uses the vega-lite-api library to generate the vega-lite JSON spec below. The function should return the vega-lite-api object. Call the function `chart` and export as the es6 module default export.

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/cars.json"},
  "params": [{
    "name": "pts",
    "select": {"type": "point", "fields": ["Origin"]}
  }],
  "mark": "point",
  "encoding": {
    "x": {"field": "Horsepower", "type": "quantitative"},
    "y": {"field": "Miles_per_Gallon", "type": "quantitative"},
    "color": {
      "condition": {
        "param": "pts",
        "field": "Cylinders", "type": "ordinal",
        "scale": {"scheme": "yelloworangebrown"}
      },
      "value": "grey"
    },
    "shape": {
      "condition": {
        "param": "pts",
        "field": "Origin", "type": "nominal",
        "scale": {"range": ["triangle-left", "triangle-right", "triangle-up"]}
      },
      "value": "circle"
    },
    "size": {
      "condition": {"param": "pts", "value": 200},
      "value": 50
    }
  }
}

*/
