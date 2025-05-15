import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */
export default function chart() {
	return vl
		.markPoint()
		.data('data/movies.json')
		.encode(
			vl.x().fieldQ('IMDB Rating'),
			vl.y().fieldQ('Rotten Tomatoes Rating'),
			vl.color().condition({
				test: "datum['IMDB Rating'] === null || datum['Rotten Tomatoes Rating'] === null",
				value: '#aaa'
			})
		)
		.config({
			mark: { invalid: null }
		})
		.toSpec();
}
/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {
    "url": "data/movies.json"
  },
  "mark": "point",
  "encoding": {
    "x": {
      "field": "IMDB Rating",
      "type": "quantitative"
    },
    "y": {
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
  "config": {
    "mark": {"invalid": null}
  }
}
*/
