import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate the vega-lite JSON spec below.
 * The function should return the vega-lite-api object.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {
    "values": [
      {
        "yield_error": 7.5522,
        "yield_error2": -10.5522,
        "yield_center": 32.4,
        "variety": "Glabron"
      },
      {
        "yield_error": 6.9775,
        "yield_error2": -3.9775,
        "yield_center": 30.96667,
        "variety": "Manchuria"
      },
      {
        "yield_error": 3.9167,
        "yield_error2": -0.9167,
        "yield_center": 33.966665,
        "variety": "No. 457"
      },
      {
        "yield_error": 11.9732,
        "yield_error2": -15.9732,
        "yield_center": 30.45,
        "variety": "No. 462"
      }
    ]
  },
  "layer": [
    {
      "mark": "errorbar",
      "encoding": {
        "x": {
          "field": "yield_center",
          "type": "quantitative",
          "scale": {"zero": false},
          "title": "yield"
        },
        "xError": {"field": "yield_error"},
        "xError2": {"field": "yield_error2"},
        "y": {"field": "variety", "type": "ordinal"}
      }
    },
    {
      "mark": {
        "type": "point",
        "filled": true,
        "color": "black"
      },
      "encoding": {
        "x": {
          "field": "yield_center",
          "type": "quantitative"
        },
        "y": {"field": "variety", "type": "ordinal"}
      }
    }
  ]
}
*/
