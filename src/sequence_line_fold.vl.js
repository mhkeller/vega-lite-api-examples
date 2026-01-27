import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Plots two functions using a generated sequence.",
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
    },
    {
      "calculate": "cos(datum.x)",
      "as": "cos(x)"
    },
    {
      "fold": ["sin(x)", "cos(x)"]
    }
  ],
  "mark": "line",
  "encoding": {
    "x": {
      "type": "quantitative",
      "field": "x"
    },
    "y": {
      "field": "value",
      "type": "quantitative"
    },
    "color": {
      "field": "key",
      "type": "nominal",
      "title": null
    }
  }
}
*/

export default function chart() {
	return {
		$schema: 'https://vega.github.io/schema/vega-lite/v5.json',
		description: 'Plots two functions using a generated sequence.',
		width: 300,
		height: 150,
		data: {
			sequence: { start: 0, stop: 12.7, step: 0.1, as: 'x' }
		},
		transform: [
			{ calculate: 'sin(datum.x)', as: 'sin(x)' },
			{ calculate: 'cos(datum.x)', as: 'cos(x)' },
			{ fold: ['sin(x)', 'cos(x)'] }
		],
		mark: { type: 'line' },
		encoding: {
			x: { type: 'quantitative', field: 'x' },
			y: { field: 'value', type: 'quantitative' },
			color: { field: 'key', type: 'nominal', title: null }
		}
	};
}
