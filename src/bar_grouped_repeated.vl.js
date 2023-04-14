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
  "repeat": {"layer": ["Worldwide Gross", "US Gross"]},
  "spec": {
    "mark": "bar",
    "encoding": {
      "x": {
        "field": "Major Genre",
        "type": "nominal"
      },
      "y": {
        "aggregate": "sum",
        "field": {"repeat": "layer"},
        "type": "quantitative",
        "title": "Total Gross"
      },
      "color": {"datum": {"repeat": "layer"}, "title": "Gross"},
      "xOffset": {"datum": {"repeat": "layer"}}
    }
  },
  "config": {
    "mark": {"invalid": null}
  }
}
*/
