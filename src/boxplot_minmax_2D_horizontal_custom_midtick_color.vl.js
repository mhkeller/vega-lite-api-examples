import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
  return vl
    .markBoxplot({extent: 'min-max'})
    .data('data/penguins.json')
    .description('A horizontal box plot showing median, min, and max body mass of penguins.')
    .config({boxplot: {median: {color: 'orange' }}})
    .encode(
      vl.x().fieldQ('Body Mass (g)').scale({zero: false}),
      vl.y().fieldN('Species')
    )
    .toSpec();
}

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
  },
  "config": {
    "boxplot": {"median": {"color": "orange"}}
  }
}
*/
