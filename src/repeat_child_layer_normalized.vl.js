import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 * The function should return the vega-lite-api object.
 */


/*
{
  "data": {"url": "data/weather.csv"},
  "align": "all",
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Summarized and per year weather information for Seatle and New York.",
  "columns": 3,
  "concat": [
    {
      "layer": [
        {
          "mark": "line",
          "encoding": {
            "y": {"aggregate": "mean", "field": "temp_max"},
            "x": {"timeUnit": "month", "field": "date", "type": "ordinal"},
            "detail": {"timeUnit": "year", "field": "date"},
            "color": {"field": "location"},
            "opacity": {"value": 0.2}
          }
        },
        {
          "mark": "line",
          "encoding": {
            "y": {"aggregate": "mean", "field": "temp_max"},
            "x": {"timeUnit": "month", "field": "date", "type": "ordinal"},
            "color": {"field": "location"}
          }
        }
      ],
      "name": "child__column_temp_max"
    },
    {
      "layer": [
        {
          "mark": "line",
          "encoding": {
            "y": {"aggregate": "mean", "field": "precipitation"},
            "x": {"timeUnit": "month", "field": "date", "type": "ordinal"},
            "detail": {"timeUnit": "year", "field": "date"},
            "color": {"field": "location"},
            "opacity": {"value": 0.2}
          }
        },
        {
          "mark": "line",
          "encoding": {
            "y": {"aggregate": "mean", "field": "precipitation"},
            "x": {"timeUnit": "month", "field": "date", "type": "ordinal"},
            "color": {"field": "location"}
          }
        }
      ],
      "name": "child__column_precipitation"
    },
    {
      "layer": [
        {
          "mark": "line",
          "encoding": {
            "y": {"aggregate": "mean", "field": "wind"},
            "x": {"timeUnit": "month", "field": "date", "type": "ordinal"},
            "detail": {"timeUnit": "year", "field": "date"},
            "color": {"field": "location"},
            "opacity": {"value": 0.2}
          }
        },
        {
          "mark": "line",
          "encoding": {
            "y": {"aggregate": "mean", "field": "wind"},
            "x": {"timeUnit": "month", "field": "date", "type": "ordinal"},
            "color": {"field": "location"}
          }
        }
      ],
      "name": "child__column_wind"
    }
  ]
}
*/
