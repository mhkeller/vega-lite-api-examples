import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/sp500.csv"},
  "vconcat": [{
    "width": 480,
    "mark": "area",
    "encoding": {
      "x": {
        "field": "date",
        "type": "temporal",
        "scale": {"domain": {"param": "brush"}},
        "axis": {"title": ""}
      },
      "y": {"field": "price", "type": "quantitative"}
    }
  }, {
    "width": 480,
    "height": 60,
    "mark": "area",
    "params": [{
      "name": "brush",
      "select": {"type": "interval", "encodings": ["x"]}
    }],
    "encoding": {
      "x": {
        "field": "date",
        "type": "temporal"
      },
      "y": {
        "field": "price",
        "type": "quantitative",
        "axis": {"tickCount": 3, "grid": false}
      }
    }
  }]
}
*/
