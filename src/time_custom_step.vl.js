import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Showing sum of distance traveled for each 5-minute interval.",
  "data": {
    "values": [
      {"date": "Sun, 01 Jan 2012 00:00:00", "distance": 1},
      {"date": "Sun, 01 Jan 2012 00:01:00", "distance": 1},
      {"date": "Sun, 01 Jan 2012 00:02:00", "distance": 2},
      {"date": "Sun, 01 Jan 2012 00:03:00", "distance": 1},
      {"date": "Sun, 01 Jan 2012 00:04:00", "distance": 4},
      {"date": "Sun, 01 Jan 2012 00:05:00", "distance": 2},
      {"date": "Sun, 01 Jan 2012 00:06:00", "distance": 5},
      {"date": "Sun, 01 Jan 2012 00:07:00", "distance": 2},
      {"date": "Sun, 01 Jan 2012 00:08:00", "distance": 6},
      {"date": "Sun, 01 Jan 2012 00:09:00", "distance": 4},
      {"date": "Sun, 01 Jan 2012 00:10:00", "distance": 1},
      {"date": "Sun, 01 Jan 2012 00:11:00", "distance": 1},
      {"date": "Sun, 01 Jan 2012 00:12:00", "distance": 3},
      {"date": "Sun, 01 Jan 2012 00:13:00", "distance": 0},
      {"date": "Sun, 01 Jan 2012 00:14:00", "distance": 2},
      {"date": "Sun, 01 Jan 2012 00:15:00", "distance": 3}
    ]
  },
  "mark": "bar",
  "encoding": {
    "x": {
      "field": "date",
      "timeUnit": {
        "unit": "minutes",
        "step": 5
      }
    },
    "y": {"field": "distance", "aggregate": "sum"}
  }
}
*/
