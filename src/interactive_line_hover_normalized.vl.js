import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 * The function should return the vega-lite-api object.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Multi-series line chart with labels and interactive highlight on hover.  We also set the selection's initial value to provide a better screenshot",
  "data": {"url": "data/stocks.csv"},
  "layer": [
    {
      "description": "transparent layer to make it easier to trigger selection",
      "params": [
        {
          "name": "hover",
          "value": [{"symbol": "AAPL"}],
          "select": {"type": "point", "fields": ["symbol"], "on": "mouseover"}
        }
      ],
      "mark": {"type": "line", "strokeWidth": 8, "stroke": "transparent"},
      "encoding": {
        "x": {"field": "date", "type": "temporal", "title": "date"},
        "y": {"field": "price", "type": "quantitative", "title": "price"},
        "color": {
          "condition": {
            "param": "hover",
            "field": "symbol",
            "type": "nominal",
            "legend": null
          },
          "value": "grey"
        },
        "opacity": {"condition": {"param": "hover", "value": 1}, "value": 0.2}
      }
    },
    {
      "mark": "line",
      "encoding": {
        "x": {"field": "date", "type": "temporal", "title": "date"},
        "y": {"field": "price", "type": "quantitative", "title": "price"},
        "color": {
          "condition": {
            "param": "hover",
            "field": "symbol",
            "type": "nominal",
            "legend": null
          },
          "value": "grey"
        },
        "opacity": {"condition": {"param": "hover", "value": 1}, "value": 0.2}
      }
    },
    {
      "layer": [
        {
          "mark": {"type": "circle"},
          "encoding": {
            "x": {
              "field": "date",
              "type": "temporal",
              "title": "date",
              "aggregate": "max"
            },
            "y": {
              "field": "price",
              "type": "quantitative",
              "title": "price",
              "aggregate": {"argmax": "date"}
            },
            "color": {
              "condition": {
                "param": "hover",
                "field": "symbol",
                "type": "nominal",
                "legend": null
              },
              "value": "grey"
            },
            "opacity": {
              "condition": {"param": "hover", "value": 1},
              "value": 0.2
            }
          }
        },
        {
          "mark": {"type": "text", "align": "left", "dx": 4},
          "encoding": {
            "x": {
              "field": "date",
              "type": "temporal",
              "title": "date",
              "aggregate": "max"
            },
            "y": {
              "field": "price",
              "type": "quantitative",
              "title": "price",
              "aggregate": {"argmax": "date"}
            },
            "color": {
              "condition": {
                "param": "hover",
                "field": "symbol",
                "type": "nominal",
                "legend": null
              },
              "value": "grey"
            },
            "opacity": {
              "condition": {"param": "hover", "value": 1},
              "value": 0.2
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
