import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate the vega-lite JSON spec below.
 * The function should return the vega-lite-api object.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/population.json"},
  "height": {"step": 17},
  "layer": [
    {
      "mark": "bar",
      "encoding": {
        "y": {"field": "age"},
        "x": {
          "aggregate": "sum",
          "field": "people",
          "title": "population",
          "stack": "normalize"
        },
        "color": {"field": "gender", "scale": {"range": ["#675193", "#ca8861"]}}
      }
    },
    {
      "mark": {"type": "text", "opacity": 0.9, "color": "white"},
      "encoding": {
        "y": {"field": "age"},
        "x": {
          "aggregate": "sum",
          "field": "people",
          "title": "population",
          "stack": "normalize",
          "bandPosition": 0.5
        },
        "text": {"aggregate": "sum", "field": "people", "title": "population"},
        "detail": {"field": "gender"}
      }
    }
  ],
  "transform": [
    {"filter": "datum.year == 2000"},
    {"calculate": "datum.sex == 2 ? 'Female' : 'Male'", "as": "gender"}
  ]
}
*/
