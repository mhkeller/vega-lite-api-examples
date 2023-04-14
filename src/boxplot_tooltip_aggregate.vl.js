import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 * The function should return the vega-lite-api object.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A horizontal box plot showing median and lower and upper quartiles of the distribution of body mass of penguins. The tooltip shows the mean mass.",
  "data": {"url": "data/penguins.json"},
  "mark": "boxplot",
  "encoding": {
    "y": {"field": "Species", "type": "nominal"},
    "x": {
      "field": "Body Mass (g)",
      "type": "quantitative",
      "scale": {"zero": false}
    },
    "tooltip": {
      "field": "Body Mass (g)",
      "aggregate": "mean"
    }
  }
}
*/
