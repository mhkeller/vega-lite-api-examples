import * as vl from 'vega-lite-api';

// Write a Node.JS function that uses the vega-lite-api library to generate the vega-lite JSON spec below. The function should return the vega-lite-api object. Call the function `chart` and export as the es6 module default export.

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/flights-5k.json"},
  "mark": {"type": "bar"},
  "encoding": {
    "x": {
      "field": "delay",
      "type": "quantitative",
      "bin": {"maxbins": 100, "minstep": 1},
      "axis": {"title": "delay", "titleAnchor": "start", "format": "d"}
    }
  },
  "width": 300,
  "height": 50,
  "config": {"view": {"stroke": null}}
}

*/
