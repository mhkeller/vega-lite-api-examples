import * as vl from 'vega-lite-api';

// Write a Node.JS function that uses the vega-lite-api library to generate the vega-lite JSON spec below. The function should return the vega-lite-api object. Call the function `chart` and export as the es6 module default export.

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A horizontal box plot showing median and lower and upper quartiles of the distribution of body mass of penguins.",
  "data": {"url": "data/penguins.json"},
  "layer": [
    {
      "transform": [
        {
          "joinaggregate": [
            {
              "op": "q1",
              "field": "Body Mass (g)",
              "as": "lower_box_Body Mass (g)"
            },
            {
              "op": "q3",
              "field": "Body Mass (g)",
              "as": "upper_box_Body Mass (g)"
            }
          ],
          "groupby": ["Species"]
        }
      ],
      "layer": [
        {
          "transform": [
            {
              "filter": "(datum[\"Body Mass (g)\"] < datum[\"lower_box_Body Mass (g)\"] - 1.5 * (datum[\"upper_box_Body Mass (g)\"] - datum[\"lower_box_Body Mass (g)\"])) || (datum[\"Body Mass (g)\"] > datum[\"upper_box_Body Mass (g)\"] + 1.5 * (datum[\"upper_box_Body Mass (g)\"] - datum[\"lower_box_Body Mass (g)\"]))"
            }
          ],
          "mark": {"type": "point", "style": "boxplot-outliers"},
          "encoding": {
            "x": {
              "field": "Body Mass (g)",
              "type": "quantitative",
              "title": "Body Mass (g)",
              "scale": {"zero": false}
            },
            "y": {"field": "Species", "type": "nominal"}
          }
        },
        {
          "transform": [
            {
              "filter": "(datum[\"lower_box_Body Mass (g)\"] - 1.5 * (datum[\"upper_box_Body Mass (g)\"] - datum[\"lower_box_Body Mass (g)\"]) <= datum[\"Body Mass (g)\"]) && (datum[\"Body Mass (g)\"] <= datum[\"upper_box_Body Mass (g)\"] + 1.5 * (datum[\"upper_box_Body Mass (g)\"] - datum[\"lower_box_Body Mass (g)\"]))"
            },
            {
              "aggregate": [
                {
                  "op": "min",
                  "field": "Body Mass (g)",
                  "as": "lower_whisker_Body Mass (g)"
                },
                {
                  "op": "max",
                  "field": "Body Mass (g)",
                  "as": "upper_whisker_Body Mass (g)"
                },
                {
                  "op": "min",
                  "field": "lower_box_Body Mass (g)",
                  "as": "lower_box_Body Mass (g)"
                },
                {
                  "op": "max",
                  "field": "upper_box_Body Mass (g)",
                  "as": "upper_box_Body Mass (g)"
                }
              ],
              "groupby": ["Species"]
            }
          ],
          "layer": [
            {
              "mark": {"type": "rule", "aria": false, "style": "boxplot-rule"},
              "encoding": {
                "x": {
                  "field": "lower_whisker_Body Mass (g)",
                  "type": "quantitative",
                  "title": "Body Mass (g)",
                  "scale": {"zero": false}
                },
                "x2": {"field": "lower_box_Body Mass (g)"},
                "y": {"field": "Species", "type": "nominal"},
                "tooltip": [
                  {
                    "field": "upper_whisker_Body Mass (g)",
                    "type": "quantitative",
                    "title": "Upper Whisker of Body Mass (g)"
                  },
                  {
                    "field": "lower_whisker_Body Mass (g)",
                    "type": "quantitative",
                    "title": "Lower Whisker of Body Mass (g)"
                  },
                  {"field": "Species", "type": "nominal"}
                ]
              }
            },
            {
              "mark": {"type": "rule", "aria": false, "style": "boxplot-rule"},
              "encoding": {
                "x": {
                  "field": "upper_box_Body Mass (g)",
                  "type": "quantitative",
                  "title": "Body Mass (g)",
                  "scale": {"zero": false}
                },
                "x2": {"field": "upper_whisker_Body Mass (g)"},
                "y": {"field": "Species", "type": "nominal"},
                "tooltip": [
                  {
                    "field": "upper_whisker_Body Mass (g)",
                    "type": "quantitative",
                    "title": "Upper Whisker of Body Mass (g)"
                  },
                  {
                    "field": "lower_whisker_Body Mass (g)",
                    "type": "quantitative",
                    "title": "Lower Whisker of Body Mass (g)"
                  },
                  {"field": "Species", "type": "nominal"}
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "transform": [
        {
          "aggregate": [
            {
              "op": "q1",
              "field": "Body Mass (g)",
              "as": "lower_box_Body Mass (g)"
            },
            {
              "op": "q3",
              "field": "Body Mass (g)",
              "as": "upper_box_Body Mass (g)"
            },
            {
              "op": "median",
              "field": "Body Mass (g)",
              "as": "mid_box_Body Mass (g)"
            },
            {"op": "min", "field": "Body Mass (g)", "as": "min_Body Mass (g)"},
            {"op": "max", "field": "Body Mass (g)", "as": "max_Body Mass (g)"}
          ],
          "groupby": ["Species"]
        }
      ],
      "layer": [
        {
          "mark": {
            "type": "bar",
            "size": 14,
            "orient": "horizontal",
            "ariaRoleDescription": "box",
            "style": "boxplot-box"
          },
          "encoding": {
            "x": {
              "field": "lower_box_Body Mass (g)",
              "type": "quantitative",
              "title": "Body Mass (g)",
              "scale": {"zero": false}
            },
            "x2": {"field": "upper_box_Body Mass (g)"},
            "y": {"field": "Species", "type": "nominal"},
            "tooltip": [
              {
                "field": "max_Body Mass (g)",
                "type": "quantitative",
                "title": "Max of Body Mass (g)"
              },
              {
                "field": "upper_box_Body Mass (g)",
                "type": "quantitative",
                "title": "Q3 of Body Mass (g)"
              },
              {
                "field": "mid_box_Body Mass (g)",
                "type": "quantitative",
                "title": "Median of Body Mass (g)"
              },
              {
                "field": "lower_box_Body Mass (g)",
                "type": "quantitative",
                "title": "Q1 of Body Mass (g)"
              },
              {
                "field": "min_Body Mass (g)",
                "type": "quantitative",
                "title": "Min of Body Mass (g)"
              },
              {"field": "Species", "type": "nominal"}
            ]
          }
        },
        {
          "mark": {
            "color": "white",
            "type": "tick",
            "size": 14,
            "orient": "vertical",
            "aria": false,
            "style": "boxplot-median"
          },
          "encoding": {
            "x": {
              "field": "mid_box_Body Mass (g)",
              "type": "quantitative",
              "title": "Body Mass (g)",
              "scale": {"zero": false}
            },
            "y": {"field": "Species", "type": "nominal"},
            "tooltip": [
              {
                "field": "max_Body Mass (g)",
                "type": "quantitative",
                "title": "Max of Body Mass (g)"
              },
              {
                "field": "upper_box_Body Mass (g)",
                "type": "quantitative",
                "title": "Q3 of Body Mass (g)"
              },
              {
                "field": "mid_box_Body Mass (g)",
                "type": "quantitative",
                "title": "Median of Body Mass (g)"
              },
              {
                "field": "lower_box_Body Mass (g)",
                "type": "quantitative",
                "title": "Q1 of Body Mass (g)"
              },
              {
                "field": "min_Body Mass (g)",
                "type": "quantitative",
                "title": "Min of Body Mass (g)"
              },
              {"field": "Species", "type": "nominal"}
            ]
          }
        }
      ]
    }
  ]
}
*/
