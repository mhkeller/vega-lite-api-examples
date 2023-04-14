import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Drag the sliders to highlight points.",
  "data": {"url": "data/cars.json"},
  "transform": [{"calculate": "year(datum.Year)", "as": "Year"}],
  "layer": [{
    "params": [{
      "name": "CylYr",
      "value": [{"Cylinders": 4, "Year": 1977}],
      "select": {"type": "point", "fields": ["Cylinders", "Year"]},
      "bind": {
        "Cylinders": {"input": "range", "min": 3, "max": 8, "step": 1},
        "Year": {"input": "range", "min": 1969, "max": 1981, "step": 1}
      }
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
  }, {
    "transform": [{"filter": {"param": "CylYr"}}],
    "mark": "circle",
    "encoding": {
      "x": {"field": "Horsepower", "type": "quantitative"},
      "y": {"field": "Miles_per_Gallon", "type": "quantitative"},
      "color": {"field": "Origin", "type": "nominal"},
      "size": {"value": 100}
    }
  }]
}
*/
