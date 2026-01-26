import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "width": 300,
  "height": 200,
  "params": [
    {
      "name": "interpolate", "value": "linear",
      "bind": {
        "input": "select",
        "options": [
          "basis",
          "cardinal",
          "catmull-rom",
          "linear",
          "monotone",
          "natural",
          "step",
          "step-after",
          "step-before"
        ]
      }
    },
    {
      "name": "tension", "value": 0,
      "bind": {"input": "range", "min": 0, "max": 1, "step": 0.05}
    },
    { "name": "strokeWidth", "value": 2,
      "bind": {"input": "range", "min": 0, "max": 10, "step": 0.5} },
    { "name": "strokeCap", "value": "butt",
      "bind": {"input": "select", "options": ["butt", "round", "square"]} },
    { "name": "strokeDash", "value": [1,0],
      "bind": {
        "input": "select",
        "options": [[1,0], [8,8], [8,4], [4,4], [4,2], [2,1], [1,1]]
      }
    }
  ],
  "data": {
    "values": [
        {"u": 1, "v": 28}, {"u": 2, "v": 55},
        {"u": 3, "v": 42}, {"u": 4, "v": 34},
        {"u": 5, "v": 36}, {"u": 6, "v": 48}
      ]
  },
  "mark": {
    "type": "line",
    "interpolate": {"expr": "interpolate"},
    "tension": {"expr": "tension"},
    "strokeWidth": {"expr": "strokeWidth"},
    "strokeDash": {"expr": "strokeDash"},
    "strokeCap": {"expr": "strokeCap"}
  },
  "encoding": {
    "x": {
      "field": "u",
      "type": "quantitative"
    },
    "y": {
      "field": "v",
      "type": "quantitative"
    }
  }
}
*/

export default function chart() {
	return vl
		.markLine({
			interpolate: vl.expr('interpolate'),
			tension: vl.expr('tension'),
			strokeWidth: vl.expr('strokeWidth'),
			strokeDash: vl.expr('strokeDash'),
			strokeCap: vl.expr('strokeCap')
		})
		.width(300)
		.height(200)
		.params([
			{
				name: 'interpolate',
				value: 'linear',
				bind: {
					input: 'select',
					options: [
						'basis',
						'cardinal',
						'catmull-rom',
						'linear',
						'monotone',
						'natural',
						'step',
						'step-after',
						'step-before'
					]
				}
			},
			{
				name: 'tension',
				value: 0,
				bind: { input: 'range', min: 0, max: 1, step: 0.05 }
			},
			{
				name: 'strokeWidth',
				value: 2,
				bind: { input: 'range', min: 0, max: 10, step: 0.5 }
			},
			{
				name: 'strokeCap',
				value: 'butt',
				bind: {
					input: 'select',
					options: ['butt', 'round', 'square']
				}
			},
			{
				name: 'strokeDash',
				value: [1, 0],
				bind: {
					input: 'select',
					options: [
						[1, 0],
						[8, 8],
						[8, 4],
						[4, 4],
						[4, 2],
						[2, 1],
						[1, 1]
					]
				}
			}
		])
		.data({
			values: [
				{ u: 1, v: 28 },
				{ u: 2, v: 55 },
				{ u: 3, v: 42 },
				{ u: 4, v: 34 },
				{ u: 5, v: 36 },
				{ u: 6, v: 48 }
			]
		})
		.encode(vl.x().fieldQ('u'), vl.y().fieldQ('v'))
		.toSpec();
}
