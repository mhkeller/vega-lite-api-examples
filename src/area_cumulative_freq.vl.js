import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart () {
	return vl
		.markArea()
		.data('data/movies.json')
		.transform(
			vl.window({
				op: 'count',
				field: 'count',
				as: 'Cumulative Count'
			})
				.sort([{ field: 'IMDB Rating' }])
				.frame([null, 0])
		)
		.encode(
			vl.x().fieldQ('IMDB Rating'),
			vl.y().fieldQ('Cumulative Count')
		)
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/movies.json"},
  "transform": [{
    "sort": [{"field": "IMDB Rating"}],
    "window": [{"op": "count", "field": "count", "as": "Cumulative Count"}],
    "frame": [null, 0]
  }],
  "mark": "area",
  "encoding": {
    "x": {
      "field": "IMDB Rating",
      "type": "quantitative"
    },
    "y": {
      "field": "Cumulative Count",
      "type": "quantitative"
    }
  }
}
*/
