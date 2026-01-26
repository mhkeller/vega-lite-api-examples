import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
	return vl
		.layer(
			vl.markPoint({ opacity: 0.3 }).encode(
				vl.x().timeUnit('year').field('date'),
				vl.y().fieldQ('price')
			),
			vl.markLine().encode(
				vl.x().timeUnit('year').field('date'),
				vl.y().aggregate('mean').field('price')
			)
		)
		.description(
			'Plot showing average data with raw values in the background.'
		)
		.data('data/stocks.csv')
		.transform({ filter: "datum.symbol==='GOOG'" })
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Plot showing average data with raw values in the background.",
  "data": {"url": "data/stocks.csv"},
  "transform": [{"filter": "datum.symbol==='GOOG'"}],
  "layer": [{
    "mark": {"type": "point", "opacity": 0.3},
    "encoding": {
      "x": {"timeUnit":"year", "field": "date"},
      "y": {"field": "price", "type": "quantitative"}
    }
  }, {
    "mark": "line",
    "encoding": {
      "x": {"timeUnit":"year", "field": "date"},
      "y": {"aggregate": "mean", "field": "price"}
    }
  }]
}
*/
