import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate the vega-lite JSON spec below.
 * The function should return the vega-lite-api object.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {
    "url": "data/movies.json"
  },
  "repeat": {
    "layer": ["US Gross", "Worldwide Gross"]
  },
  "spec": {
    "mark": "line",
    "encoding": {
      "x": {
        "bin": true,
        "field": "IMDB Rating",
        "type": "quantitative"
      },
      "y": {
        "aggregate": "mean",
        "field": {"repeat": "layer"},
        "type": "quantitative",
        "title": "Mean of US and Worldwide Gross"
      },
      "color": {
        "datum": {"repeat": "layer"},
        "type": "nominal"
      }
    }
  }
}
*/
