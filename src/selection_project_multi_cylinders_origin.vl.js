import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/cars.json"},
  "params": [{
    "name": "pts",
    "select": {"type": "point", "fields": ["Cylinders", "Origin"]}
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
