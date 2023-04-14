import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate the vega-lite JSON spec below.
 * The function should return the vega-lite-api object.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {
    "url": "data/flights-2k.json",
    "format": {"parse": {"date": "date"}}
  },
  "transform": [{"calculate": "hours(datum.date)", "as": "time"}],
  "repeat": {"column": ["distance", "delay", "time"]},
  "spec": {
    "layer": [{
      "params": [{
        "name": "brush",
        "select": {"type": "point", "encodings": ["x"]}
      }],
      "mark": "bar",
      "encoding": {
        "x": {
          "field": {"repeat": "column"},
          "bin": {"maxbins": 20}
        },
        "y": {"aggregate": "count"},
        "color": {"value": "#ddd"}
      }
    }, {
      "transform": [{"filter": {"param": "brush"}}],
      "mark": "bar",
      "encoding": {
        "x": {
          "field": {"repeat": "column"},
          "bin": {"maxbins": 20}
        },
        "y": {"aggregate": "count"}
      }
    }]
  }
}
*/
