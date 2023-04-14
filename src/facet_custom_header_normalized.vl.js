import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate the vega-lite JSON spec below.
 * The function should return the vega-lite-api object.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A trellis bar chart showing the US population distribution of age groups and gender in 2000.",
  "data": {"url": "data/population.json"},
  "transform": [
    {"filter": "datum.year == 2000"},
    {"calculate": "datum.sex == 2 ? 'Female' : 'Male'", "as": "gender"}
  ],
  "facet": {
    "column": {
      "field": "gender",
      "header": {"titleFontSize": 20, "labelFontSize": 15}
    }
  },
  "spec": {
    "width": {"step": 17},
    "mark": "bar",
    "encoding": {
      "y": {"aggregate": "sum", "field": "people", "title": "population"},
      "x": {"field": "age", "type": "ordinal"},
      "color": {"field": "gender", "scale": {"range": ["#675193", "#ca8861"]}}
    }
  }
}
*/
