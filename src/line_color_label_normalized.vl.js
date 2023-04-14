import * as vl from 'vega-lite-api';

// Write a Node.JS function that uses the vega-lite-api library to generate the vega-lite JSON spec below. The function should return the vega-lite-api object. Call the function `chart` and export as the es6 module default export.

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Multi-series line chart with labels.",
  "data": {"url": "data/stocks.csv"},
  "layer": [
    {
      "mark": "line",
      "encoding": {
        "color": {"field": "symbol", "type": "nominal", "legend": null},
        "x": {"field": "date", "type": "temporal", "title": "date"},
        "y": {"field": "price", "type": "quantitative", "title": "price"}
      }
    },
    {
      "layer": [
        {
          "mark": {"type": "circle"},
          "encoding": {
            "color": {"field": "symbol", "type": "nominal", "legend": null},
            "x": {"aggregate": "max", "field": "date", "type": "temporal"},
            "y": {
              "aggregate": {"argmax": "date"},
              "field": "price",
              "type": "quantitative"
            }
          }
        },
        {
          "mark": {"type": "text", "align": "left", "dx": 4},
          "encoding": {
            "color": {"field": "symbol", "type": "nominal", "legend": null},
            "x": {"aggregate": "max", "field": "date", "type": "temporal"},
            "y": {
              "aggregate": {"argmax": "date"},
              "field": "price",
              "type": "quantitative"
            },
            "text": {"field": "symbol", "type": "nominal"}
          }
        }
      ]
    }
  ],
  "config": {"view": {"stroke": null}},
  "transform": [{"filter": "datum.symbol!=='IBM'"}]
}
*/
