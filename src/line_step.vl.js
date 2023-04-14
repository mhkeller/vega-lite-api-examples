import * as vl from 'vega-lite-api';

// Write a Node.JS function that uses the vega-lite-api library to generate the vega-lite JSON spec below. The function should return the vega-lite-api object. Call the function `chart` and export as the es6 module default export.
export default function chart () {
	return vl
		.markLine({
			interpolate: 'step-after'
		})
		.description('Google\'s stock price over time.')
		.data('data/stocks.csv')
		.transform({
			filter: 'datum.symbol===\'GOOG\''
		})
		.encode(
			vl.x().fieldT('date'),
			vl.y().fieldQ('price')
		)
		.toSpec();
}
/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Google's stock price over time.",
  "data": {"url": "data/stocks.csv"},
  "transform": [{"filter": "datum.symbol==='GOOG'"}],
  "mark": {
    "type": "line",
    "interpolate": "step-after"
  },
  "encoding": {
    "x": {"field": "date", "type": "temporal"},
    "y": {"field": "price", "type": "quantitative"}
  }
}

*/
