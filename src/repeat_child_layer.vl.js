import * as vl from 'vega-lite-api';

// Write a Node.JS function that uses the vega-lite-api library to generate the vega-lite JSON spec below. The function should return the vega-lite-api object. Call the function `chart` and export as the es6 module default export.

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Summarized and per year weather information for Seatle and New York.",
  "data": {"url": "data/weather.csv"},
  "repeat": {"column": ["temp_max", "precipitation", "wind"]},
  "spec": {
    "layer": [
      {
        "mark": "line",
        "encoding": {
          "y": {
            "aggregate": "mean",
            "field": {"repeat": "column"}
          },
          "x": {
            "timeUnit": "month",
            "field": "date",
            "type": "ordinal"
          },
          "detail": {
            "timeUnit": "year",
            "field": "date"
          },
          "color": {"field": "location"},
          "opacity": {"value": 0.2}
        }
      },
      {
        "mark": "line",
        "encoding": {
          "y": {
            "aggregate": "mean",
            "field": {"repeat": "column"}
          },
          "x": {
            "timeUnit": "month",
            "field": "date",
            "type": "ordinal"
          },
          "color": {"field": "location"}
        }
      }
    ]
  }
}

*/
