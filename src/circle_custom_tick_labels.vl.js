import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
	return vl
		.markCircle({ size: 80 })
		.data('data/movies.json')
		.encode(
			vl
				.x()
				.aggregate('mean')
				.field('IMDB Rating')
				.title(null)
				.scale({ domain: [0, 10] })
				.axis({
					labelExpr: `datum.label == 0 ? 'Poor' : datum.label == 5 ? 'Neutral' : 'Great'`,
					labelFlush: false,
					values: [0, 5, 10]
				}),
			vl.y().field('Major Genre').sort('x').title(null)
		)
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {
    "url": "data/movies.json"
  },
  "mark": {"size": 80, "type": "circle"},
  "encoding": {
    "x": {
      "aggregate": "mean",
      "axis": {
        "labelExpr": "datum.label == 0 ? 'Poor' : datum.label == 5 ? 'Neutral' : 'Great'",
        "labelFlush": false,
        "values": [0, 5, 10]
      },
      "field": "IMDB Rating",
      "scale": {"domain": [0, 10]},
      "title": null
    },
    "y": {"field": "Major Genre", "sort": "x", "title": null}
  }
}
*/
