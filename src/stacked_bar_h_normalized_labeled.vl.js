import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": { "url": "data/population.json"},
  "transform": [
    {"filter": "datum.year == 2000"},
    {"calculate": "datum.sex == 2 ? 'Female' : 'Male'", "as": "gender"}
  ],
  "height": {"step": 17},
  "encoding": {
    "y": {"field": "age"}
  },
  "layer": [{
    "mark": "bar",
    "encoding": {
      "x": {
        "aggregate": "sum", "field": "people",
        "title": "population",
        "stack":  "normalize"
      },
      "color": {
        "field": "gender",
        "scale": {"range": ["#675193", "#ca8861"]}
      }
    }
  }, {
    "mark": {"type": "text", "opacity": 0.9, "color": "white"},
    "encoding": {
      "x": {
        "aggregate": "sum", "field": "people",
        "title": "population",
        "stack":  "normalize",
        "bandPosition": 0.5
      },
      "text": {
        "aggregate": "sum", "field": "people",
        "title": "population"
      },
      "detail": {
        "field": "gender"
      }
    }
  }]
}
*/
