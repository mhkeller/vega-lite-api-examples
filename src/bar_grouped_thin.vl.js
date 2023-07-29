import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart () {
	return vl
		.markBar()
		.width(500)
		.data('data/movies.json')
		.encode(
			vl.x().fieldN('Director'),
			vl.xOffset().fieldN('Title'),
			vl.y().aggregate('mean').fieldQ('Rotten Tomatoes Rating'),
			vl.color().condition({
				test: `datum['IMDB Rating'] === null || datum['Rotten Tomatoes Rating'] === null`,
				value: '#aaa'
			})
		)
		.config({ mark: { invalid: null } })
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/movies.json"},
  "width": 500,
  "mark": "bar",
  "encoding": {
    "x": {"field": "Director", "type": "nominal"},
    "xOffset": {"field": "Title", "type": "nominal"},
    "y": {
      "aggregate": "mean",
      "field": "Rotten Tomatoes Rating",
      "type": "quantitative"
    },
    "color": {
      "condition": {
        "test": "datum['IMDB Rating'] === null || datum['Rotten Tomatoes Rating'] === null",
        "value": "#aaa"
      }
    }
  },
  "config": {"mark": {"invalid": null}}
}
*/
