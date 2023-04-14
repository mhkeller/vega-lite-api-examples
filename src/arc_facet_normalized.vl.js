import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 * The function should return the vega-lite-api object.
 */
export default function chart () {
	return vl.markArc()
		.facet({ column: { field: 'year' } })
	// QUESTION why does this have to come after facet?
		.data('data/barley.json')
		.spec(
			vl
				.markArc()
				.encode(
					vl.theta().fieldQ('yield').aggregate('sum'),
					vl.color().fieldN('site')
				)
		)
		.toSpec();
}
/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/barley.json"},
  "facet": {"column": {"field": "year"}},
  "spec": {
    "mark": { "type": "arc" },
    "encoding": {
      "theta": {"field": "yield", "type": "quantitative", "aggregate": "sum"},
      "color": {"field": "site", "type": "nominal"}
    }
  }
}
*/
