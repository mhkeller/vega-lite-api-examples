import * as vl from 'vega-lite-api';

// Write a Node.JS function that uses the vega-lite-api library to generate the vega-lite JSON spec below. The function should return the vega-lite-api object. Call the function `chart` and export as the es6 module default export.

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/movies.json"},
  "layer": [
    {
      "mark": "line",
      "encoding": {
        "x": {"bin": true, "field": "IMDB Rating", "type": "quantitative"},
        "y": {
          "aggregate": "mean",
          "field": "US Gross",
          "type": "quantitative",
          "title": "Mean of US and Worldwide Gross"
        },
        "color": {"datum": "US Gross", "type": "nominal"}
      },
      "name": "child__layer_US_Gross"
    },
    {
      "mark": "line",
      "encoding": {
        "x": {"bin": true, "field": "IMDB Rating", "type": "quantitative"},
        "y": {
          "aggregate": "mean",
          "field": "Worldwide Gross",
          "type": "quantitative",
          "title": "Mean of US and Worldwide Gross"
        },
        "color": {"datum": "Worldwide Gross", "type": "nominal"}
      },
      "name": "child__layer_Worldwide_Gross"
    }
  ]
}
*/
