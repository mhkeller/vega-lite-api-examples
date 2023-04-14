import * as vl from 'vega-lite-api';

// Write a Node.JS function that uses the vega-lite-api library to generate the vega-lite JSON spec below. The function should return the vega-lite-api object. Call the function `chart` and export as the es6 module default export.

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "layer": [
    {
      "data": {"url": "data/stocks.csv"},
      "mark": "line",
      "encoding": {
        "x": {"field": "date", "type": "temporal"},
        "y": {"field": "price", "type": "quantitative"},
        "color": {"field": "symbol", "type": "nominal"}
      }
    },
    {
      "data": {"values": [{}]},
      "mark": {"type": "rule", "strokeDash": [2, 2], "size": 2},
      "encoding": {
        "x": {"datum": {"year": 2006}}
      }
    }
  ]
}

*/
