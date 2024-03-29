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
    "name": "brush",
    "select": {
      "type": "interval",
      "translate": "[mousedown[event.shiftKey], window:mouseup] > window:mousemove!"
    }
  }],
  "mark": {"type": "circle", "clip": true},
  "encoding": {
    "x": {
      "field": "Horsepower", "type": "quantitative",
      "scale": {"domain": [75, 150]}
    },
    "y": {
      "field": "Miles_per_Gallon", "type": "quantitative",
      "scale": {"domain": [20, 40]}
    },
    "size": {"field": "Cylinders", "type": "quantitative"},
    "color": {
      "condition": {
        "param": "brush",
        "field": "Origin", "type": "nominal"
      },
      "value": "grey"
    }
  }
}
*/
