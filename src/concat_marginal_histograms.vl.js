import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
	return vl
		.vconcat(
			vl.markBar().height(60).encode(
				vl.x().field('IMDB Rating').bin(true).axis(null),
				vl.y().aggregate('count').scale({ domain: [0, 1000] }).title('')
			),
			vl.hconcat(
				vl.markRect().encode(
					vl.x().field('IMDB Rating').bin(true),
					vl.y().field('Rotten Tomatoes Rating').bin(true),
					vl.color().aggregate('count')
				),
				vl.markBar().width(60).encode(
					vl.y().field('Rotten Tomatoes Rating').bin(true).axis(null),
					vl.x().aggregate('count').scale({ domain: [0, 1000] }).title('')
				)
			).spacing(15).bounds('flush')
		)
		.data('data/movies.json')
		.spacing(15)
		.bounds('flush')
		.config({ view: { stroke: 'transparent' } })
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/movies.json"},
  "spacing": 15,
  "bounds": "flush",
  "vconcat": [{
    "mark": "bar",
    "height": 60,
    "encoding": {
      "x": {
        "bin": true,
        "field": "IMDB Rating",
        "axis": null
      },
      "y": {
        "aggregate": "count",
        "scale": {
          "domain": [0,1000]
        },
        "title": ""
      }
    }
  }, {
    "spacing": 15,
    "bounds": "flush",
    "hconcat": [{
      "mark": "rect",
      "encoding": {
        "x": {"bin": true, "field": "IMDB Rating"},
        "y": {"bin": true, "field": "Rotten Tomatoes Rating"},
        "color": {"aggregate": "count"}
      }
    }, {
      "mark": "bar",
      "width": 60,
      "encoding": {
        "y": {
          "bin": true,
          "field": "Rotten Tomatoes Rating",
          "axis": null
        },
        "x": {
          "aggregate": "count",
          "scale": {"domain": [0,1000]},
          "title": ""
        }
      }
    }]
  }],
  "config": {
    "view": {
      "stroke": "transparent"
    }
  }
}
*/
