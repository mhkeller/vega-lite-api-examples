import * as vl from 'vega-lite-api';

// Write a Node.JS function that uses the vega-lite-api library to generate the vega-lite JSON spec below. The function should return the vega-lite-api object. Call the function `chart` and export as the es6 module default export.

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/movies.json"},
  "config": {"mark": {"invalid": null}},
  "layer": [
    {
      "mark": "bar",
      "encoding": {
        "x": {"field": "Major Genre", "type": "nominal"},
        "y": {
          "aggregate": "sum",
          "field": "Worldwide Gross",
          "type": "quantitative",
          "title": "Total Gross"
        },
        "color": {
          "datum": "Worldwide Gross",
          "title": "Gross",
          "type": "nominal"
        },
        "xOffset": {"datum": "Worldwide Gross", "type": "nominal"}
      },
      "name": "child__layer_Worldwide_Gross"
    },
    {
      "mark": "bar",
      "encoding": {
        "x": {"field": "Major Genre", "type": "nominal"},
        "y": {
          "aggregate": "sum",
          "field": "US Gross",
          "type": "quantitative",
          "title": "Total Gross"
        },
        "color": {"datum": "US Gross", "title": "Gross", "type": "nominal"},
        "xOffset": {"datum": "US Gross", "type": "nominal"}
      },
      "name": "child__layer_US_Gross"
    }
  ]
}
*/
