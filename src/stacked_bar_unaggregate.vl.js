import * as vl from 'vega-lite-api';

// Write a Node.JS function that uses the vega-lite-api library to generate the vega-lite JSON spec below. The function should return the vega-lite-api object. Call the function `chart` and export as the es6 module default export.

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {
    "values": [
      {"a": "A1", "b": 28, "c": "x"},
      {"a": "A1", "b": 23, "c": "y"},
      {"a": "A2", "b": 18, "c": "x"},
      {"a": "A2", "b": 21, "c": "y"}
    ]
  },
  "mark": {"type": "bar"},
  "encoding": {
    "x": {"field": "a", "type": "ordinal"},
    "y": {"field": "b", "type": "quantitative", "stack": "zero"},
    "color": {"field": "c", "type": "nominal"}
  }
}

*/
