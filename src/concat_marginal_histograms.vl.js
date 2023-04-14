import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/movies.json"},
  "spacing": 15,
  "bounds": "flush",
  "vconcat": [{
    "mark": "bar",
    "height": 60,
    "encoding": {
      "x": {
        "bin": true,
        "field": "IMDB Rating",
        "axis": null
      },
      "y": {
        "aggregate": "count",
        "scale": {
          "domain": [0,1000]
        },
        "title": ""
      }
    }
  }, {
    "spacing": 15,
    "bounds": "flush",
    "hconcat": [{
      "mark": "rect",
      "encoding": {
        "x": {"bin": true, "field": "IMDB Rating"},
        "y": {"bin": true, "field": "Rotten Tomatoes Rating"},
        "color": {"aggregate": "count"}
      }
    }, {
      "mark": "bar",
      "width": 60,
      "encoding": {
        "y": {
          "bin": true,
          "field": "Rotten Tomatoes Rating",
          "axis": null
        },
        "x": {
          "aggregate": "count",
          "scale": {"domain": [0,1000]},
          "title": ""
        }
      }
    }]
  }],
  "config": {
    "view": {
      "stroke": "transparent"
    }
  }
}
*/
