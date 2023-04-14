import * as vl from 'vega-lite-api';

// Write a Node.JS function that uses the vega-lite-api library to generate the vega-lite JSON spec below. The function should return the vega-lite-api object. Call the function `chart` and export as the es6 module default export.

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {
    "url": "data/flights-5k.json",
    "format": {"parse": {"date": "date"}}
  },
  "transform": [{"calculate": "hours(datum.date) + minutes(datum.date) / 60", "as": "time"}],
  "vconcat": [{
    "width": 963,
    "height": 100,
    "params": [{
      "name": "brush",
      "select": {"type": "interval", "encodings": ["x"]}
    }],
    "mark": "bar",
    "encoding": {
      "x": {"field": "time", "bin": {"maxbins": 30}},
      "y": {"aggregate": "count"}
    }
  }, {
    "width": 963,
    "height": 100,
    "mark": "bar",
    "encoding": {
      "x": {
        "field": "time",
        "bin": {"maxbins": 30, "extent": {"param": "brush"}}
      },
      "y": {"aggregate": "count"}
    }
  }]
}

*/
