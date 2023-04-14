import * as vl from 'vega-lite-api';

// Write a Node.JS function that uses the vega-lite-api library to generate the vega-lite JSON spec below. The function should return the vega-lite-api object. Call the function `chart` and export as the es6 module default export.

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Cars from Japan compared to all cars. Demonstrates independent legends in layers.",
  "data": {"url": "data/cars.json"},
  "layer": [
    {
      "mark": "circle",
      "encoding": {
        "x": {
          "bin": true,
          "field": "Acceleration",
          "type": "quantitative"
        },
        "y": {
          "bin": true,
          "field": "Horsepower",
          "type": "quantitative"
        },
        "size": {
          "aggregate": "count",
          "type": "quantitative",
          "title": "All Cars Count"
        }
      }
    },
    {
      "transform": [{
        "filter": "datum.Origin === 'Japan'"
      }],
      "mark": "circle",
      "encoding": {
        "x": {
          "bin": true,
          "field": "Acceleration",
          "type": "quantitative"
        },
        "y": {
          "bin": true,
          "field": "Horsepower",
          "type": "quantitative"
        },
        "size": {
          "aggregate": "count",
          "type": "quantitative",
          "title": "Cars from Japan Count"
        },
        "color": {
          "value": "firebrick"
        }
      }
    }
  ],
  "resolve": {"legend": {"size": "independent"}}
}

*/
