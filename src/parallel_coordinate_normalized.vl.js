import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 * The function should return the vega-lite-api object.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Though Vega-Lite supports only one scale per axes, one can create a parallel coordinate plot by folding variables, using `joinaggregate` to normalize their values and using ticks and rules to manually create axes.",
  "data": {"url": "data/penguins.json"},
  "width": 600,
  "height": 300,
  "layer": [
    {
      "mark": {"type": "rule", "color": "#ccc"},
      "encoding": {"detail": {"aggregate": "count"}, "x": {"field": "key"}}
    },
    {
      "mark": "line",
      "encoding": {
        "color": {"type": "nominal", "field": "Species"},
        "detail": {"type": "nominal", "field": "index"},
        "opacity": {"value": 0.3},
        "x": {"type": "nominal", "field": "key"},
        "y": {"type": "quantitative", "field": "norm_val", "axis": null},
        "tooltip": [
          {"type": "quantitative", "field": "Beak Length (mm)"},
          {"type": "quantitative", "field": "Beak Depth (mm)"},
          {"type": "quantitative", "field": "Flipper Length (mm)"},
          {"type": "quantitative", "field": "Body Mass (g)"}
        ]
      }
    },
    {
      "layer": [
        {
          "mark": {"type": "text", "style": "label"},
          "encoding": {
            "x": {"type": "nominal", "field": "key"},
            "y": {"value": 0},
            "text": {"aggregate": "max", "field": "max"}
          }
        },
        {
          "mark": {"type": "tick", "style": "tick", "size": 8, "color": "#ccc"},
          "encoding": {
            "x": {"type": "nominal", "field": "key"},
            "y": {"value": 0}
          }
        }
      ]
    },
    {
      "layer": [
        {
          "mark": {"type": "text", "style": "label"},
          "encoding": {
            "x": {"type": "nominal", "field": "key"},
            "y": {"value": 150},
            "text": {"aggregate": "min", "field": "mid"}
          }
        },
        {
          "mark": {"type": "tick", "style": "tick", "size": 8, "color": "#ccc"},
          "encoding": {
            "x": {"type": "nominal", "field": "key"},
            "y": {"value": 150}
          }
        }
      ]
    },
    {
      "layer": [
        {
          "mark": {"type": "text", "style": "label"},
          "encoding": {
            "x": {"type": "nominal", "field": "key"},
            "y": {"value": 300},
            "text": {"aggregate": "min", "field": "min"}
          }
        },
        {
          "mark": {"type": "tick", "style": "tick", "size": 8, "color": "#ccc"},
          "encoding": {
            "x": {"type": "nominal", "field": "key"},
            "y": {"value": 300}
          }
        }
      ]
    }
  ],
  "config": {
    "axisX": {
      "domain": false,
      "labelAngle": 0,
      "tickColor": "#ccc",
      "title": null
    },
    "view": {"stroke": null},
    "style": {
      "label": {"baseline": "middle", "align": "right", "dx": -5},
      "tick": {"orient": "horizontal"}
    }
  },
  "transform": [
    {"filter": "datum['Beak Length (mm)']"},
    {"window": [{"op": "count", "as": "index"}]},
    {
      "fold": [
        "Beak Length (mm)",
        "Beak Depth (mm)",
        "Flipper Length (mm)",
        "Body Mass (g)"
      ]
    },
    {
      "joinaggregate": [
        {"op": "min", "field": "value", "as": "min"},
        {"op": "max", "field": "value", "as": "max"}
      ],
      "groupby": ["key"]
    },
    {
      "calculate": "(datum.value - datum.min) / (datum.max-datum.min)",
      "as": "norm_val"
    },
    {"calculate": "(datum.min + datum.max) / 2", "as": "mid"}
  ]
}
*/
