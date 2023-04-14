import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate the vega-lite JSON spec below.
 * The function should return the vega-lite-api object.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/stocks.csv"},
  "width": 400,
  "height": 300,
  "layer": [
    {
      "layer": [
        {
          "mark": "line",
          "encoding": {
            "x": {"field": "date", "type": "temporal"},
            "color": {"field": "symbol", "type": "nominal"},
            "y": {"field": "price", "type": "quantitative"}
          }
        },
        {
          "mark": "point",
          "transform": [{"filter": {"param": "hover", "empty": false}}],
          "encoding": {
            "x": {"field": "date", "type": "temporal"},
            "color": {"field": "symbol", "type": "nominal"},
            "y": {"field": "price", "type": "quantitative"}
          }
        }
      ]
    },
    {
      "mark": "rule",
      "encoding": {
        "x": {"field": "date", "type": "temporal"},
        "opacity": {
          "condition": {"value": 0.3, "param": "hover", "empty": false},
          "value": 0
        },
        "tooltip": [
          {"field": "AAPL", "type": "quantitative"},
          {"field": "AMZN", "type": "quantitative"},
          {"field": "GOOG", "type": "quantitative"},
          {"field": "IBM", "type": "quantitative"},
          {"field": "MSFT", "type": "quantitative"}
        ]
      },
      "params": [
        {
          "name": "hover",
          "select": {
            "type": "point",
            "fields": ["date"],
            "nearest": true,
            "on": "mouseover",
            "clear": "mouseout"
          }
        }
      ],
      "transform": [{"pivot": "symbol", "value": "price", "groupby": ["date"]}]
    }
  ]
}
*/
