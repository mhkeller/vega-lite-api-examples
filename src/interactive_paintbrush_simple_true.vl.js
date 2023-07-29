import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/cars.json"},
  "params": [
    {
      "name": "toggleOrigin",
      "bind": {"input": "checkbox"}
    },
    {
      "name": "paintbrush",
      "select": {"type": "point", "on": "mouseover"}
    }
  ],
  "mark": "point",
  "encoding": {
    "x": {"field": "Horsepower", "type": "quantitative"},
    "y": {"field": "Miles_per_Gallon", "type": "quantitative"},
    "color": {
      "condition": {
        "param": "toggleOrigin",
        "field": "Origin",
        "type": "nominal"
      },
      "value": "steelblue"
    },
    "size": {
      "condition": {
        "param": "paintbrush",
        "value": 300
      },
      "value": 50
    }
  }
}
*/
