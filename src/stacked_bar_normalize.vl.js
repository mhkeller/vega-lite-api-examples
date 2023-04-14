import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 * The function should return the vega-lite-api object.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": { "url": "data/population.json"},
  "transform": [
    {"filter": "datum.year == 2000"},
    {"calculate": "datum.sex == 2 ? 'Female' : 'Male'", "as": "gender"}
  ],
  "mark": "bar",
  "width": {"step": 17},
  "encoding": {
    "y": {
      "aggregate": "sum", "field": "people",
      "title": "population",
      "stack":  "normalize"
    },
    "x": {"field": "age"},
    "color": {
      "field": "gender",
      "scale": {"range": ["#675193", "#ca8861"]}
    }
  }
}
*/
