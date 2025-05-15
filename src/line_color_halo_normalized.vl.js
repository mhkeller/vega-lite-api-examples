import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
	const companies = ['AAPL', 'AMZN', 'GOOG', 'IBM', 'MSFT'];
	return vl
		.data('data/stocks.csv')
		.transform({
			pivot: 'symbol',
			value: 'price',
			groupby: ['date']
		})
		.layer(
			...companies.map(symbol =>
				vl
					.layer(
						vl
							.markLine({ stroke: 'white', strokeWidth: 4 })
							.encode(
								vl.x().fieldT('date'),
								vl.y().fieldQ(symbol).title('price')
							),
						vl
							.markLine()
							.encode(
								vl.x().fieldT('date'),
								vl.y().fieldQ(symbol).title('price'),
								vl.stroke().datum(symbol).type('nominal')
							)
					)
					.name(`child__layer_${symbol}`)
			)
		)
		.description(
			'Multi-series Line Chart with Halo. Use pivot and repeat-layer as a workaround to facet groups of lines and their halo strokes. See https://github.com/vega/vega-lite/issues/6192 for more discussion.'
		)
		.toSpec();
}
