import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
	return {
		$schema: 'https://vega.github.io/schema/vega-lite/v5.json',
		repeat: ['Horsepower', 'Miles_per_Gallon'],
		columns: 1,
		spec: {
			data: { url: 'data/cars.json' },
			mark: { type: 'bar' },
			encoding: {
				x: { field: { repeat: 'repeat' }, bin: true },
				y: { aggregate: 'count' }
			}
		},
		autosize: { type: 'fit-x', contains: 'padding' }
	};
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "repeat": ["Horsepower", "Miles_per_Gallon"],
  "columns": 1,
  "spec": {
    "data": {"url": "data/cars.json"},
    "mark": "bar",
    "encoding": {
      "x": {
        "field": {"repeat": "repeat"},
        "bin": true
      },
      "y": {"aggregate": "count"}
    }
  },
  "autosize": {"type": "fit-x", "contains": "padding"}
}
*/
