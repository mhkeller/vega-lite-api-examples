import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate the vega-lite JSON spec below.
 * The function should return the vega-lite-api object.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/barley.json"},
  "layer": [
    {
      "transform": [
        {
          "aggregate": [
            {"op": "stderr", "field": "yield", "as": "extent_yield"},
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
        "y": {
          "field": "lower_yield",
          "type": "quantitative",
          "title": "yield",
          "scale": {"zero": false}
        },
        "y2": {"field": "upper_yield"},
        "x": {"field": "variety", "type": "ordinal"},
        "tooltip": [
          {
            "field": "center_yield",
            "type": "quantitative",
            "title": "Mean of yield"
          },
          {
            "field": "upper_yield",
            "type": "quantitative",
            "title": "Mean + stderr of yield"
          },
          {
            "field": "lower_yield",
            "type": "quantitative",
            "title": "Mean - stderr of yield"
          },
          {"field": "variety", "type": "ordinal"}
        ]
      }
    },
    {
      "mark": {"type": "point", "filled": true, "color": "black"},
      "encoding": {
        "y": {"field": "yield", "type": "quantitative", "aggregate": "mean"},
        "x": {"field": "variety", "type": "ordinal"}
      }
    }
  ]
}
*/
