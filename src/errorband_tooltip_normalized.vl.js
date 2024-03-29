import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/cars.json"},
  "transform": [
    {"timeUnit": {"unit": "year"}, "field": "Year", "as": "year_Year"},
    {
      "aggregate": [
        {
          "op": "stderr",
          "field": "Miles_per_Gallon",
          "as": "extent_Miles_per_Gallon"
        },
        {
          "op": "mean",
          "field": "Miles_per_Gallon",
          "as": "center_Miles_per_Gallon"
        }
      ],
      "groupby": ["year_Year", "Miles_per_Gallon"]
    },
    {
      "calculate": "datum[\"center_Miles_per_Gallon\"] + datum[\"extent_Miles_per_Gallon\"]",
      "as": "upper_Miles_per_Gallon"
    },
    {
      "calculate": "datum[\"center_Miles_per_Gallon\"] - datum[\"extent_Miles_per_Gallon\"]",
      "as": "lower_Miles_per_Gallon"
    }
  ],
  "layer": [
    {
      "mark": {
        "opacity": 0.3,
        "type": "area",
        "ariaRoleDescription": "errorband",
        "style": "errorband-band"
      },
      "encoding": {
        "y": {
          "field": "lower_Miles_per_Gallon",
          "type": "quantitative",
          "title": "Miles_per_Gallon"
        },
        "y2": {"field": "upper_Miles_per_Gallon"},
        "x": {"title": "Year (year)", "type": "temporal", "field": "year_Year"},
        "tooltip": {"field": "Miles_per_Gallon", "type": "quantitative"}
      }
    }
  ]
}
*/
