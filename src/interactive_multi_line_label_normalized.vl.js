import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
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
            "y": {"field": "price", "type": "quantitative"},
            "color": {"field": "symbol", "type": "nominal"}
          }
        },
        {
          "params": [
            {
              "name": "label",
              "select": {
                "type": "point",
                "encodings": ["x"],
                "nearest": true,
                "on": "mouseover"
              }
            }
          ],
          "mark": "point",
          "encoding": {
            "x": {"field": "date", "type": "temporal"},
            "y": {"field": "price", "type": "quantitative"},
            "color": {"field": "symbol", "type": "nominal"},
            "opacity": {
              "condition": {"param": "label", "empty": false, "value": 1},
              "value": 0
            }
          }
        }
      ]
    },
    {
      "layer": [
        {
          "mark": {"type": "rule", "color": "gray"},
          "encoding": {
            "x": {"type": "temporal", "field": "date", "aggregate": "min"}
          }
        },
        {
          "layer": [
            {
              "mark": {
                "type": "text",
                "stroke": "white",
                "strokeWidth": 2,
                "align": "left",
                "dx": 5,
                "dy": -5
              },
              "encoding": {
                "text": {"type": "quantitative", "field": "price"},
                "x": {"type": "temporal", "field": "date"},
                "y": {"type": "quantitative", "field": "price"}
              }
            },
            {
              "mark": {"type": "text", "align": "left", "dx": 5, "dy": -5},
              "encoding": {
                "text": {"type": "quantitative", "field": "price"},
                "x": {"type": "temporal", "field": "date"},
                "y": {"type": "quantitative", "field": "price"},
                "color": {"type": "nominal", "field": "symbol"}
              }
            }
          ]
        }
      ],
      "transform": [{"filter": {"param": "label", "empty": false}}]
    }
  ]
}
*/
