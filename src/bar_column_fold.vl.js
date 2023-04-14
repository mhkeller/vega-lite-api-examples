import * as vl from 'vega-lite-api';

// Write a Node.JS function that uses the vega-lite-api library to generate the vega-lite JSON spec below. The function should return the vega-lite-api object. Call the function `chart` and export as the es6 module default export.

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {
    "values": [
      {"country": "USA", "gold": 10, "silver": 20},
      {"country": "Canada", "gold": 7, "silver": 26}
    ]
  },
  "transform": [{"fold": ["gold", "silver"]}],
  "mark": "bar",
  "encoding": {
    "column": {"field": "key",  "type": "nominal"},
    "x": {"field": "country", "type": "nominal"},
    "y": {"field": "value", "type": "quantitative"},
    "color": {"field": "country", "type": "nominal"}
  }
}

*/
