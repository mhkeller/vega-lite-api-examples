import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */


/*
{
  "data": {
    "url": "data/flights-2k.json",
    "format": {"parse": {"date": "date"}}
  },
  "align": "all",
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "transform": [{"calculate": "hours(datum.date)", "as": "time"}],
  "columns": 3,
  "concat": [
    {
      "mark": "bar",
      "encoding": {
        "x": {"field": "distance", "bin": {"maxbins": 20}},
        "y": {"aggregate": "count"}
      },
      "name": "child__column_distance"
    },
    {
      "mark": "bar",
      "encoding": {
        "x": {"field": "delay", "bin": {"maxbins": 20}},
        "y": {"aggregate": "count"}
      },
      "name": "child__column_delay"
    },
    {
      "mark": "bar",
      "encoding": {
        "x": {"field": "time", "bin": {"maxbins": 20}},
        "y": {"aggregate": "count"}
      },
      "name": "child__column_time"
    }
  ]
}
*/
