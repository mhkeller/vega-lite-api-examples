import * as vl from 'vega-lite-api';

// Write a Node.JS function that uses the vega-lite-api library to generate the vega-lite JSON spec below. The function should return the vega-lite-api object. Call the function `chart` and export as the es6 module default export.

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description":
    "A bar chart showing the US population distribution of age groups and gender in 2000.",
  "data": {
    "url": "data/population.json"
  },
  "transform": [
    {"filter": "datum.year == 2000"},
    {"calculate": "datum.sex == 2 ? 'Female' : 'Male'", "as": "gender"},
    {
      "stack": "people",
      "offset": "normalize",
      "as": ["v1", "v2"],
      "groupby": ["age"],
      "sort": [{"field": "gender", "order": "descending"}]
    }
  ],
  "width": {"step": 17},
  "mark": "bar",
  "encoding": {
    "y": {
      "field": "v1",
      "type": "quantitative",
      "title": "population"
    },
    "y2": {"field": "v2"},
    "x": {
      "field": "age",
      "type": "ordinal"
    },
    "color": {
      "field": "gender",
      "type": "nominal",
      "scale": {
        "range": ["#675193", "#ca8861"]
      }
    }
  }
}

*/
