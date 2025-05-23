import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
	const layer1 = vl
		.markArc({ stroke: 'white', tooltip: true })
		.encode(
			vl.theta().bin(true).field('IMDB Rating'),
			vl.radius().aggregate('count').scale({ type: 'sqrt' })
		);

	const layer2 = vl
		.markText({ radiusOffset: 15, align: 'right' })
		.encode(
			vl.theta().bin(true).field('IMDB Rating'),
			vl
				.radius()
				.aggregate('count')
				.scale({ type: 'sqrt' }),
			vl.text().bin(true).field('IMDB Rating'),
			vl
				.angle()
				.bin(true)
				.field('IMDB Rating')
				.scale({ range: [90, 450] })
		);

	return vl
		.layer([layer1, layer2])
		.data('data/movies.json')
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/movies.json"},
  "layer": [
    {
      "mark": {"type": "arc", "stroke": "white", "tooltip": true},
      "encoding": {
        "theta": {"bin": true, "field": "IMDB Rating"},
        "radius": {"aggregate": "count", "scale": {"type": "sqrt"}}
      }
    },
    {
      "mark": {"type": "text", "radiusOffset": 15, "align": "right"},
      "encoding": {
        "theta": {"bin": true, "field": "IMDB Rating"},
        "radius": {"aggregate": "count", "scale": {"type": "sqrt"}},
        "text": {"bin": true, "field": "IMDB Rating"},
        "angle": {
          "bin": true,
          "field": "IMDB Rating",
          "scale": {"range": [90, 450]}
        }
      }
    }
  ]
}
*/
