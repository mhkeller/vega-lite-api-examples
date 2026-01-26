import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
	return {
		$schema: 'https://vega.github.io/schema/vega-lite/v5.json',
		description: "Google's stock price over time.",
		data: { url: 'data/stocks.csv' },
		transform: [{ filter: "datum.symbol==='GOOG'" }],
		mark: { type: 'line' },
		encoding: {
			x: { field: 'date', type: 'temporal' },
			y: { field: 'price', type: 'quantitative' },
			shape: { value: 'square' }
		}
	};
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Google's stock price over time.",
  "data": {"url": "data/stocks.csv"},
  "transform": [{"filter": "datum.symbol==='GOOG'"}],
  "mark": "line",
  "encoding": {
    "x": {"field": "date", "type": "temporal"},
    "y": {"field": "price", "type": "quantitative"},
    "shape": {"value": "square"}
  }
}
*/
