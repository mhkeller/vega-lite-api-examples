import * as vl from 'vega-lite-api';

// Write a Node.JS function that uses the vega-lite-api library to generate the vega-lite JSON spec below. The function should return the vega-lite-api object. Call the function `chart` and export as the es6 module default export.

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/cars.json"},
  "layer": [
    {
      "mark": "point",
      "encoding": {
        "x": {"field": "Horsepower", "type": "quantitative"},
        "y": {"field": "Miles_per_Gallon", "type": "quantitative"}
      }
    },
    {
      "transform": [
        {
          "aggregate": [
            {
              "op": "stdev",
              "field": "Miles_per_Gallon",
              "as": "extent_Miles_per_Gallon"
            },
            {
              "op": "mean",
              "field": "Miles_per_Gallon",
              "as": "center_Miles_per_Gallon"
            }
          ],
          "groupby": []
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
          "mark": {"opacity": 0.3, "type": "rect", "style": "errorband-band"},
          "encoding": {
            "y": {
              "field": "lower_Miles_per_Gallon",
              "type": "quantitative",
              "title": "Miles per Gallon"
            },
            "y2": {"field": "upper_Miles_per_Gallon"},
            "tooltip": [
              {
                "field": "center_Miles_per_Gallon",
                "type": "quantitative",
                "title": "Mean of Miles per Gallon"
              },
              {
                "field": "upper_Miles_per_Gallon",
                "type": "quantitative",
                "title": "Mean + stdev of Miles per Gallon"
              },
              {
                "field": "lower_Miles_per_Gallon",
                "type": "quantitative",
                "title": "Mean - stdev of Miles per Gallon"
              }
            ]
          }
        }
      ]
    }
  ]
}
*/
