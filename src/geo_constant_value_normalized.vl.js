import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 * The function should return the vega-lite-api object.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "width": 500,
  "height": 300,
  "data": {"url": "data/airports.csv"},
  "layer": [
    {
      "mark": "square",
      "encoding": {
        "longitude": {"field": "longitude", "type": "quantitative"},
        "latitude": {"field": "latitude", "type": "quantitative"},
        "size": {"value": 1},
        "color": {"value": "gray"}
      },
      "projection": {"type": "albersUsa"}
    },
    {
      "mark": "square",
      "encoding": {
        "longitude": {"datum": -122.335167},
        "latitude": {"field": "latitude", "type": "quantitative"},
        "size": {"value": 1},
        "color": {"value": "steelblue"}
      },
      "projection": {"type": "albersUsa"}
    },
    {
      "mark": "square",
      "encoding": {
        "longitude": {"field": "longitude", "type": "quantitative"},
        "latitude": {"datum": 47.608013},
        "size": {"value": 1},
        "color": {"value": "firebrick"}
      },
      "projection": {"type": "albersUsa"}
    }
  ]
}
*/
