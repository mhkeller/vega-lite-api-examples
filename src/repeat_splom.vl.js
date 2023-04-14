import * as vl from 'vega-lite-api';

// Write a Node.JS function that uses the vega-lite-api library to generate the vega-lite JSON spec below. The function should return the vega-lite-api object. Call the function `chart` and export as the es6 module default export.

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/penguins.json"},
  "repeat": {
    "row": [
      "Beak Length (mm)",
      "Beak Depth (mm)",
      "Flipper Length (mm)",
      "Body Mass (g)"
    ],
    "column": [
      "Body Mass (g)",
      "Flipper Length (mm)",
      "Beak Depth (mm)",
      "Beak Length (mm)"
    ]
  },
  "spec": {
    "width": 150,
    "height": 150,
    "mark": "point",
    "encoding": {
      "x": {
        "field": {"repeat": "column"},
        "type": "quantitative",
        "scale": {"zero": false}
      },
      "y": {
        "field": {"repeat": "row"},
        "type": "quantitative",
        "scale": {"zero": false}
      },
      "color": {"field": "Species", "type": "nominal"}
    }
  }
}

*/
