import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/cars.json"},
  "params": [{"name": "pts", "select": "interval"}],
  "mark": "rect",
  "encoding": {
    "y": {"field": "Origin", "type": "ordinal"},
    "x": {"field": "Cylinders", "type": "ordinal"},
    "color": {
      "condition": {
        "param": "pts",
        "aggregate": "count"
      },
      "value": "grey"
    }
  }
}
*/

export default function chart() {
	return {
		$schema: 'https://vega.github.io/schema/vega-lite/v5.json',
		data: { url: 'data/cars.json' },
		params: [{ name: 'pts', select: 'interval' }],
		mark: { type: 'rect' },
		encoding: {
			y: { field: 'Origin', type: 'ordinal' },
			x: { field: 'Cylinders', type: 'ordinal' },
			color: {
				condition: { param: 'pts', aggregate: 'count' },
				value: 'grey'
			}
		}
	};
}
