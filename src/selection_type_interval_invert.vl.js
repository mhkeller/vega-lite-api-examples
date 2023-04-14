import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/cars.json"},
  "params": [{"name": "pts", "select": "interval"}],
  "mark": "rect",
  "encoding": {
    "y": {"field": "Origin"},
    "x": {"field": "Cylinders"},
    "color": {
      "condition": {
        "test": {"not": {"param": "pts"}},
        "value": "grey"
      },
      "aggregate": "count"
    }
  }
}
*/
