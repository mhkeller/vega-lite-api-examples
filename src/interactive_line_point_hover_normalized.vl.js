import * as vl from 'vega-lite-api';

// Write a Node.JS function that uses the vega-lite-api library to generate the vega-lite JSON spec below. The function should return the vega-lite-api object. Call the function `chart` and export as the es6 module default export.

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Stock prices of 5 Tech Companies over Time, with a point marker on hover. Note that the hidden markers are intentionally bigger to make it easier for readers to hover.",
  "data": {"url": "data/stocks.csv"},
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
          "name": "hover",
          "select": {"type": "point", "on": "mouseover", "clear": "mouseout"}
        }
      ],
      "mark": {"type": "circle", "tooltip": true},
      "encoding": {
        "x": {"field": "date", "type": "temporal"},
        "y": {"field": "price", "type": "quantitative"},
        "color": {"field": "symbol", "type": "nominal"},
        "opacity": {
          "condition": {"value": 1, "test": {"param": "hover", "empty": false}},
          "value": 0
        },
        "size": {
          "condition": {
            "value": 48,
            "test": {"param": "hover", "empty": false}
          },
          "value": 100
        }
      }
    }
  ]
}
*/
