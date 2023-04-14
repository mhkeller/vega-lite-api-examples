import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "width": 500,
  "height": 300,
  "params": [
    {
      "name": "projection",
      "value": "equalEarth",
      "bind": {
        "input": "select",
        "options": [
          "albers",
          "albersUsa",
          "azimuthalEqualArea",
          "azimuthalEquidistant",
          "conicConformal",
          "conicEqualArea",
          "conicEquidistant",
          "equalEarth",
          "equirectangular",
          "gnomonic",
          "mercator",
          "naturalEarth1",
          "orthographic",
          "stereographic",
          "transverseMercator"
        ]
      }
    }
  ],
  "data": {
    "url": "data/world-110m.json",
    "format": {"type": "topojson", "feature": "countries"}
  },
  "projection": {"type": {"expr": "projection"}},
  "mark": {"type": "geoshape", "fill": "lightgray", "stroke": "gray"}
}
*/
