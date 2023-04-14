import * as vl from 'vega-lite-api';

// Write a Node.JS function that uses the vega-lite-api library to generate the vega-lite JSON spec below. The function should return the vega-lite-api object. Call the function `chart` and export as the es6 module default export.

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Line chart with conditional axis ticks, labels, and grid.",
  "data": {"url": "data/stocks.csv"},
  "transform": [
  	{"filter": "datum.symbol==='GOOG'"},
  	{"filter": {"field": "date", "timeUnit": "year", "range": [2006, 2007]}}
  ],
  "width": 400,
  "mark": "line",
  "encoding": {
    "x": {
      "field": "date", "type": "temporal",
      "axis": {
        "tickCount": 8,
        "labelAlign": "left",
        "labelExpr": "[timeFormat(datum.value, '%b'), timeFormat(datum.value, '%m') == '01' ? timeFormat(datum.value, '%Y') : '']",
        "labelOffset": 4,
        "labelPadding": -24,
        "tickSize": 30,
        "gridDash": {
          "condition": {"test": {"field": "value", "timeUnit": "month", "equal": 1}, "value": []},
          "value": [2,2]
        },
        "tickDash": {
          "condition": {"test": {"field": "value", "timeUnit": "month", "equal": 1}, "value": []},
          "value": [2,2]
        }
      }
    },
    "y": {"field": "price", "type": "quantitative"}
  },
  "config": {
    "axis": {
      "domainColor": "#ddd",
      "tickColor": "#ddd"
    }
  }
}

*/
