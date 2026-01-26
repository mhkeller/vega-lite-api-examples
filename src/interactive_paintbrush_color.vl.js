import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
	return {
		$schema: 'https://vega.github.io/schema/vega-lite/v5.json',
		description: 'Select multiple points with the shift key.',
		data: { url: 'data/cars.json' },
		params: [
			{ name: 'paintbrush', select: { type: 'point', on: 'mouseover' } }
		],
		mark: { type: 'circle' },
		encoding: {
			x: { field: 'Horsepower', type: 'quantitative' },
			y: { field: 'Miles_per_Gallon', type: 'quantitative' },
			color: {
				condition: {
					param: 'paintbrush',
					field: 'Cylinders',
					type: 'ordinal'
				},
				value: 'grey'
			},
			size: { value: 75 }
		}
	};
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Select multiple points with the shift key.",
  "data": {"url": "data/cars.json"},
  "params": [{
    "name": "paintbrush",
    "select": {
      "type": "point",
      "on": "mouseover"
    }
  }],
  "mark": "circle",
  "encoding": {
    "x": {"field": "Horsepower", "type": "quantitative"},
    "y": {"field": "Miles_per_Gallon", "type": "quantitative"},
    "color": {
      "condition": {
        "param": "paintbrush",
        "field": "Cylinders", "type": "ordinal"
      },
      "value": "grey"
    },
    "size": {"value": 75}
  }
}
*/
