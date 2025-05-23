import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
	return vl
		.markCircle()
		.width(500)
		.height(300)
		.data('data/gapminder-health-income.csv')
		.description(
			`A bubble plot showing the correlation between health and income for 187 countries in the world (modified from an example in Lisa Charlotte Rost's blog post 'One Chart, Twelve Charting Libraries' --http://lisacharlotterost.github.io/2016/05/17/one-chart-code/).`
		)
		.params([
			{ name: 'view', select: 'interval', bind: 'scales' }
		])
		.encode(
			vl.x().field('income').scale({ type: 'log' }),
			vl
				.y()
				.fieldQ('health')
				.scale({ zero: false })
				.axis({ minExtent: 30 }),
			vl.size().fieldQ('population'),
			vl.color().value('#000')
		)
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A bubble plot showing the correlation between health and income for 187 countries in the world (modified from an example in Lisa Charlotte Rost's blog post 'One Chart, Twelve Charting Libraries' --http://lisacharlotterost.github.io/2016/05/17/one-chart-code/).",
  "width": 500,"height": 300,
  "data": {
    "url": "data/gapminder-health-income.csv"
  },
  "params": [{
    "name": "view",
    "select": "interval",
    "bind": "scales"
  }],
  "mark": "circle",
  "encoding": {
    "y": {
      "field": "health",
      "type": "quantitative",
      "scale": {"zero": false},
      "axis": {"minExtent": 30}
    },
    "x": {
      "field": "income",
      "scale": {"type": "log"}
    },
    "size": {"field": "population", "type": "quantitative"},
    "color": {"value": "#000"}
  }
}
*/
