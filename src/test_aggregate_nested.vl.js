import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

/*
{

  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "mark": "bar",
  "encoding": {
    "y": { "field": "properties.variety", "type": "nominal"},
    "x": {
      "aggregate": "sum",
      "field": "properties.yield",
      "type": "quantitative"
    },
    "color": {"title": "site", "field": "properties.site", "type": "nominal"}
  },
  "data": {
    "values": {
      "features": [
        {
          "properties": {
            "variety": "Manchuria",
            "yield": 27,
            "site": "University Farm"
          }
        },
       {
          "properties": {
            "variety": "Wisconsin No. 38",
            "yield": 29.33333,
            "site": "Duluth"
          }
        }
      ],
      "type": "FeatureCollection"
    },
    "format": {"type": "json", "property": "features"}
  }
}
*/
