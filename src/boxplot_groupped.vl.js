import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
  return vl
    .markBoxplot()
    .data('data/cars.json')
    .description('A vertical box plot showing median, min, and max body mass of penguins.')
    .encode(
      vl.x().fieldN('Cylinders'),
      vl.xOffset().fieldN('Origin'),
      vl.y().fieldQ('Acceleration'),
      vl.color().fieldN('Origin')
    )
    .toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A vertical box plot showing median, min, and max body mass of penguins.",
  "data": {"url": "data/cars.json"},
  "mark": {
    "type": "boxplot"
  },
  "encoding": {
    "x": {"field": "Cylinders", "type": "nominal"},
    "color": {"field": "Origin", "type": "nominal"},
    "xOffset": {"field": "Origin", "type": "nominal"},
    "y": {
      "field": "Acceleration",
      "type": "quantitative"
    }
  }
}
*/
