import * as vl from 'vega-lite-api';

// Write a Node.JS function that uses the vega-lite-api library to generate the vega-lite JSON spec below. The function should return the vega-lite-api object. Call the function `chart` and export as the es6 module default export.

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/cars.json"},
  "layer": [
    {
      "transform": [
        {"timeUnit": {"unit": "year"}, "field": "Year", "as": "year_Year"},
        {
          "aggregate": [
            {
              "op": "ci0",
              "field": "Miles_per_Gallon",
              "as": "lower_Miles_per_Gallon"
            },
            {
              "op": "ci1",
              "field": "Miles_per_Gallon",
              "as": "upper_Miles_per_Gallon"
            },
            {
              "op": "mean",
              "field": "Miles_per_Gallon",
              "as": "center_Miles_per_Gallon"
            }
          ],
          "groupby": ["year_Year"]
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
              "title": "Mean of Miles per Gallon (95% CIs)"
            },
            "y2": {"field": "upper_Miles_per_Gallon"},
            "x": {
              "title": "Year (year)",
              "type": "temporal",
              "field": "year_Year"
            },
            "tooltip": [
              {
                "field": "upper_Miles_per_Gallon",
                "type": "quantitative",
                "title": "Ci1 of Miles_per_Gallon"
              },
              {
                "field": "lower_Miles_per_Gallon",
                "type": "quantitative",
                "title": "Ci0 of Miles_per_Gallon"
              },
              {
                "field": "center_Miles_per_Gallon",
                "type": "quantitative",
                "title": "Mean of Miles_per_Gallon"
              },
              {"title": "Year (year)", "type": "temporal", "field": "year_Year"}
            ]
          }
        }
      ]
    },
    {
      "mark": "line",
      "encoding": {
        "x": {"field": "Year", "timeUnit": "year"},
        "y": {"aggregate": "mean", "field": "Miles_per_Gallon"}
      }
    }
  ]
}
*/
