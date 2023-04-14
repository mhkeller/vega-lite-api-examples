import * as vl from 'vega-lite-api';

// Write a Node.JS function that uses the vega-lite-api library to generate the vega-lite JSON spec below. The function should return the vega-lite-api object. Call the function `chart` and export as the es6 module default export.

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Seattle Temperature Range, 2012-2015",
  "data": {
    "url": "data/seattle-weather.csv"
  },
  "width": 600,
  "height": 300,
  "mark": "area",
  "encoding": {
    "x": {
      "axis": {"format": "%b"},
      "title": "Date",
      "field": "date",
      "timeUnit": "monthdate"
    },
    "y": {
      "title": "Daily Temperature Range (C)",
      "aggregate": "max",
      "field": "temp_max"
    },
    "y2": {"aggregate": "min", "field": "temp_min"},
    "opacity": { "value": 0.7 }
  }
}

*/
