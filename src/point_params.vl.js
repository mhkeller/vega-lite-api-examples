import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */
export default function chart() {
	return vl
		.markPoint({
			angle: { expr: 'angle' },
			size: { expr: 'size' },
			shape: { expr: 'shape' },
			strokeWidth: { expr: 'strokeWidth' }
		})
		.description(
			'A scatterplot showing horsepower and miles per gallons for various cars.'
		)
		.data('data/cars.json')
		.params([
			{
				name: 'shape',
				value: 'circle',
				bind: {
					input: 'select',
					options: [
						'arrow',
						'circle',
						'square',
						'cross',
						'diamond',
						'triangle',
						'triangle-up',
						'triangle-down',
						'triangle-right',
						'triangle-left',
						'wedge',
						'stroke',
						'M-1,-1H1V1H-1Z',
						'M0,.5L.6,.8L.5,.1L1,-.3L.3,-.4L0,-1L-.3,-.4L-1,-.3L-.5,.1L-.6,.8L0,.5Z'
					]
				}
			},
			{
				name: 'angle',
				value: 0,
				bind: {
					input: 'range',
					min: -360,
					max: 360,
					step: 1
				}
			},
			{
				name: 'size',
				value: 30,
				bind: {
					input: 'range',
					min: 0,
					max: 10000,
					step: 100
				}
			},
			{
				name: 'strokeWidth',
				value: 2,
				bind: { input: 'range', min: 0, max: 10, step: 0.5 }
			}
		])
		.encode(
			vl.x().fieldQ('Horsepower'),
			vl.y().fieldQ('Miles_per_Gallon')
		)
		.toSpec();
}
/*
{
	"$schema": "https://vega.github.io/schema/vega-lite/v5.json",
	"description": "A scatterplot showing horsepower and miles per gallons for various cars.",
	"params": [
		{
			"name": "shape",
			"value": "circle",
			"bind": {
				"input": "select",
				"options": [
					"arrow",
					"circle",
					"square",
					"cross",
					"diamond",
					"triangle",
					"triangle-up",
					"triangle-down",
					"triangle-right",
					"triangle-left",
					"wedge", "stroke",
					"M-1,-1H1V1H-1Z",
					"M0,.5L.6,.8L.5,.1L1,-.3L.3,-.4L0,-1L-.3,-.4L-1,-.3L-.5,.1L-.6,.8L0,.5Z"
				]
			}
		},
		{
			"name": "angle",
			"value": 0,
			"bind": {"input": "range", "min": -360, "max": 360, "step": 1} },
		{
			"name": "size",
			"value": 30,
			"bind": {"input": "range", "min": 0, "max": 10000, "step": 100} },
		{
			"name": "strokeWidth",
			"value": 2,
			"bind": {"input": "range", "min": 0, "max": 10, "step": 0.5} }
	],
	"data": {"url": "data/cars.json"},
	"mark": {
		"type": "point",
		"angle": {"expr": "angle"},
		"size": {"expr": "size"},
		"shape": {"expr": "shape"},
		"strokeWidth": {"expr": "strokeWidth"}
	},
	"encoding": {
		"x": {"field": "Horsepower", "type": "quantitative"},
		"y": {"field": "Miles_per_Gallon", "type": "quantitative"}
	}
}
*/
