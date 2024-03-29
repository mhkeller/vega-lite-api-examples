import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/driving.json"},
  "layer": [
    {
      "mark": "line",
      "encoding": {
        "x": {
          "field": "miles",
          "type": "quantitative",
          "scale": {"zero": false}
        },
        "y": {"field": "gas", "type": "quantitative", "scale": {"zero": false}},
        "order": {"field": "year", "type": "ordinal"}
      }
    },
    {
      "mark": {"type": "point", "opacity": 1, "filled": true},
      "encoding": {
        "x": {
          "field": "miles",
          "type": "quantitative",
          "scale": {"zero": false}
        },
        "y": {"field": "gas", "type": "quantitative", "scale": {"zero": false}},
        "order": {"field": "year", "type": "ordinal"}
      }
    }
  ]
}
*/
