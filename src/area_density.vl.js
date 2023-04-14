import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {
    "url": "data/movies.json"
  },
  "width": 400,
  "height": 100,
  "transform":[{
    "density": "IMDB Rating",
    "bandwidth": 0.3
  }],
  "mark": "area",
  "encoding": {
    "x": {
      "field": "value",
      "title": "IMDB Rating",
      "type": "quantitative"
    },
    "y": {
      "field": "density",
      "type": "quantitative"
    }
  }
}
*/
