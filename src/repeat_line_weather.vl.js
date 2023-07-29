import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "",
  "data": {
    "url": "data/weather.csv"
  },
  "repeat": [
    "temp_max",
    "precipitation",
    "wind"
  ],
  "spec": {
    "mark": "line",
    "encoding": {
      "x": {"field": "date", "timeUnit": "month"},
      "y": {
        "field": {"repeat": "repeat"},
        "aggregate": "mean"
      },
      "color": {"field": "location"}
    }
  }
}
*/
