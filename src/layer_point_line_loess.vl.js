import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
	return vl
		.layer(
			vl.markPoint({ filled: true }).encode(
				vl.x().fieldQ('Rotten Tomatoes Rating'),
				vl.y().fieldQ('IMDB Rating')
			),
			vl
				.markLine({ color: 'firebrick' })
				.transform({
					loess: 'IMDB Rating',
					on: 'Rotten Tomatoes Rating'
				})
				.encode(
					vl.x().fieldQ('Rotten Tomatoes Rating'),
					vl.y().fieldQ('IMDB Rating')
				)
		)
		.data('data/movies.json')
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {
    "url": "data/movies.json"
  },
  "layer": [
    {
      "mark": {
        "type": "point",
        "filled": true
      },
      "encoding": {
        "x": {
          "field": "Rotten Tomatoes Rating",
          "type": "quantitative"
        },
        "y": {
          "field": "IMDB Rating",
          "type": "quantitative"
        }
      }
    },
    {
      "mark": {
        "type": "line",
        "color": "firebrick"
      },
      "transform": [
        {
          "loess": "IMDB Rating",
          "on": "Rotten Tomatoes Rating"
        }
      ],
      "encoding": {
        "x": {
          "field": "Rotten Tomatoes Rating",
          "type": "quantitative"
        },
        "y": {
          "field": "IMDB Rating",
          "type": "quantitative"
        }
      }
    }
  ]
}
*/
