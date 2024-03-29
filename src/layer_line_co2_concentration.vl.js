import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {
    "url": "data/co2-concentration.csv",
    "format": {"parse": {"Date": "utc:'%Y-%m-%d'"}}
  },
  "width": 800,
  "height": 500,
  "transform": [
    {"calculate": "year(datum.Date)", "as": "year"},
    {"calculate": "floor(datum.year / 10)", "as": "decade"},
    {
      "calculate": "(datum.year % 10) + (month(datum.Date)/12)",
      "as": "scaled_date"
    },
    {
      "calculate": "datum.first_date === datum.scaled_date ? 'first' : datum.last_date === datum.scaled_date ? 'last' : null",
      "as": "end"
    }
  ],
  "encoding": {
    "x": {
      "type": "quantitative",
      "title": "Year into Decade",
      "axis": {"tickCount": 11}
    },
    "y": {
      "title": "CO2 concentration in ppm",
      "type": "quantitative",
      "scale": {"zero": false}
    },
    "color": {
      "field": "decade",
      "type": "ordinal",
      "scale": {"scheme": "magma"},
      "legend": null
    }
  },

  "layer": [
    {
      "mark": "line",
      "encoding": {
        "x": {"field": "scaled_date"},
        "y": {"field": "CO2"}
      }
    },
    {
      "mark": {"type": "text", "baseline": "top", "aria": false},
      "encoding": {
        "x": {"aggregate": "min", "field": "scaled_date"},
        "y": {"aggregate": {"argmin": "scaled_date"}, "field": "CO2"},
        "text": {"aggregate": {"argmin": "scaled_date"}, "field": "year"}
      }
    },
    {
      "mark": {"type": "text", "aria": false},
      "encoding": {
        "x": {"aggregate": "max", "field": "scaled_date"},
        "y": {"aggregate": {"argmax": "scaled_date"}, "field": "CO2"},
        "text": {"aggregate": {"argmax": "scaled_date"}, "field": "year"}
      }
    }
  ],
  "config": {"text": {"align": "left", "dx": 3, "dy": 1}}
}
*/
