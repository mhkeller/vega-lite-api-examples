import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate the vega-lite JSON spec below.
 * The function should return the vega-lite-api object.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/unemployment-across-industries.json"},
  "layer": [
    {
      "params": [
        {"name": "brush", "select": {"type": "interval", "encodings": ["x"]}}
      ],
      "mark": "area",
      "encoding": {
        "x": {"timeUnit": "yearmonth", "field": "date"},
        "y": {"aggregate": "sum", "field": "count"}
      }
    },
    {
      "mark": {"type": "area", "color": "goldenrod"},
      "transform": [{"filter": {"param": "brush"}}],
      "encoding": {
        "x": {"timeUnit": "yearmonth", "field": "date"},
        "y": {"aggregate": "sum", "field": "count"}
      }
    }
  ]
}
*/
