import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Temperature normals in Seattle. Derived from [Seattle Annual Temperate](https://vega.github.io/vega/examples/annual-temperature/) example from the Vega example gallery.",
  "title": "Seattle Temperature Normals",
  "data": {"url": "data/seattle-weather-hourly-normals.csv"},
  "transform": [
    {"calculate": "(hours(datum.date) + 18) % 24", "as": "order"}
  ],
  "spacing": {"row": 1},
  "facet": {
    "row": {
      "field": "date",
      "timeUnit": "hours",
      "type": "nominal",
      "sort": {"field": "order"},
      "header": {
        "labelAngle": 0,
        "labelPadding": 2,
        "titlePadding": -4,
        "labelAlign": "left",
        "labelExpr": "hours(datum.value) == 0 ? 'Midnight' : hours(datum.value) == 12 ? 'Noon' : timeFormat(datum.value, '%I:%M %p')"
      }
    }
  },
  "spec": {
    "width": 800,
    "height": 25,
    "view": {"stroke": null},
    "mark": "area",
    "encoding": {
      "x": {
        "field": "date",
        "type": "temporal",
        "title": "Month",
        "timeUnit": "monthdate",
        "axis": {"format": "%b"}
      },
      "y": {
        "field": "temperature",
        "type": "quantitative",
        "aggregate": "mean",
        "scale": {"zero": false},
        "axis": {"title": null, "labels": false, "ticks": false}
      }
    }
  },
  "config": {"axis": {"grid": false, "domain": false}}
}
*/
