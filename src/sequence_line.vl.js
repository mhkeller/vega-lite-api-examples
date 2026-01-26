import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
	return vl
		.markLine()
		.description('Plots a function using a generated sequence.')
		.width(300)
		.height(150)
		.data({
			sequence: { start: 0, stop: 12.7, step: 0.1, as: 'x' }
		})
		.transform({ calculate: 'sin(datum.x)', as: 'sin(x)' })
		.encode(vl.x().fieldQ('x'), vl.y().fieldQ('sin(x)'))
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Plots a function using a generated sequence.",
  "width": 300,
  "height": 150,
  "data": {
    "sequence": {
      "start": 0,
      "stop": 12.7,
      "step": 0.1,
      "as": "x"
    }
  },
  "transform": [
    {
      "calculate": "sin(datum.x)",
      "as": "sin(x)"
    }
  ],
  "mark": "line",
  "encoding": {
    "x": {
      "field": "x",
      "type": "quantitative"
    },
    "y": {
      "field": "sin(x)",
      "type": "quantitative"
    }
  }
}
*/
