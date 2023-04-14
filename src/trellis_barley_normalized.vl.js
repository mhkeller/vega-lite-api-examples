import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate the vega-lite JSON spec below.
 * The function should return the vega-lite-api object.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "name": "trellis_barley",
  "description": "The Trellis display by Becker et al. helped establish small multiples as a “powerful mechanism for understanding interactions in studies of how a response depends on explanatory variables”. Here we reproduce a trellis of Barley yields from the 1930s, complete with main-effects ordering to facilitate comparison.",
  "data": {"url": "data/barley.json"},
  "columns": 2,
  "facet": {
    "field": "site",
    "type": "ordinal",
    "sort": {"op": "median", "field": "yield"}
  },
  "spec": {
    "height": {"step": 12},
    "mark": "point",
    "encoding": {
      "x": {
        "aggregate": "median",
        "field": "yield",
        "type": "quantitative",
        "scale": {"zero": false}
      },
      "y": {"field": "variety", "type": "ordinal", "sort": "-x"},
      "color": {"field": "year", "type": "nominal"}
    }
  }
}
*/
