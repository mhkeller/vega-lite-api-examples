import * as vl from 'vega-lite-api';

// Write a Node.JS function that uses the vega-lite-api library to generate the vega-lite JSON spec below. The function should return the vega-lite-api object. Call the function `chart` and export as the es6 module default export.

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/cars.json"},
  "params": [
    {
      "name": "opacityVar",
      "value": 50,
      "bind": {"input": "range", "min": 1, "max": 100}
    },
    {
      "name": "sel",
      "select": {"type": "point", "fields": ["Miles_per_Gallon"], "toggle": false}
    }
  ],
  "mark": {
    "type": "point",
    "size": {"expr": "sel.Miles_per_Gallon * 10 || 75"},
    "opacity": {"expr": "opacityVar/100"}
  },
  "encoding": {
    "x": {"field": "Horsepower", "type": "quantitative"},
    "y": {"field": "Miles_per_Gallon", "type": "quantitative"}
  }
}

*/
