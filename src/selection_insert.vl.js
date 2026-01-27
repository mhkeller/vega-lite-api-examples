import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/cars.json"},
  "params": [{
    "name": "paintbrush",
    "select": {"type": "point", "toggle": false}
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

export default function chart() {
	return {
		$schema: 'https://vega.github.io/schema/vega-lite/v5.json',
		data: { url: 'data/cars.json' },
		params: [
			{
				name: 'paintbrush',
				select: { type: 'point', toggle: false }
			}
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
