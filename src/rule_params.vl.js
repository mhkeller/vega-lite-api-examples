import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
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
    { "name": "strokeWidth", "value": 2,
      "bind": {"input": "range", "min": 0, "max": 10, "step": 0.5} },
    { "name": "strokeCap", "value": "butt",
      "bind": {"input": "select", "options": ["butt", "round", "square"]} },
    { "name": "strokeDash", "value": [1,0],
      "bind": {
        "input": "select",
        "options": [[1,0], [8,8], [8,4], [4,4], [4,2], [2,1], [1,1]]
      }
    }
  ],
  "data": {"values": [{}]},
  "mark": {
    "type": "rule",
    "color": "orange",
    "strokeWidth": {"expr": "strokeWidth"},
    "strokeDash": {"expr": "strokeDash"},
    "strokeCap": {"expr": "strokeCap"}
  },
  "encoding": {
    "x": {"datum": {"expr": "x"}, "type": "quantitative", "scale": {"domain": [0,100]}},
    "y": {"datum": {"expr": "y"}, "type": "quantitative", "scale": {"domain": [0,100]}},
    "x2": {"datum": {"expr": "x2"}},
    "y2": {"datum": {"expr": "y2"}}
  }
}
*/
