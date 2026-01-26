import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
	return vl
		.markBar({ binSpacing: 3 })
		.data('data/movies.json')
		.encode(
			vl.x().field('IMDB Rating').bin(true).scale({ reverse: true }),
			vl.y().aggregate('count')
		)
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/movies.json"},
  "mark": {"type": "bar", "binSpacing": 3},
  "encoding": {
    "x": {
      "bin": true,
      "field": "IMDB Rating",
      "scale": {"reverse": true}
    },
    "y": {"aggregate": "count"}
  }
}
*/
