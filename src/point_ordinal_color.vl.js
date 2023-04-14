import * as vl from 'vega-lite-api';

// Write a Node.JS function that uses the vega-lite-api library to generate the vega-lite JSON spec below. The function should return the vega-lite-api object. Call the function `chart` and export as the es6 module default export.

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {
    "values": [
      {"a": "B", "x": 2,"y": 2},
      {"a": "A", "x": 1,"y": 1},
      {"a": "A", "x": 4,"y": 4},
      {"a": "B", "x": 5,"y": 5},
      {"a": "C", "x": 3,"y": 3},
      {"a": "C", "x": 6,"y": 6}
    ]
  },
  "mark": "point",
  "encoding": {
    "x": {"field": "x", "type": "quantitative"},
    "y": {"field": "y", "type": "quantitative"},
    "color": {"field": "a", "type": "ordinal"}
  }
}

*/
