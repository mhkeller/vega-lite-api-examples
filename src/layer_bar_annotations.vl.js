import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 * The function should return the vega-lite-api object.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "The PM2.5 value of Beijing observed 15 days, highlighting the days when PM2.5 level is hazardous to human health. Data source https://chartaccent.github.io/chartaccent.html",
    "layer": [{
      "data": {
        "values": [
          {"Day": 1, "Value": 54.8},
          {"Day": 2, "Value": 112.1},
          {"Day": 3, "Value": 63.6},
          {"Day": 4, "Value": 37.6},
          {"Day": 5, "Value": 79.7},
          {"Day": 6, "Value": 137.9},
          {"Day": 7, "Value": 120.1},
          {"Day": 8, "Value": 103.3},
          {"Day": 9, "Value": 394.8},
          {"Day": 10, "Value": 199.5},
          {"Day": 11, "Value": 72.3},
          {"Day": 12, "Value": 51.1},
          {"Day": 13, "Value": 112.0},
          {"Day": 14, "Value": 174.5},
          {"Day": 15, "Value": 130.5}
        ]
      },
      "layer": [{
        "mark": "bar",
        "encoding": {
          "x": {"field": "Day", "type": "ordinal", "axis": {"labelAngle": 0}},
          "y": {"field": "Value", "type": "quantitative"}
        }
      }, {
        "mark": "bar",
        "transform": [
          {"filter": "datum.Value >= 300"},
          {"calculate": "300", "as": "baseline"}
        ],
        "encoding": {
          "x": {"field": "Day", "type": "ordinal"},
          "y": {"field": "baseline", "type": "quantitative", "title": "PM2.5 Value"},
          "y2": {"field": "Value"},
          "color": {"value": "#e45755"}
        }
      }
    ]}, {
      "data": {
         "values": [{}]
      },
      "encoding": {
        "y": {"datum": 300}
      },
      "layer": [{
        "mark": "rule"
      }, {
        "mark": {
          "type": "text",
          "align": "right",
          "baseline": "bottom",
          "dx": -2,
          "dy": -2,
          "x": "width",
          "text": "hazardous"
        }
      }]
    }
  ]
}
*/
