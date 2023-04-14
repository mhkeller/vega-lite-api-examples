import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate the vega-lite JSON spec below.
 * The function should return the vega-lite-api object.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Testing labelAngle signals",
  "data": { "url": "data/github.csv"},
  "mark": "circle",
  "encoding": {
    "y": {
      "field": "time",
      "type": "ordinal",
      "timeUnit": "day",
      "sort": ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
      "axis": {
        "orient": "right",
        "labelAngle": {"expr": "yLabelAngle"}
      }
    },
    "x": {
      "field": "time",
      "type": "ordinal",
      "timeUnit": "hours",
      "axis": {
        "orient": "top",
        "labelAngle": {"expr": "xLabelAngle"}
      }
    },
    "size": {
      "field": "count",
      "type": "quantitative",
      "aggregate": "sum"
    }
  },
  "params": [{
    "name": "xLabelAngle", "value": 0,
    "bind": {"input": "range", "min": -360, "max": 360}
  },{
    "name": "yLabelAngle", "value": 0,
    "bind": {"input": "range", "min": -360, "max": 360}
  }]
}
*/
