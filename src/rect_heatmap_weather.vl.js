import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 * The function should return the vega-lite-api object.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {
      "url": "data/seattle-weather.csv"
  },
  "title": "Daily Max Temperatures (C) in Seattle, WA",
  "config": {
      "view": {
          "strokeWidth": 0,
          "step": 13
      },
      "axis": {
          "domain": false
      }
  },
  "mark": "rect",
  "encoding": {
      "x": {
          "field": "date",
          "timeUnit": "date",
          "type": "ordinal",
          "title": "Day",
          "axis": {
              "labelAngle": 0,
              "format": "%e"
          }
      },
      "y": {
          "field": "date",
          "timeUnit": "month",
          "type": "ordinal",
          "title": "Month"
      },
      "color": {
          "field": "temp_max",
          "aggregate": "max",
          "type": "quantitative",
          "legend": {
              "title": null
          }
      }
  }
}
*/
