import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
	return vl
		.markRect()
		.data('data/movies.json')
		.width(300)
		.height(200)
		.transform({
			filter: {
				and: [
					{ field: 'IMDB Rating', valid: true },
					{ field: 'Rotten Tomatoes Rating', valid: true }
				]
			}
		})
		.encode(
			vl.x().fieldQ('IMDB Rating').bin({ maxbins: 60 }),
			vl.y().fieldQ('Rotten Tomatoes Rating').bin({ maxbins: 40 }),
			vl.color().aggregate('count').type('quantitative')
		)
		.config({ view: { stroke: 'transparent' } })
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/movies.json"},
  "transform": [{
    "filter": {"and": [
      {"field": "IMDB Rating", "valid": true},
      {"field": "Rotten Tomatoes Rating", "valid": true}
    ]}
  }],
  "mark": "rect",
  "width": 300,
  "height": 200,
  "encoding": {
    "x": {
      "bin": {"maxbins":60},
      "field": "IMDB Rating",
      "type": "quantitative"
    },
    "y": {
      "bin": {"maxbins": 40},
      "field": "Rotten Tomatoes Rating",
      "type": "quantitative"
    },
    "color": {
      "aggregate": "count",
      "type": "quantitative"
    }
  },
  "config": {
    "view": {
      "stroke": "transparent"
    }
  }
}
*/
