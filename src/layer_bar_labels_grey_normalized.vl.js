import * as vl from 'vega-lite-api';

// Write a Node.JS function that uses the vega-lite-api library to generate the vega-lite JSON spec below. The function should return the vega-lite-api object. Call the function `chart` and export as the es6 module default export.

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "width": 200,
  "height": {"step": 16},
  "data": {"url": "data/movies.json"},
  "layer": [
    {
      "mark": {"type": "bar", "color": "#ddd"},
      "encoding": {
        "y": {"field": "Major Genre", "type": "nominal", "axis": null},
        "x": {
          "aggregate": "mean",
          "field": "IMDB Rating",
          "scale": {"domain": [0, 10]},
          "title": "Mean IMDB Ratings"
        }
      }
    },
    {
      "mark": {"type": "text", "align": "left", "x": 5},
      "encoding": {
        "y": {"field": "Major Genre", "type": "nominal", "axis": null},
        "text": {"field": "Major Genre"},
        "detail": {"aggregate": "count"}
      }
    }
  ]
}
*/
