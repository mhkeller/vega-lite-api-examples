import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/barley.json"},
  "facet": {"column": {"field": "year"}},
  "spec": {
    "mark": "bar",
    "encoding": {
      "x": {"field": "yield", "type": "quantitative", "aggregate": "sum"},
      "y": {"field": "variety", "type": "nominal"},
      "color": {"field": "site", "type": "nominal"}
    }
  }
}
*/
