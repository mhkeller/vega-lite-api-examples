import * as vl from 'vega-lite-api';

// Write a Node.JS function that uses the vega-lite-api library to generate the vega-lite JSON spec below. The function should return the vega-lite-api object. Call the function `chart` and export as the es6 module default export.

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/movies.json"},
  "layer": [
    {
      "mark": "bar",
      "encoding": {
        "x": {
          "field": "bin_IMDB_Rating",
          "type": "quantitative",
          "scale": {"zero": false},
          "title": "IMDB Rating",
          "bin": "binned"
        },
        "x2": {"field": "bin_IMDB_Rating_end"},
        "y": {"field": "Cumulative Count", "type": "quantitative"}
      }
    },
    {
      "mark": {"type": "bar", "color": "yellow", "opacity": 0.5},
      "encoding": {
        "x": {
          "field": "bin_IMDB_Rating",
          "type": "quantitative",
          "scale": {"zero": false},
          "title": "IMDB Rating",
          "bin": "binned"
        },
        "x2": {"field": "bin_IMDB_Rating_end"},
        "y": {"field": "count", "type": "quantitative"}
      }
    }
  ],
  "transform": [
    {"bin": true, "field": "IMDB Rating", "as": "bin_IMDB_Rating"},
    {
      "aggregate": [{"op": "count", "as": "count"}],
      "groupby": ["bin_IMDB_Rating", "bin_IMDB_Rating_end"]
    },
    {"filter": "datum.bin_IMDB_Rating !== null"},
    {
      "sort": [{"field": "bin_IMDB_Rating"}],
      "window": [{"op": "sum", "field": "count", "as": "Cumulative Count"}],
      "frame": [null, 0]
    }
  ]
}
*/
