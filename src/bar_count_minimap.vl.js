import * as vl from 'vega-lite-api';

// Write a Node.JS function that uses the vega-lite-api library to generate the vega-lite JSON spec below. The function should return the vega-lite-api object. Call the function `chart` and export as the es6 module default export.

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/cars.json"},
  "hconcat": [{
    "mark": "bar",
    "transform": [{
      "filter": {"param": "brush"}
    }],
    "encoding": {
      "y": {
        "field": "Name",
        "type": "nominal",
        "axis": {"minExtent": 200, "title": null},
        "sort": "-x"
      },
      "x": {
        "aggregate": "count",
        "scale":{"domain":  [0, 6]},
        "axis": {"orient": "top"}
      }
    }
  }, {
    "height": 200,
    "width": 50,
    "params": [{
      "name": "brush",
      "select": {
        "type": "interval",
        "encodings": ["y"]
      }
    }],
    "mark": "bar",
    "encoding": {
      "y": {
        "field": "Name",
        "type": "nominal",
        "sort": "-x",
        "axis": null
      },
      "x": {
        "aggregate": "count",
        "axis": null
      }
    }
  }]
}

*/