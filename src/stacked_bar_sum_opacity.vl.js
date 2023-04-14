import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate the vega-lite JSON spec below.
 * The function should return the vega-lite-api object.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A bar chart showing the US population distribution of age groups and gender in 2000.",
  "data": {"url": "data/population.json"},
  "transform": [
    {"filter": "datum.year == 2000"},
    {"calculate": "datum.sex == 2 ? 'Female' : 'Male'", "as": "gender"}
  ],
  "width": {"step": 17},
  "mark": "bar",
  "encoding": {
    "x": {
      "field": "age",
      "type": "ordinal"
    },
    "y": {
      "aggregate": "sum",
      "field": "people",
      "type": "quantitative",
      "title": "population"
    },
    "opacity": {"field": "people", "type": "quantitative"}
  }
}
*/
