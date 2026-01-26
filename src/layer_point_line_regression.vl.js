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
					regression: 'IMDB Rating',
					on: 'Rotten Tomatoes Rating'
				})
				.encode(
					vl.x().fieldQ('Rotten Tomatoes Rating'),
					vl.y().fieldQ('IMDB Rating')
				),
			vl
				.markText({
					color: 'firebrick',
					x: 'width',
					align: 'right',
					y: -5
				})
				.transform(
					{
						regression: 'IMDB Rating',
						on: 'Rotten Tomatoes Rating',
						params: true
					},
					{
						calculate: "'R²: '+format(datum.rSquared, '.2f')",
						as: 'R2'
					}
				)
				.encode(vl.text().fieldN('R2'))
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
          "regression": "IMDB Rating",
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
    },
    {
      "transform": [
        {
          "regression": "IMDB Rating",
          "on": "Rotten Tomatoes Rating",
          "params": true
        },
        {"calculate": "'R²: '+format(datum.rSquared, '.2f')", "as": "R2"}
      ],
      "mark": {
        "type": "text",
        "color": "firebrick",
        "x": "width",
        "align": "right",
        "y": -5
      },
      "encoding": {
        "text": {"type": "nominal", "field": "R2"}
      }
    }
  ]
}
*/
