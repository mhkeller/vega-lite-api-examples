import * as vl from 'vega-lite-api';

// Write a Node.JS function that uses the vega-lite-api library to generate the vega-lite JSON spec below. The function should return the vega-lite-api object. Call the function `chart` and export as the es6 module default export.

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Bar chart with text labels. Set domain to make the frame cover the labels.",
  "data": {
    "values": [
      {"a": "A", "b": 28},
      {"a": "B", "b": 55},
      {"a": "C", "b": 43}
    ]
  },
  "encoding": {
    "y": {"field": "a", "type": "nominal"},
    "x": {"field": "b", "type": "quantitative", "scale": {"domain": [0, 60]}}
  },
  "layer": [{
    "mark": "bar"
  }, {
    "mark": {
      "type": "text",
      "align": "left",
      "baseline": "middle",
      "dx": 3
    },
    "encoding": {
      "text": {"field": "b", "type": "quantitative"}
    }
  }]
}

*/
