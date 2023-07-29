import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/barley.json"},
  "description": "Slope graph showing the change in yield for different barley sites. It shows the error in the year labels for the Morris site.",
  "mark": "line",
  "width": {"step": 50},
  "encoding": {
    "x": {
      "field": "year",
      "type": "ordinal",
      "scale": {"padding": 0.5}
    },
    "y": {
      "aggregate": "median",
      "field": "yield",
      "type": "quantitative"
    },
    "color": {"field": "site", "type": "nominal"}
  }
}
*/
