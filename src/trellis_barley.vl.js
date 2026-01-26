import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
	return vl
		.markPoint()
		.name('trellis_barley')
		.description(
			'The Trellis display by Becker et al. helped establish small multiples as a \u201Cpowerful mechanism for understanding interactions in studies of how a response depends on explanatory variables\u201D. Here we reproduce a trellis of Barley yields from the 1930s, complete with main-effects ordering to facilitate comparison.'
		)
		.data('data/barley.json')
		.height({ step: 12 })
		.encode(
			vl
				.facet()
				.fieldO('site')
				.columns(2)
				.sort({ op: 'median', field: 'yield' }),
			vl
				.x()
				.aggregate('median')
				.fieldQ('yield')
				.scale({ zero: false }),
			vl.y().fieldO('variety').sort('-x'),
			vl.color().fieldN('year')
		)
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "name": "trellis_barley",
  "description": "The Trellis display by Becker et al. helped establish small multiples as a “powerful mechanism for understanding interactions in studies of how a response depends on explanatory variables”. Here we reproduce a trellis of Barley yields from the 1930s, complete with main-effects ordering to facilitate comparison.",
  "data": {"url": "data/barley.json"},
  "mark": "point",
  "height": {"step": 12},
  "encoding": {
    "facet": {
      "field": "site",
      "type": "ordinal",
      "columns": 2,
      "sort": {"op": "median", "field": "yield"}
    },
    "x": {
      "aggregate": "median",
      "field": "yield",
      "type": "quantitative",
      "scale": {"zero": false}
    },
    "y": {
      "field": "variety",
      "type": "ordinal",
      "sort": "-x"
    },
    "color": {"field": "year", "type": "nominal"}
  }
}
*/
