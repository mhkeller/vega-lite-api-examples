import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Nested concatenation aligned by setting axis minExtent",
  "data": {
    "url": "data/movies.json"
  },
  "vconcat": [{
    "title": "Ratings",
    "repeat": {"column": ["Rotten Tomatoes Rating", "IMDB Rating"]},
    "spec": {
      "width": 150,
      "height": 50,
      "mark": "bar",
      "encoding": {
        "x": {
          "field": {"repeat": "column"},
          "bin": {"maxbins": 20}
        },
        "y": {"aggregate": "count"}
      }
    }
  },{
    "title": "Gross",
    "repeat": {"column": ["US Gross", "Worldwide Gross"]},
    "spec": {
      "width": 150,
      "height": 50,
      "encoding": {
        "x": {
          "field": {"repeat": "column"},
          "bin": {"maxbins": 20}
        },
        "y": {"aggregate": "count"}
      },
      "mark": "bar"
    }
  }],
  "config": {
    "countTitle": "Count",
    "axisX": {"titleLimit": 150},
    "axisY": {
      "minExtent": 40
    }
  }
}
*/
