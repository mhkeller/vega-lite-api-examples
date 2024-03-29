import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "width": 400,
  "description": "A candlestick chart inspired by an example in Protovis (http://mbostock.github.io/protovis/ex/candlestick.html)",
  "data": {"url": "data/ohlc.json"},
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
      "axis": {"title": "Price"}
    },
    "color": {
      "condition": {
        "test": "datum.open < datum.close",
        "value": "#06982d"
      },
      "value": "#ae1325"
    }
  },
  "layer": [
    {
      "mark": "rule",
      "encoding": {
        "y": {"field": "low"},
        "y2": {"field": "high"}
      }
    },
    {
      "mark": "bar",
      "encoding": {
        "y": {"field": "open"},
        "y2": {"field": "close"}
      }
    }
  ]
}

*/
