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
  "vconcat": [{
    "params": [{
      "name": "brush",
      "select": {"type": "interval", "resolve": "global"}
    }],
    "mark": "point",
    "encoding": {
      "x": {"field": "Miles_per_Gallon", "type": "quantitative"},
      "y": {"field": "Horsepower", "type": "quantitative"}
    }
  }, {
    "mark": "point",
    "params": [{
      "name": "grid",
      "select": "interval",
      "bind": "scales"
    }],
    "encoding": {
      "x": {"field": "Displacement", "type": "quantitative"},
      "y": {"field": "Acceleration", "type": "quantitative"},
      "color": {
        "value": "red",
        "condition": {
          "param": "brush", "value": "steelblue"
        }
      }
    }
  }]
}
*/
