import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Line with center band for timeUnit",
  "data": {"url": "data/seattle-weather.csv"},
  "mark": {
    "type": "line",
    "interpolate": "monotone"
  },
  "encoding": {
    "x": {"timeUnit": "month", "field": "date", "bandPosition": 0.5},
    "y": {"aggregate": "mean", "field": "temp_max"}
  }
}
*/
