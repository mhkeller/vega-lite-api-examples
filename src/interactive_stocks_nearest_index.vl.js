import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "width": 600,
  "height": 300,
  "data": {"url": "data/stocks.csv"},
  "encoding": {
    "x": {"field": "date", "type": "temporal"}
  },
  "layer": [
    {
      "mark": "line",
      "encoding": {
        "y": {"field": "price", "type": "quantitative"},
        "color": {"field": "symbol", "type": "nominal"}
      }
    },
    {
      "params": [{
        "name": "index",
        "select": {
          "type": "point",
          "encodings": ["x"],
          "on": "mousemove",
          "nearest": true
        }
      }],
      "mark": {"type": "point"},
      "encoding": {
        "y": {"field": "price", "type": "quantitative"},
        "opacity": {"value": 0}
      }
    },
    {
      "transform": [
        {"filter": {
          "and": ["index.date", {"param": "index"}]
        }}
      ],
      "mark": "rule"
    },
    {
      "transform": [
        {"filter": {
          "and": ["index.date", {"param": "index"}]
        }}
      ],
      "mark": "text",
      "encoding": {
        "y": {"value": 10},
        "text": {"field": "date", "type": "temporal"}
      }
    }
  ],
  "config": {"text": {"align": "right", "dx": -5, "dy": 5}}
}
*/
