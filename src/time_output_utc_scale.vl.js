import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Using utc scale with local time input.",
  "data": {
    "values": [
      {"date": "Sun, 01 Jan 2012 23:00:00", "price": 150},
      {"date": "Sun, 02 Jan 2012 00:00:00", "price": 100},
      {"date": "Sun, 02 Jan 2012 01:00:00", "price": 170},
      {"date": "Sun, 02 Jan 2012 02:00:00", "price": 165},
      {"date": "Sun, 02 Jan 2012 03:00:00", "price": 200}
    ]
  },
  "mark": "line",
  "encoding": {
    "x": {
      "field": "date",
      "timeUnit": "yearmonthdatehoursminutes",
      "scale": {"type": "utc"},
      "axis": { "labelAngle": 15 }
    },
    "y": {"field": "price", "type": "quantitative"}
  }
}
*/
