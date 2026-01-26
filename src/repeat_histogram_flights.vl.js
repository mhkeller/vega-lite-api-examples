import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
	return {
		$schema: 'https://vega.github.io/schema/vega-lite/v5.json',
		data: { url: 'data/flights-2k.json', format: { parse: { date: 'date' } } },
		transform: [{ calculate: 'hours(datum.date)', as: 'time' }],
		repeat: { column: ['distance', 'delay', 'time'] },
		spec: {
			mark: { type: 'bar' },
			encoding: {
				x: { field: { repeat: 'column' }, bin: { maxbins: 20 } },
				y: { aggregate: 'count' }
			}
		}
	};
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {
    "url": "data/flights-2k.json",
    "format": {"parse": {"date": "date"}}
  },
  "transform": [{"calculate": "hours(datum.date)", "as": "time"}],
  "repeat": {"column": ["distance", "delay", "time"]},
  "spec": {
    "mark": "bar",
    "encoding": {
      "x": {
        "field": {"repeat": "column"},
        "bin": {"maxbins": 20}
      },
      "y": {"aggregate": "count"}
    }
  }
}
*/
