import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {
    "values": [
      {"category":"A", "group": "x", "value":0.1},
      {"category":"A", "group": "y", "value":0.6},
      {"category":"A", "group": "z", "value":0.9},
      {"category":"B", "group": "x", "value":0.7},
      {"category":"B", "group": "y", "value":0.2},
      {"category":"B", "group": "z", "value":1.1},
      {"category":"C", "group": "x", "value":0.6},
      {"category":"C", "group": "y", "value":0.1},
      {"category":"C", "group": "z", "value":0.2}
    ]
  },
  "transform": [{
    "calculate": "datum.value/2",
    "as": "half"
  }],
  "encoding": {
    "x": {"field": "category"},
    "xOffset": {"field": "group"}
  },
  "layer": [{
    "mark": "bar",
    "encoding": {
      "y": {"field": "value", "type": "quantitative"},
      "color": {"field": "group"}
    }
  }, {
    "mark": {"type": "circle", "thickness": 2, "color": "black"},
    "encoding": {
      "y": {"field": "half", "type": "quantitative"}
    }
  }]
}
*/
