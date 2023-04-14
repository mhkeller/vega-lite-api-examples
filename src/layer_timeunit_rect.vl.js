import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate the vega-lite JSON spec below.
 * The function should return the vega-lite-api object.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Drawing rect bin from the beginning of May to end of July",
  "layer": [{
    "data": {"url": "data/seattle-weather.csv"},
    "mark": "bar",
    "encoding": {
      "x": {
        "timeUnit": "month",
        "field": "date",
        "title": "month",
        "axis": {
          "labelAlign": "left",
          "labelExpr": "datum.label[0]"
        }
      },
      "y": {
        "aggregate": "mean",
        "field": "precipitation"
      }
    }
  }, {
    "data": {
      "values": [{"date": "May 1, 2010", "date_end": "July 15, 2010"}]
    },
    "mark": {"type": "rect", "opacity": 0.5, "color": "grey"},
    "encoding": {
      "x": {"timeUnit": "month", "field": "date"},
      "x2": {"timeUnit": "month", "field": "date_end"}
    }
  }]
}
*/
