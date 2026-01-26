import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
	return {
		$schema: 'https://vega.github.io/schema/vega-lite/v5.json',
		description:
			'A line chart with text cursor to indicate the brush selection. The cursor changes to pointer on the mark as it can be moved with drag&drop.',
		data: { url: 'data/stocks.csv' },
		transform: [{ filter: "datum.symbol==='GOOG'" }],
		mark: { type: 'line' },
		width: 400,
		encoding: {
			x: { field: 'date', type: 'temporal' },
			y: { field: 'price', type: 'quantitative' }
		},
		params: [
			{
				name: 'brush',
				select: {
					type: 'interval',
					encodings: ['x'],
					mark: { cursor: 'pointer' }
				}
			}
		],
		view: { cursor: 'text' }
	};
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A line chart with text cursor to indicate the brush selection. The cursor changes to pointer on the mark as it can be moved with drag&drop.",
  "data": {"url": "data/stocks.csv"},
  "transform": [
    {"filter": "datum.symbol==='GOOG'"}
  ],
  "mark": "line",
  "width": 400,
  "encoding": {
    "x": {
      "field": "date",
      "type": "temporal"
    },
    "y": {
      "field": "price",
      "type": "quantitative"
    }
  },
  "params": [{
    "name": "brush",
    "select": {
      "type": "interval",
      "encodings": ["x"],
      "mark": {"cursor": "pointer"}
    }
  }],
  "view": {"cursor": "text"}
}
*/
