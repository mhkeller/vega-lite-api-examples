import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/cars.json"},
  "transform": [{"calculate": "year(datum.Year)", "as": "Year"}],
  "params": [{
    "name": "CylYr",
    "select": {"type": "point", "fields": ["Cylinders", "Year"]},
    "value": [
      {"Cylinders": 4, "Year": 1981},
      {"Cylinders": 8, "Year": 1972}
    ]
  }],
  "mark": "circle",
  "encoding": {
    "x": {"field": "Horsepower", "type": "quantitative"},
    "y": {"field": "Miles_per_Gallon", "type": "quantitative"},
    "color": {
      "condition": {"param": "CylYr", "field": "Origin", "type": "nominal"},
      "value": "grey"
    }
  }
}
*/
