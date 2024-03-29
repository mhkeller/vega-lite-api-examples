import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/seattle-weather.csv"},
  "layer": [
    {
      "mark": {"type": "line", "color": "orange"},
      "encoding": {
        "x": {"timeUnit": "yearmonthdate", "field": "date"},
        "tooltip": [
          {"timeUnit": "yearmonthdate", "field": "date"},
          {"field": "temp_max", "type": "quantitative"},
          {"field": "temp_min", "type": "quantitative"}
        ],
        "y": {"field": "temp_max", "type": "quantitative"}
      }
    },
    {
      "mark": {"type": "line", "color": "red"},
      "encoding": {
        "x": {"timeUnit": "yearmonthdate", "field": "date"},
        "tooltip": [
          {"timeUnit": "yearmonthdate", "field": "date"},
          {"field": "temp_max", "type": "quantitative"},
          {"field": "temp_min", "type": "quantitative"}
        ],
        "y": {"field": "temp_min", "type": "quantitative"}
      }
    },
    {
      "mark": "rule",
      "params": [
        {"name": "hover", "select": {"type": "point", "on": "mouseover"}}
      ],
      "encoding": {
        "x": {"timeUnit": "yearmonthdate", "field": "date"},
        "tooltip": [
          {"timeUnit": "yearmonthdate", "field": "date"},
          {"field": "temp_max", "type": "quantitative"},
          {"field": "temp_min", "type": "quantitative"}
        ],
        "color": {
          "condition": {"param": "hover", "empty": false, "value": "black"},
          "value": "transparent"
        }
      }
    }
  ],
  "config": {"axisY": {"minExtent": 30}}
}
*/
