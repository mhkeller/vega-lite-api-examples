import * as vl from 'vega-lite-api';

// Write a Node.JS function that uses the vega-lite-api library to generate the vega-lite JSON spec below. The function should return the vega-lite-api object. Call the function `chart` and export as the es6 module default export.

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/movies.json"},
  "mark": "circle",
  "encoding": {
    "x": {
      "bin": {"maxbins": 2},
      "field": "IMDB Rating"
    },
    "y": {
      "bin": {"maxbins": 2},
      "field": "Rotten Tomatoes Rating"
    },
    "size": {"aggregate": "count"}
  }
}

*/