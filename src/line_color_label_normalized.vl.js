import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
	return vl
		.layer(
			// Main line chart
			vl
				.markLine()
				.encode(
					vl.color().fieldN('symbol').legend(null),
					vl.x().fieldT('date').title('date'),
					vl.y().fieldQ('price').title('price')
				),
			// Circles at the end of each line
			vl.layer(
				vl
					.markCircle()
					.encode(
						vl.color().fieldN('symbol').legend(null),
						vl.x().aggregate('max').fieldT('date'),
						vl
							.y()
							.aggregate({ argmax: 'date' })
							.fieldQ('price')
					),
				// Text labels at the end of each line
				vl
					.markText({ align: 'left', dx: 4 })
					.encode(
						vl.color().fieldN('symbol').legend(null),
						vl.x().aggregate('max').fieldT('date'),
						vl
							.y()
							.aggregate({ argmax: 'date' })
							.fieldQ('price'),
						vl.text().fieldN('symbol')
					)
			)
		)
		.data('data/stocks.csv')
		.transform({ filter: "datum.symbol!=='IBM'" })
		.description('Multi-series line chart with labels.')
		.config({ view: { stroke: null } })
		.toSpec();
}
