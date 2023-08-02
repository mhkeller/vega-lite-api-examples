import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */
export default function chart () {
	return vl
		.markPoint()
		.description('A scatterplot showing body mass and flipper lengths of penguins.')
		.data('data/penguins.json')
		.encode(
			vl.x().fieldQ('Flipper Length (mm)').scale({ zero: false }),
			vl.y().fieldQ('Body Mass (g)').scale({ zero: false }),
			vl.color().fieldN('Species'),
			vl.shape().fieldN('Species')
		)
		.toSpec();
}
/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A scatterplot showing body mass and flipper lengths of penguins.",
  "data": {
    "url": "data/penguins.json"
  },
  "mark": "point",
  "encoding": {
    "x": {
      "field": "Flipper Length (mm)",
      "type": "quantitative",
      "scale": {"zero": false}
    },
    "y": {
      "field": "Body Mass (g)",
      "type": "quantitative",
      "scale": {"zero": false}
    },
    "color": {"field": "Species", "type": "nominal"},
    "shape": {"field": "Species", "type": "nominal"}
  }
}
*/
