import * as vl from 'vega-lite-api';

// Write a Node.JS function that uses the vega-lite-api library to generate the vega-lite JSON spec below. The function should return the vega-lite-api object. Call the function `chart` and export as the es6 module default export.

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/stocks.csv", "format": {"parse": {"date": "date"}}},
  "width": 650,
  "height": 300,
  "layer": [
    {
      "params": [
        {
          "name": "index",
          "value": [{"x": {"year": 2005, "month": 1, "date": 1}}],
          "select": {
            "type": "point",
            "encodings": ["x"],
            "on": "mouseover",
            "nearest": true
          }
        }
      ],
      "mark": "point",
      "encoding": {
        "x": {"field": "date", "type": "temporal", "axis": null},
        "opacity": {"value": 0}
      }
    },
    {
      "mark": "line",
      "encoding": {
        "x": {"field": "date", "type": "temporal", "axis": null},
        "y": {
          "field": "indexed_price",
          "type": "quantitative",
          "axis": {"format": "%"}
        },
        "color": {"field": "symbol", "type": "nominal"}
      },
      "transform": [
        {"lookup": "symbol", "from": {"param": "index", "key": "symbol"}},
        {
          "calculate": "datum.index && datum.index.price > 0 ? (datum.price - datum.index.price)/datum.index.price : 0",
          "as": "indexed_price"
        }
      ]
    },
    {
      "layer": [
        {
          "mark": {"type": "rule", "strokeWidth": 0.5},
          "encoding": {
            "x": {"field": "date", "type": "temporal", "axis": null},
            "color": {"value": "firebrick"}
          }
        },
        {
          "mark": {"type": "text", "align": "center", "fontWeight": 100},
          "encoding": {
            "x": {"field": "date", "type": "temporal", "axis": null},
            "color": {"value": "firebrick"},
            "text": {"field": "date", "timeUnit": "yearmonth"},
            "y": {"value": 310}
          }
        }
      ],
      "transform": [{"filter": {"param": "index"}}]
    }
  ]
}
*/