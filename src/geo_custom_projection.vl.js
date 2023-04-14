import * as vl from 'vega-lite-api';

// Write a Node.JS function that uses the vega-lite-api library to generate the vega-lite JSON spec below. The function should return the vega-lite-api object. Call the function `chart` and export as the es6 module default export.

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "width": 900,
  "height": 560,
  "projection": {
    "type": "albersUsa",
    "scale": 3000,
    "translate": [
      1200,
      700
    ]
  },
  "layer": [
    {
      "data": {
        "url": "data/us-10m.json",
        "format": {
          "type": "topojson",
          "feature": "states"
        }
      },
      "mark": {
        "type": "geoshape",
        "fill": "#ccc",
        "stroke": "#fff"
      }
    },
    {
      "data": {
        "url": "data/airports.csv"
      },
      "mark": "circle",
      "encoding": {
        "longitude": {
          "field": "longitude",
          "type": "quantitative"
        },
        "latitude": {
          "field": "latitude",
          "type": "quantitative"
        },
        "size": {
          "value": 10
        }
      }
    }
  ],
  "config": {
    "view": {
      "stroke": null
    }
  }
}

*/
