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
      "name": "alex",
      "select": {
        "type": "interval",
        "on": "[mousedown[!event.shiftKey], mouseup] > mousemove",
        "translate": "[mousedown[!event.shiftKey], mouseup] > mousemove"
      }
    },
    {
      "name": "morgan",
      "select": {
        "type": "interval",
        "on": "[mousedown[event.shiftKey], mouseup] > mousemove",
        "translate": "[mousedown[event.shiftKey], mouseup] > mousemove",
        "mark": {"fill": "#fdbb84", "fillOpacity": 0.5, "stroke": "#e34a33"}
      }
    }
  ],
  "mark": "rect",
  "encoding": {
    "y": {"field": "Origin"},
    "x": {"field": "Cylinders"},
    "color": {"aggregate": "count"}
  }
}
*/
