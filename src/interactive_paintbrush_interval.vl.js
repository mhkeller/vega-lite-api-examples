import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Select multiple points by dragging an interval.",
  "data": {"url": "data/cars.json"},
  "params": [{"name": "paintbrush", "select": "interval"}],
  "mark": "point",
  "encoding": {
    "x": {"field": "Horsepower", "type": "quantitative"},
    "y": {"field": "Miles_per_Gallon", "type": "quantitative"},
    "size": {
      "condition": {"param": "paintbrush", "value": 300},
      "value": 50
    }
  }
}
*/
