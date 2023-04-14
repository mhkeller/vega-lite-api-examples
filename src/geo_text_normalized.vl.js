import * as vl from 'vega-lite-api';

// Write a Node.JS function that uses the vega-lite-api library to generate the vega-lite JSON spec below. The function should return the vega-lite-api object. Call the function `chart` and export as the es6 module default export.

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "width": 800,
  "height": 500,
  "layer": [
    {
      "data": {
        "url": "data/us-10m.json",
        "format": {"type": "topojson", "feature": "states"}
      },
      "mark": {"type": "geoshape", "fill": "lightgray", "stroke": "white"},
      "projection": {"type": "albersUsa"}
    },
    {
      "data": {"url": "data/us-state-capitals.json"},
      "layer": [
        {
          "mark": {"type": "circle", "color": "orange"},
          "projection": {"type": "albersUsa"},
          "encoding": {
            "longitude": {"field": "lon", "type": "quantitative"},
            "latitude": {"field": "lat", "type": "quantitative"}
          }
        },
        {
          "mark": {"type": "text", "dy": -10},
          "encoding": {
            "longitude": {"field": "lon", "type": "quantitative"},
            "latitude": {"field": "lat", "type": "quantitative"},
            "text": {"field": "city", "type": "nominal"}
          },
          "projection": {"type": "albersUsa"}
        }
      ]
    }
  ]
}
*/
