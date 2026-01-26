import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
	return vl
		.layer(
			vl.markPoint({ filled: true }).encode(
				vl
					.x()
					.aggregate('mean')
					.fieldQ('yield')
					.scale({ zero: false })
					.title('Barley Yield'),
				vl.color().value('black')
			),
			vl
				.markErrorbar({ extent: 'ci' })
				.encode(vl.x().fieldQ('yield').title('Barley Yield'))
		)
		.data('data/barley.json')
		.encode(vl.y().fieldO('variety'))
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/barley.json"},
  "encoding": {"y": {"field": "variety", "type": "ordinal"}},
  "layer": [
    {
      "mark": {"type": "point", "filled": true},
      "encoding": {
        "x": {
          "aggregate": "mean",
          "field": "yield",
          "type": "quantitative",
          "scale": {"zero": false},
          "title": "Barley Yield"
        },
        "color": {"value": "black"}
      }
    },
    {
      "mark": {"type": "errorbar", "extent": "ci"},
      "encoding": {
        "x": {"field": "yield", "type": "quantitative", "title": "Barley Yield"}
      }
    }
  ]
}
*/
