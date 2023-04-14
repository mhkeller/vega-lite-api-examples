import * as vl from 'vega-lite-api';

// Write a Node.JS function that uses the vega-lite-api library to generate the vega-lite JSON spec below. The function should return the vega-lite-api object. Call the function `chart` and export as the es6 module default export.

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A simple radial chart with embedded data.",
  "data": {"values": [12, 23, 47, 6, 52, 19]},
  "layer": [
    {
      "mark": {"type": "arc", "innerRadius": 20, "stroke": "#fff"},
      "encoding": {
        "theta": {"field": "data", "type": "quantitative", "stack": true},
        "radius": {
          "field": "data",
          "scale": {"type": "sqrt", "zero": true, "rangeMin": 20}
        },
        "color": {"field": "data", "type": "nominal", "legend": null}
      }
    },
    {
      "mark": {"type": "text", "radiusOffset": 10},
      "encoding": {
        "theta": {"field": "data", "type": "quantitative", "stack": true},
        "radius": {
          "field": "data",
          "scale": {"type": "sqrt", "zero": true, "rangeMin": 20}
        },
        "color": {"field": "data", "type": "nominal", "legend": null},
        "text": {"field": "data", "type": "quantitative"}
      }
    }
  ]
}
*/
