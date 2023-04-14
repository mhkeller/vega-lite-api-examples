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
      {"dir": "1N", "strength": 1},
      {"dir": "2NE", "strength": 2},
      {"dir": "3E", "strength": 3},
      {"dir": "4SE", "strength": 4},
      {"dir": "5S", "strength": 5},
      {"dir": "6SW", "strength": 6},
      {"dir": "7W", "strength": 7},
      {"dir": "8NW", "strength": 8}
    ]
  },
  "encoding": {
    "theta": {"field": "dir", "type": "ordinal"},
    "radius" : {"field": "strength", "type":"quantitative"},
    "color": {"field": "dir", "type": "nominal"}
  },
  "mark": {"type":"arc"}
}
*/
