import * as vl from 'vega-lite-api';

// Write a Node.JS function that uses the vega-lite-api library to generate the vega-lite JSON spec below. The function should return the vega-lite-api object. Call the function `chart` and export as the es6 module default export.

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/barley.json"},
  "layer": [
    {
      "transform": [
        {
          "aggregate": [
            {"op": "stdev", "field": "yield", "as": "extent_yield"},
            {"op": "mean", "field": "yield", "as": "center_yield"}
          ],
          "groupby": ["variety"]
        },
        {
          "calculate": "datum[\"center_yield\"] + datum[\"extent_yield\"]",
          "as": "upper_yield"
        },
        {
          "calculate": "datum[\"center_yield\"] - datum[\"extent_yield\"]",
          "as": "lower_yield"
        }
      ],
      "mark": {
        "type": "rule",
        "ariaRoleDescription": "errorbar",
        "style": "errorbar-rule"
      },
      "encoding": {
        "x": {
          "field": "lower_yield",
          "type": "quantitative",
          "title": "yield",
          "scale": {"zero": false}
        },
        "x2": {"field": "upper_yield"},
        "y": {"field": "variety", "type": "ordinal"},
        "tooltip": [
          {
            "field": "center_yield",
            "type": "quantitative",
            "title": "Mean of yield"
          },
          {
            "field": "upper_yield",
            "type": "quantitative",
            "title": "Mean + stdev of yield"
          },
          {
            "field": "lower_yield",
            "type": "quantitative",
            "title": "Mean - stdev of yield"
          },
          {"field": "variety", "type": "ordinal"}
        ]
      }
    },
    {
      "mark": {"type": "point", "filled": true, "color": "black"},
      "encoding": {
        "x": {"field": "yield", "type": "quantitative", "aggregate": "mean"},
        "y": {"field": "variety", "type": "ordinal"}
      }
    }
  ]
}
*/
