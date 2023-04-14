import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "width": 200,
  "height": {"step": 16},
  "data": {"url": "data/movies.json"},
  "encoding": {
    "y": {
      "field": "Major Genre",
      "type": "nominal",
      "axis": null
    }
  },
  "layer": [{
    "mark": {"type": "bar", "color": "#ddd"},
    "encoding": {
      "x": {
        "aggregate": "mean",
        "field": "IMDB Rating",
        "scale": {"domain": [0, 10]},
        "title": "Mean IMDB Ratings"
      }
    }
  }, {
    "mark": {"type": "text", "align": "left", "x": 5},
    "encoding": {
      "text": {"field": "Major Genre"},
      "detail": {"aggregate": "count"}
    }
  }]
}
*/
