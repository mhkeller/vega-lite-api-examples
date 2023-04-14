import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate the vega-lite JSON spec below.
 * The function should return the vega-lite-api object.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A vertical box plot showing median, min, and max body mass of penguins.",
  "data": {"url": "data/cars.json"},
  "encoding": {
    "x": {"field": "Cylinders", "type": "nominal"},
    "xOffset": {"field": "Origin", "type": "nominal"}
  },
  "layer": [{
    "mark": "bar",
    "encoding": {
      "y": {
        "aggregate": "mean",
        "field": "Acceleration",
        "type": "quantitative"
      },
      "color": {"field": "Origin", "type": "nominal"}
    }
  },{
    "mark": "errorbar",
    "encoding": {
      "y": {
        "field": "Acceleration",
        "type": "quantitative"
      }
    }
  }]
}
*/
