import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */


/*
{
  "data": {"url": "data/weather.csv"},
  "align": "all",
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "",
  "concat": [
    {
      "mark": "line",
      "encoding": {
        "x": {"field": "date", "timeUnit": "month"},
        "y": {"field": "temp_max", "aggregate": "mean"},
        "color": {"field": "location"}
      },
      "name": "child__temp_max"
    },
    {
      "mark": "line",
      "encoding": {
        "x": {"field": "date", "timeUnit": "month"},
        "y": {"field": "precipitation", "aggregate": "mean"},
        "color": {"field": "location"}
      },
      "name": "child__precipitation"
    },
    {
      "mark": "line",
      "encoding": {
        "x": {"field": "date", "timeUnit": "month"},
        "y": {"field": "wind", "aggregate": "mean"},
        "color": {"field": "location"}
      },
      "name": "child__wind"
    }
  ]
}
*/
