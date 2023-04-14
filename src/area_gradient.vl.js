import * as vl from 'vega-lite-api';

// Write a Node.JS function that uses the vega-lite-api library to generate the vega-lite JSON spec below. The function should return the vega-lite-api object. Call the function `chart` and export as the es6 module default export.

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Google's stock price over time.",
  "data": {
    "url": "data/stocks.csv"
  },
  "transform": [
    {
      "filter": "datum.symbol==='GOOG'"
    }
  ],
  "mark": {
    "type": "area",
    "line": {
      "color": "darkgreen"
    },
    "color": {
      "x1": 1,
      "y1": 1,
      "x2": 1,
      "y2": 0,
      "gradient": "linear",
      "stops": [
        {
          "offset": 0,
          "color": "white"
        },
        {
          "offset": 1,
          "color": "darkgreen"
        }
      ]
    }
  },
  "encoding": {
    "x": {
      "field": "date",
      "type": "temporal"
    },
    "y": {
      "field": "price",
      "type": "quantitative"
    }
  }
}

*/