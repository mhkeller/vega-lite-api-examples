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
      {"category": "A", "group": "x", "value": 0.1},
      {"category": "A", "group": "y", "value": 0.6},
      {"category": "A", "group": "z", "value": 0.9},
      {"category": "B", "group": "x", "value": 0.7},
      {"category": "B", "group": "y", "value": 0.2},
      {"category": "C", "group": "x", "value": 0.6}
    ]
  },
  "config": {"view": {"stroke": "transparent"}},
  "resolve": {"scale": {"x": "independent"}},
  "facet": {"column": {"field": "category", "header": {"orient": "bottom"}}},
  "spec": {
    "width": 100,
    "mark": "bar",
    "encoding": {
      "y": {"field": "value", "type": "quantitative"},
      "x": {"field": "group", "axis": null},
      "color": {"field": "group"}
    }
  }
}
*/
