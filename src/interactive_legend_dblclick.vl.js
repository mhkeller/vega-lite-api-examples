import * as vl from 'vega-lite-api';

// Write a Node.JS function that uses the vega-lite-api library to generate the vega-lite JSON spec below. The function should return the vega-lite-api object. Call the function `chart` and export as the es6 module default export.

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "width": 300, "height": 200,
  "data": {"url": "data/unemployment-across-industries.json"},
  "mark": "area",
  "params": [{
    "name": "industry",
    "select": {"type": "point", "fields": ["series"]},
    "bind": {"legend": "dblclick"}
  }],
  "encoding": {
    "x": {
      "timeUnit": "yearmonth", "field": "date",
      "axis": {"domain": false, "format": "%Y", "tickSize": 0}
    },
    "y": {
      "aggregate": "sum", "field": "count",
      "stack": "center", "axis": null
    },
    "color": {
      "field":"series",
      "scale": {"scheme": "category20b"}
    },
    "opacity": {
      "condition": {"param": "industry", "value": 1},
      "value": 0.2
    }
  }
}

*/
