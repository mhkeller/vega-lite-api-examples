import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/movies.json"},
  "transform": [{
    "sort": [{"field": "IMDB Rating"}],
    "window": [{"op": "count", "field": "count", "as": "Cumulative Count"}],
    "frame": [null, 0]
  }],
  "mark": "area",
  "encoding": {
    "x": {
      "field": "IMDB Rating",
      "type": "quantitative"
    },
    "y": {
      "field": "Cumulative Count",
      "type": "quantitative"
    }
  }
}
*/
