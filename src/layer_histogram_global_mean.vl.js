import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/movies.json"},
  "layer": [{
    "mark": "bar",
    "encoding": {
      "x": {"field": "IMDB Rating", "bin": true},
      "y": {"aggregate": "count"}
    }
  },{
    "mark": "rule",
    "encoding": {
      "x": {"aggregate": "mean", "field": "IMDB Rating"},
      "color": {"value": "red"},
      "size": {"value": 5}
    }
  }]
}
*/
