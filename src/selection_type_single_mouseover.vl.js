import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate the vega-lite JSON spec below.
 * The function should return the vega-lite-api object.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/cars.json"},
  "params": [{
    "name": "pts",
    "select": {"type": "point", "on": "mouseover"}
  }],
  "mark": "rect",
  "encoding": {
    "y": {"field": "Origin"},
    "x": {"field": "Cylinders"},
    "color": {
      "condition": {
        "param": "pts",
        "aggregate": "count"
      },
      "value": "grey"
    }
  }
}
*/
