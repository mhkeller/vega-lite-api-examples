import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate the vega-lite JSON spec below.
 * The function should return the vega-lite-api object.
 */
export default function chart () {
	return vl
		.markBar()
		.data('data/movies.json')
		.encode(
			vl.x().field('IMDB Rating').bin(true),
			vl.y().aggregate('count')
		)
		.toSpec();
}
/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/movies.json"},
  "mark": "bar",
  "encoding": {
    "x": {
      "bin": true,
      "field": "IMDB Rating"
    },
    "y": {"aggregate": "count"}
  }
}
*/
