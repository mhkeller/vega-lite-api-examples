import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Drag out a rectangular brush to highlight points.",
  "data": {"url": "data/cars.json"},
  "params": [
    {"name": "brush", "select": "interval"},
    {
      "name": "hoverbrush",
      "select": {
        "type": "point",
        "on": "mouseover", "nearest": true
      }
    }
  ],
  "mark": "point",
  "encoding": {
    "x": {"field": "Horsepower", "type": "quantitative"},
    "y": {"field": "Miles_per_Gallon", "type": "quantitative"},
    "color": {
      "condition": [
        {"param": "hoverbrush", "value": "teal"},
        {"param": "brush", "value": "skyblue"}
      ],
      "value": "grey"
    }
  }
}
*/

export default function chart() {
	return {
		$schema: 'https://vega.github.io/schema/vega-lite/v5.json',
		description: 'Drag out a rectangular brush to highlight points.',
		data: { url: 'data/cars.json' },
		params: [
			{ name: 'brush', select: 'interval' },
			{
				name: 'hoverbrush',
				select: { type: 'point', on: 'mouseover', nearest: true }
			}
		],
		mark: { type: 'point' },
		encoding: {
			x: { field: 'Horsepower', type: 'quantitative' },
			y: { field: 'Miles_per_Gallon', type: 'quantitative' },
			color: {
				condition: [
					{ param: 'hoverbrush', value: 'teal' },
					{ param: 'brush', value: 'skyblue' }
				],
				value: 'grey'
			}
		}
	};
}
