import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/stocks.csv"},
  "transform": [{"filter": "datum.symbol==='GOOG'"}],
  "mark": {
    "type": "line",
    "interpolate": "monotone"
  },
  "encoding": {
    "x": {"field": "date", "type": "temporal"},
    "y": {"field": "price", "type": "quantitative"}
  }
}
*/

export default function chart() {
	return vl
		.markLine({ interpolate: 'monotone' })
		.data('data/stocks.csv')
		.transform({ filter: "datum.symbol==='GOOG'" })
		.encode(vl.x().fieldT('date'), vl.y().fieldQ('price'))
		.toSpec();
}
