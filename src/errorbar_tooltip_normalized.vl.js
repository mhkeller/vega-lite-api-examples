import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/barley.json"},
  "transform": [
    {
      "aggregate": [
        {"op": "stderr", "field": "yield", "as": "extent_yield"},
        {"op": "mean", "field": "yield", "as": "center_yield"}
      ],
      "groupby": ["variety", "variety"]
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
    "tooltip": {"field": "variety", "type": "ordinal"}
  }
}
*/
