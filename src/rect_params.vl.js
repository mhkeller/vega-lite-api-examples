import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate the vega-lite JSON spec below.
 * The function should return the vega-lite-api object.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A scatterplot showing horsepower and miles per gallons for various cars.",
  "params": [
    { "name": "x", "value": 25,
      "bind": {"input": "range", "min": 1, "max": 100, "step": 1} },
    { "name": "x2", "value": 75,
      "bind": {"input": "range", "min": 1, "max": 100, "step": 1} },
    { "name": "y", "value": 25,
      "bind": {"input": "range", "min": 1, "max": 100, "step": 1} },
    { "name": "y2", "value": 75,
      "bind": {"input": "range", "min": 1, "max": 100, "step": 1} },
    { "name": "cornerRadius", "value": 0,
      "bind": {"input": "range", "min": 0, "max": 50, "step": 1} }
  ],
  "data": {"values": [{}]},
  "mark": {
    "type": "rect",
    "color": "orange",
    "cornerRadius": {"expr": "cornerRadius"}
  },
  "encoding": {
    "x": {"datum": {"expr": "x"}, "type": "quantitative", "scale": {"domain": [0,100]}},
    "y": {"datum": {"expr": "y"}, "type": "quantitative", "scale": {"domain": [0,100]}},
    "x2": {"datum": {"expr": "x2"}},
    "y2": {"datum": {"expr": "y2"}}
  }
}
*/
