import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Time unit transform.",
  "data": {"url": "data/seattle-weather.csv"},
  "mark": "line",
  "transform": [{
    "timeUnit": "month",
    "field": "date",
    "as": "month"
  }],
  "encoding": {
    "x": {
      "field": "month", "type": "temporal",
      "axis": {"format": "%b"}
    },
    "y": {"aggregate": "max", "field": "temp_max"}
  }
}
*/
