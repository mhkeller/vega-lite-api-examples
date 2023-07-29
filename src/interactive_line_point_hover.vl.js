import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Stock prices of 5 Tech Companies over Time, with a point marker on hover. Note that the hidden markers are intentionally bigger to make it easier for readers to hover.",
  "data": {"url": "data/stocks.csv"},
  "encoding": {
    "x": {"field": "date", "type": "temporal"},
    "y": {"field": "price", "type": "quantitative"},
    "color": {"field": "symbol", "type": "nominal"}
  },
  "layer": [{
    "mark": "line"
  }, {
    "params": [{
      "name": "hover",
      "select": {"type": "point", "on": "mouseover", "clear": "mouseout"}
    }],
    "mark": {"type": "circle", "tooltip": true},
    "encoding": {
      "opacity": {
        "condition": {"test": {"param": "hover", "empty": false}, "value": 1},
        "value": 0
      },
      "size": {
        "condition": {"test": {"param": "hover", "empty": false}, "value": 48},
        "value": 100
      }
    }
  }]
}
*/
