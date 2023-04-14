import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate the vega-lite JSON spec below.
 * The function should return the vega-lite-api object.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A horizontal box plot showing median, min, and max body mass of penguins.",
  "data": {"url": "data/penguins.json"},
  "mark": {
    "type": "boxplot",
    "extent": "min-max"
  },
  "encoding": {
    "y": {"field": "Species", "type": "nominal"},
    "x": {
      "field": "Body Mass (g)",
      "type": "quantitative",
      "scale": {"zero": false}
    }
  }
}
*/
