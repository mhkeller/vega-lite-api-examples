import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/population.json"},
  "transform": [
    {"filter": "datum.year == 2000"},
    {"calculate": "datum.sex == 2 ? 'Female' : 'Male'", "as": "gender"}
  ],
  "layer": [
    {
      "mark": {"opacity": 0.7, "type": "area"},
      "encoding": {
        "y": {"aggregate": "sum", "field": "people", "type": "quantitative"},
        "x": {"field": "age", "type": "nominal"},
        "color": {
          "field": "gender",
          "scale": {"range": ["#675193", "#ca8861"]},
          "type": "nominal"
        },
        "opacity": {"value": 0.7}
      }
    },
    {
      "mark": {"type": "line"},
      "encoding": {
        "y": {
          "aggregate": "sum",
          "field": "people",
          "type": "quantitative",
          "stack": "zero"
        },
        "x": {"field": "age", "type": "nominal"},
        "color": {
          "field": "gender",
          "scale": {"range": ["#675193", "#ca8861"]},
          "type": "nominal"
        },
        "opacity": {"value": 0.7}
      }
    }
  ]
}
*/
