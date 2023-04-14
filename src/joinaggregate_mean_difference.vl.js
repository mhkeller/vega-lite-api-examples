import * as vl from 'vega-lite-api';

// Write a Node.JS function that uses the vega-lite-api library to generate the vega-lite JSON spec below. The function should return the vega-lite-api object. Call the function `chart` and export as the es6 module default export.

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/movies.json"},
  "transform": [
    {"filter": "datum['IMDB Rating'] != null"},
    {
      "joinaggregate": [{
        "op": "mean",
        "field": "IMDB Rating",
        "as": "AverageRating"
      }]
    },
    {"filter": "(datum['IMDB Rating'] - datum.AverageRating) > 2.5"}
  ],
  "layer": [
    {
      "mark": "bar",
      "encoding": {
        "x": {
          "field": "IMDB Rating", "type": "quantitative",
          "title": "IMDB Rating"
        },
        "y": {"field": "Title", "type": "ordinal"}
      }
    },
    {
      "mark": {"type": "rule", "color": "red"},
      "encoding": {
        "x": {
          "aggregate": "average",
          "field": "AverageRating",
          "type": "quantitative"
        }
      }
    }
  ]
}

*/
