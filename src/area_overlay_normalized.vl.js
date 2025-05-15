import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
	const layer1 = vl
		.markArea({ opacity: 0.7 })
		.encode(vl.x().fieldT('date'), vl.y().fieldQ('price'));

	const layer2 = vl
		.markLine()
		.encode(
			vl.x().fieldT('date'),
			vl.y().fieldQ('price').stack('zero')
		);

	const layer3 = vl
		.markPoint({ opacity: 1, filled: true })
		.encode(
			vl.x().fieldT('date'),
			vl.y().fieldQ('price').stack('zero')
		);

	return vl
		.layer(layer1, layer2, layer3)
		.data('data/stocks.csv')
		.description(`Google's stock price over time.`)
		.transform(vl.filter(`datum.symbol==='GOOG'`))
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Google's stock price over time.",
  "data": {"url": "data/stocks.csv"},
  "transform": [{"filter": "datum.symbol==='GOOG'"}],
  "layer": [
    {
      "mark": {"opacity": 0.7, "type": "area"},
      "encoding": {
        "x": {"field": "date", "type": "temporal"},
        "y": {"field": "price", "type": "quantitative"}
      }
    },
    {
      "mark": {"type": "line"},
      "encoding": {
        "x": {"field": "date", "type": "temporal"},
        "y": {"field": "price", "type": "quantitative", "stack": "zero"}
      }
    },
    {
      "mark": {"type": "point", "opacity": 1, "filled": true},
      "encoding": {
        "x": {"field": "date", "type": "temporal"},
        "y": {"field": "price", "type": "quantitative", "stack": "zero"}
      }
    }
  ]
}
*/
