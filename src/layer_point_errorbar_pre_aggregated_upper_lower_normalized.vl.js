import * as vl from 'vega-lite-api';

// Write a Node.JS function that uses the vega-lite-api library to generate the vega-lite JSON spec below. The function should return the vega-lite-api object. Call the function `chart` and export as the es6 module default export.

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {
    "values": [
      {
        "lower_yield": 23.1311,
        "upper_yield": 43.5522,
        "center": 32.4,
        "variety": "Glabron"
      },
      {
        "lower_yield": 23.9503,
        "upper_yield": 38.9775,
        "center": 30.96667,
        "variety": "Manchuria"
      },
      {
        "lower_yield": 24.7778,
        "upper_yield": 46.9167,
        "center": 33.966665,
        "variety": "No. 457"
      },
      {
        "lower_yield": 21.7823,
        "upper_yield": 48.9732,
        "center": 30.45,
        "variety": "No. 462"
      }
    ]
  },
  "layer": [
    {
      "transform": [
        {"calculate": "datum[\"lower_yield\"]", "as": "upper_upper_yield"},
        {"calculate": "datum[\"upper_yield\"]", "as": "lower_upper_yield"}
      ],
      "mark": {
        "type": "rule",
        "ariaRoleDescription": "errorbar",
        "style": "errorbar-rule"
      },
      "encoding": {
        "x": {
          "field": "lower_upper_yield",
          "type": "quantitative",
          "title": "yield",
          "scale": {"zero": false}
        },
        "x2": {"field": "upper_upper_yield"},
        "y": {"field": "variety", "type": "ordinal"},
        "tooltip": [
          {
            "field": "upper_upper_yield",
            "type": "quantitative",
            "title": "lower_yield"
          },
          {
            "field": "lower_upper_yield",
            "type": "quantitative",
            "title": "upper_yield"
          },
          {"field": "variety", "type": "ordinal"}
        ]
      }
    },
    {
      "mark": {"type": "point", "filled": true, "color": "black"},
      "encoding": {
        "x": {"field": "center", "type": "quantitative"},
        "y": {"field": "variety", "type": "ordinal"}
      }
    }
  ]
}
*/
