import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "width": 75,
  "height": 75,
  "data": {"url": "data/movies.json"},
  "mark": "point",
  "encoding": {
    "column": {"field": "MPAA Rating"},
    "x": {"field": "Worldwide Gross", "type": "quantitative"},
    "y": {"field": "US DVD Sales", "type": "quantitative"}
  }
}
*/

export default function chart() {
	return {
		$schema: 'https://vega.github.io/schema/vega-lite/v5.json',
		width: 75,
		height: 75,
		data: { url: 'data/movies.json' },
		mark: { type: 'point' },
		encoding: {
			column: { field: 'MPAA Rating' },
			x: { field: 'Worldwide Gross', type: 'quantitative' },
			y: { field: 'US DVD Sales', type: 'quantitative' }
		}
	};
}
