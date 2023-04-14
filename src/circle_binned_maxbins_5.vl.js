import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/movies.json"},
  "mark": "circle",
  "encoding": {
    "x": {
      "bin": {"maxbins": 5},
      "field": "IMDB Rating"
    },
    "y": {
      "bin": {"maxbins": 5},
      "field": "Rotten Tomatoes Rating"
    },
    "size": {"aggregate": "count"}
  }
}
*/
