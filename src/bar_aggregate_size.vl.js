import * as vl from 'vega-lite-api';

// Write a Node.JS function that uses the vega-lite-api library to generate the vega-lite JSON spec below. The function should return the vega-lite-api object. Call the function `chart` and export as the es6 module default export.

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A bar chart showing the US population distribution of age groups in 2000.",
  "data": { "url": "data/population.json"},
  "transform": [{
    "filter": "datum.year == 2000"
  }],
  "width": {"step": 17},
  "mark": "bar",
  "encoding": {
    "y": {
      "aggregate": "sum", "field": "people",
      "title": "population"
    },
    "x": {
      "field": "age", "type": "ordinal"
    },
    "size": {"value": 10}
  }
}

*/
