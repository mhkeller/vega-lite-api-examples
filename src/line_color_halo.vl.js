import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Multi-series Line Chart with Halo. Use pivot and repeat-layer as a workaround to facet groups of lines and their halo strokes. See https://github.com/vega/vega-lite/issues/6192 for more discussion.",
  "data": {"url": "data/stocks.csv"},
  "transform": [{
    "pivot": "symbol",
    "value": "price",
    "groupby": ["date"]
  }],
  "repeat": {
    "layer": ["AAPL", "AMZN", "GOOG", "IBM", "MSFT"]
  },
  "spec": {
    "layer": [{
      "mark": {"type": "line", "stroke": "white", "strokeWidth": 4},
      "encoding": {
        "x": {"field": "date", "type": "temporal"},
        "y": {"field": {"repeat": "layer"}, "type": "quantitative", "title": "price"}
      }
    },{
      "mark": {"type": "line"},
      "encoding": {
        "x": {"field": "date", "type": "temporal"},
        "y": {"field": {"repeat": "layer"}, "type": "quantitative", "title": "price"},
        "stroke": {"datum": {"repeat": "layer"}, "type": "nominal"}
      }
    }]
  }
}
*/

export default function chart() {
	return vl
		.data('data/stocks.csv')
		.transform({
			pivot: 'symbol',
			value: 'price',
			groupby: ['date']
		})
		.repeat({
			layer: ['AAPL', 'AMZN', 'GOOG', 'IBM', 'MSFT']
		})
		.spec(
			vl.layer(
				vl
					.markLine({ stroke: 'white', strokeWidth: 4 })
					.encode(
						vl.x().fieldT('date'),
						vl
							.y()
							.fieldQ({ repeat: 'layer' })
							.title('price')
					),
				vl
					.markLine()
					.encode(
						vl.x().fieldT('date'),
						vl
							.y()
							.fieldQ({ repeat: 'layer' })
							.title('price'),
						vl
							.stroke()
							.datum({ repeat: 'layer' })
							.type('nominal')
					)
			)
		)
		.description(
			'Multi-series Line Chart with Halo. Use pivot and repeat-layer as a workaround to facet groups of lines and their halo strokes. See https://github.com/vega/vega-lite/issues/6192 for more discussion.'
		)
		.toSpec();
}
