import * as vl from 'vega-lite-api';

// Write a Node.JS function that uses the vega-lite-api library to generate the vega-lite JSON spec below. The function should return the vega-lite-api object. Call the function `chart` and export as the es6 module default export.

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {
    "url": "data/normal-2d.json"
  },
  "transform": [
    {
      "quantile": "u",
      "step": 0.01,
      "as": [
        "p",
        "v"
      ]
    },
    {
      "calculate": "quantileUniform(datum.p)",
      "as": "unif"
    },
    {
      "calculate": "quantileNormal(datum.p)",
      "as": "norm"
    }
  ],
  "hconcat": [
    {
      "mark": "point",
      "encoding": {
        "x": {
          "field": "unif",
          "type": "quantitative"
        },
        "y": {
          "field": "v",
          "type": "quantitative"
        }
      }
    },
    {
      "mark": "point",
      "encoding": {
        "x": {
          "field": "norm",
          "type": "quantitative"
        },
        "y": {
          "field": "v",
          "type": "quantitative"
        }
      }
    }
  ]
}

*/
