import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
	return vl
		.markBar()
		.data('data/movies.json')
		.transform({
			bin: true,
			field: 'IMDB Rating',
			as: 'binned rating'
		})
		.encode(
			vl
				.x()
				.field('binned rating')
				.title('IMDB Rating (binned)')
				.bin({ binned: true, step: 1 }),
			vl.x2().field('binned rating_end'),
			vl.y().aggregate('count')
		)
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/movies.json"},
  "transform": [
    {
      "bin": true,
      "field": "IMDB Rating",
      "as": "binned rating"
    }
  ],
  "mark": "bar",
  "encoding": {
    "x": {
      "field": "binned rating",
      "title": "IMDB Rating (binned)",
      "bin": {
        "binned": true,
        "step": 1
      }
    },
    "x2": {"field": "binned rating_end"},
    "y": {"aggregate": "count"}
  }
}
*/
