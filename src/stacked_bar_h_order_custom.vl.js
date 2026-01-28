import * as vl from 'vega-lite-api';



/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/barley.json"},
  "transform": [{
    "calculate": "if(datum.site === 'University Farm', 0, if(datum.site === 'Grand Rapids', 1, 2))",
    "as": "siteOrder"
  }],
  "mark": "bar",
  "encoding": {
    "x": {"aggregate": "sum", "field": "yield"},
    "y": {"field": "variety"},
    "color": {"field": "site"},
    "order": {"field": "siteOrder"}
  }
}
*/

export default function chart() {
	return vl
		.markBar()
		.data('data/barley.json')
		.transform(
			vl.calculate("if(datum.site === 'University Farm', 0, if(datum.site === 'Grand Rapids', 1, 2))").as('siteOrder')
		)
		.encode(
			vl.x().aggregate('sum').field('yield'),
			vl.y().field('variety'),
			vl.color().field('site'),
			vl.order().field('siteOrder')
		)
		.toSpec();
}
