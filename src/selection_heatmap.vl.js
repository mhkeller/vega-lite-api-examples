import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {
    "values": [
      {"actual": "A", "predicted": "A", "count": 13},
      {"actual": "A", "predicted": "B", "count": 0},
      {"actual": "A", "predicted": "C", "count": 0},
      {"actual": "B", "predicted": "A", "count": 0},
      {"actual": "B", "predicted": "B", "count": 10},
      {"actual": "B", "predicted": "C", "count": 6},
      {"actual": "C", "predicted": "A", "count": 0},
      {"actual": "C", "predicted": "B", "count": 0},
      {"actual": "C", "predicted": "C", "count": 9}
    ]
  },
  "params": [{"name": "highlight", "select": "point"}],
  "mark": {"type": "rect", "strokeWidth": 2},
  "encoding": {
    "y": {
      "field": "actual",
      "type": "nominal"
    },
    "x": {
      "field": "predicted",
      "type": "nominal"
    },
    "fill": {
      "field": "count",
      "type": "quantitative"
    },
    "stroke": {
      "condition": {
        "param": "highlight",
        "empty": false,
        "value": "black"
      },
      "value": null
    },
    "opacity": {
      "condition": {"param": "highlight", "value": 1},
      "value": 0.5
    },
    "order": {"condition": {"param": "highlight", "value": 1}, "value": 0}
  },
  "config": {
    "scale": {
      "bandPaddingInner": 0,
      "bandPaddingOuter": 0
    },
    "view": {"step": 40},
    "range": {
      "ramp": {
        "scheme": "yellowgreenblue"
      }
    },
    "axis": {
      "domain": false
    }
  }
}
*/
