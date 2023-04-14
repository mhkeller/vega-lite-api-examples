import * as vl from 'vega-lite-api';

// Write a Node.JS function that uses the vega-lite-api library to generate the vega-lite JSON spec below. The function should return the vega-lite-api object. Call the function `chart` and export as the es6 module default export.

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Stock price over time with color legend orient = left.",
  "data": {"url": "data/stocks.csv"},
  "layer": [
    {
      "mark": "line",
      "encoding": {
        "x": {"field": "date", "type": "temporal"},
        "y": {"field": "price", "type": "quantitative"},
        "color": {
          "field": "symbol",
          "type": "nominal",
          "legend": {"orient": "left"}
        }
      }
    },
    {
      "mark": {"type": "point", "filled": true},
      "encoding": {
        "x": {"field": "date", "type": "temporal"},
        "y": {"field": "price", "type": "quantitative"},
        "color": {
          "field": "symbol",
          "type": "nominal",
          "legend": {"orient": "left"}
        }
      }
    }
  ]
}
*/
