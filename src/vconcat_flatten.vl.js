import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Show a line chart corresponding to selected points.",
  "data": {
    "values": [
      { "id": "001",
        "ra": 243.35,
        "dec": "+54.6",
        "lc": [{"time": 1, "mag": 18.5}, {"time": 2, "mag": 19}]
      },
      { "id": "002",
        "ra": 210.35,
        "dec": "+14.6",
        "lc": [{"time": 1, "mag": 19.5}, {"time": 2, "mag": 20}]
      },
      { "id": "003",
        "ra": 143.35,
        "dec": "+33.6",
        "lc": [{"time": 1, "mag": 19}, {"time": 2, "mag": 18}]
      }
    ]
  },
  "transform": [
    {"flatten": ["lc"]}
  ],
  "vconcat": [
    {
      "width": 300,
      "height": 200,
      "title": "Sky position",
      "transform": [{"aggregate": [], "groupby": ["ra", "dec", "id"]}],
      "mark": "circle",
      "params": [{
        "name": "pts",
        "select": {"type": "point", "fields": ["id"]}
      }],
      "encoding": {
        "x": {"field": "ra", "type": "quantitative", "scale": {"zero": false}},
        "y": {"field": "dec", "type": "quantitative"},
        "color": {
          "condition": {"param": "pts", "value": "steelblue"},
          "value": "grey"
        },
        "size": {"value": 100}
      }
    },
    {
      "width": 300,
      "height": 200,
      "title": "Light curve",
      "transform": [{"filter": {"param": "pts"}}],
      "mark": "line",
      "encoding": {
        "x": {
          "field": "lc.time",
          "type": "quantitative",
          "scale": {"zero": false}
        },
        "y": {"field": "lc.mag", "type": "quantitative"},
        "color": {"value": "steelblue"},
        "detail": {"field": "id", "type": "nominal"}
      }
    }
  ]
}
*/
