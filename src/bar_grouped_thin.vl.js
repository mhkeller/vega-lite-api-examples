import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/movies.json"},
  "width": 500,
  "mark": "bar",
  "encoding": {
    "x": {"field": "Director", "type": "nominal"},
    "xOffset": {"field": "Title", "type": "nominal"},
    "y": {
      "aggregate": "mean",
      "field": "Rotten Tomatoes Rating",
      "type": "quantitative"
    },
    "color": {
      "condition": {
        "test": "datum['IMDB Rating'] === null || datum['Rotten Tomatoes Rating'] === null",
        "value": "#aaa"
      }
    }
  },
  "config": {"mark": {"invalid": null}}
}
*/
