import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
	return vl
		.markBoxplot()
		.data('data/penguins.json')
		.description(
			'A horizontal box plot showing median and lower and upper quartiles of the distribution of body mass of penguins.'
		)
		.encode(
			vl.x().fieldQ('Body Mass (g)').scale({ zero: false })
		)
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A horizontal box plot showing median and lower and upper quartiles of the distribution of body mass of penguins.",
  "data": {"url": "data/penguins.json"},
  "mark": "boxplot",
  "encoding": {
    "x": {
      "field": "Body Mass (g)",
      "type": "quantitative",
      "scale": {"zero": false}
    }
  }
}
*/
