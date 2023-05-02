import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */
export default function chart() {
	return vl.markBar()
		.data([
			{ bin_start: 8, bin_end: 10, count: 7 },
			{ bin_start: 10, bin_end: 12, count: 29 },
			{ bin_start: 12, bin_end: 14, count: 71 },
			{ bin_start: 14, bin_end: 16, count: 127 },
			{ bin_start: 16, bin_end: 18, count: 94 },
			{ bin_start: 18, bin_end: 20, count: 54 },
			{ bin_start: 20, bin_end: 22, count: 17 },
			{ bin_start: 22, bin_end: 24, count: 5 }
		])
		.encode(
			vl.x().field('bin_start').bin({ binned: true, step: 2 }),
			vl.x2().field('bin_end'),
			vl.y().fieldQ('count')
		)
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {
    "values": [
      {"bin_start": 8, "bin_end": 10, "count": 7},
      {"bin_start": 10, "bin_end": 12, "count": 29},
      {"bin_start": 12, "bin_end": 14, "count": 71},
      {"bin_start": 14, "bin_end": 16, "count": 127},
      {"bin_start": 16, "bin_end": 18, "count": 94},
      {"bin_start": 18, "bin_end": 20, "count": 54},
      {"bin_start": 20, "bin_end": 22, "count": 17},
      {"bin_start": 22, "bin_end": 24, "count": 5}
    ]
  },
  "mark": "bar",
  "encoding": {
    "x": {
      "field": "bin_start",
      "bin": {"binned": true, "step": 2}
    },
    "x2": {"field": "bin_end"},
    "y": {
      "field": "count",
      "type": "quantitative"
    }
  }
}
*/
