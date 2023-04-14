import * as vl from 'vega-lite-api';

// Write a Node.JS function that uses the vega-lite-api library to generate the vega-lite JSON spec below. The function should return the vega-lite-api object. Call the function `chart` and export as the es6 module default export.

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {
    "values": [
      {"Name": "Peter", "Score": 3},
      {"Name": "Paul", "Score": 1},
      {"Name": "Mary", "Score": 5}
    ]
  },
  "mark": "line",
  "encoding": {
    "x": {
      "type": "nominal",
      "field": "Name",
      "sort": ["Peter", "Mary", "Paul"]
    },
    "y": {"type": "quantitative", "field": "Score"}
  }
}

*/
