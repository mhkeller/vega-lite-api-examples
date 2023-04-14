import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 * The function should return the vega-lite-api object.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A simple bar chart with ranged data (aka Gantt Chart).",
  "data": {
    "values": [
      {"task": "A", "start": 1, "end": 3},
      {"task": "B", "start": 3, "end": 8},
      {"task": "C", "start": 8, "end": 10}
    ]
  },
  "mark": "bar",
  "encoding": {
    "y": {"field": "task", "type": "ordinal"},
    "x": {"field": "start", "type": "quantitative"},
    "x2": {"field": "end"}
  }
}
*/
