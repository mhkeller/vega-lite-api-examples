import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 * The function should return the vega-lite-api object.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Distribution of Body Mass of Penguins",
  "data": {"url": "data/penguins.json"},
  "transform": [
    {"density": "Body Mass (g)", "groupby": ["Species"], "extent": [2500, 6500]}
  ],
  "facet": {"row": {"field": "Species"}},
  "spec": {
    "width": 400,
    "height": 80,
    "mark": "area",
    "encoding": {
      "x": {"field": "value", "type": "quantitative", "title": "Body Mass (g)"},
      "y": {"field": "density", "type": "quantitative", "stack": "zero"}
    }
  }
}
*/
