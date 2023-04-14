import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate the vega-lite JSON spec below.
 * The function should return the vega-lite-api object.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "width": 400,
  "description": "A candlestick chart inspired by an example in Protovis (http://mbostock.github.io/protovis/ex/candlestick.html)",
  "data": {"url": "data/ohlc.json"},
  "layer": [
    {
      "mark": "rule",
      "encoding": {
        "x": {
          "field": "date",
          "type": "temporal",
          "title": "Date in 2009",
          "axis": {
            "format": "%m/%d",
            "labelAngle": -45,
            "title": "Date in 2009"
          }
        },
        "y": {
          "type": "quantitative",
          "scale": {"zero": false},
          "axis": {"title": "Price"},
          "field": "low"
        },
        "color": {
          "condition": {"value": "#06982d", "test": "datum.open < datum.close"},
          "value": "#ae1325"
        },
        "y2": {"field": "high"}
      }
    },
    {
      "mark": "bar",
      "encoding": {
        "x": {
          "field": "date",
          "type": "temporal",
          "title": "Date in 2009",
          "axis": {
            "format": "%m/%d",
            "labelAngle": -45,
            "title": "Date in 2009"
          }
        },
        "y": {
          "type": "quantitative",
          "scale": {"zero": false},
          "axis": {"title": "Price"},
          "field": "open"
        },
        "color": {
          "condition": {"value": "#06982d", "test": "datum.open < datum.close"},
          "value": "#ae1325"
        },
        "y2": {"field": "close"}
      }
    }
  ]
}
*/
