import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate the vega-lite JSON spec below.
 * The function should return the vega-lite-api object.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "width": 300,
  "height": 300,
  "projection": {
    "type": "orthographic",
    "rotate": {"expr": "[rotate0, rotate1, 0]"}
  },
  "params": [
    {
      "name": "rotate0",
      "value": 0,
      "bind": {"input": "range", "min": -90, "max": 90, "step": 1}
    },
    {
      "name": "rotate1",
      "value": 0,
      "bind": {"input": "range", "min": -90, "max": 90, "step": 1}
    },
    {
      "name": "earthquakeSize",
      "value": 6,
      "bind": {"input": "range", "min": 0, "max": 12, "step": 0.1}
    }
  ],
  "layer": [
    {
      "data": {"sphere": true},
      "mark": {"type": "geoshape", "fill": "aliceblue"}
    },
    {
      "data": {
        "name": "world",
        "url": "data/world-110m.json",
        "format": {"type": "topojson", "feature": "countries"}
      },
      "mark": {"type": "geoshape", "fill": "mintcream", "stroke": "black"}
    },
    {
      "data": {
        "name": "earthquakes",
        "url": "data/earthquakes.json",
        "format": {"type": "json", "property": "features"}
      },
      "transform": [
        {"calculate": "datum.geometry.coordinates[0]", "as": "longitude"},
        {"calculate": "datum.geometry.coordinates[1]", "as": "latitude"},
        {
          "filter": "(rotate0 * -1) - 90 < datum.longitude && datum.longitude < (rotate0 * -1) + 90 && (rotate1 * -1) - 90 < datum.latitude && datum.latitude < (rotate1 * -1) + 90"
        },
        {"calculate": "datum.properties.mag", "as": "magnitude"}
      ],
      "mark": {"type": "circle", "color": "red", "opacity": 0.25},
      "encoding": {
        "longitude": {"field": "longitude", "type": "quantitative"},
        "latitude": {"field": "latitude", "type": "quantitative"},
        "size": {
          "legend": null,
          "field": "magnitude",
          "type": "quantitative",
          "scale": {
            "type": "sqrt",
            "domain": [0, 100],
            "range": [0, {"expr": "pow(earthquakeSize, 3)"}]
          }
        },
        "tooltip": [{"field": "magnitude"}]
      }
    }
  ]
}
*/
