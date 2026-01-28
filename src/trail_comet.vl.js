import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/barley.json"},
  "title": "Barley Yield comparison between 1932 and 1931",
  "transform": [
    {"pivot": "year", "value": "yield", "groupby": ["variety", "site"]},
    {"fold": ["1931", "1932"], "as": ["year", "yield"]},
    {"calculate": "toNumber(datum.year)", "as": "year"},
    {"calculate": "datum['1932'] - datum['1931']", "as": "delta"}
  ],
  "mark": "trail",
  "encoding": {
    "x": {"field": "year", "title": null},
    "y": {"field": "variety", "title": "Variety"},
    "size": {
      "field": "yield",
      "type": "quantitative",
      "scale": {"range": [0, 12]},
      "legend": {"values": [20, 60]},
      "title": "Barley Yield (bushels/acre)"
    },
    "tooltip": [{"field": "year", "type": "quantitative"}, {"field": "yield"}],
    "color": {
      "field": "delta",
      "type": "quantitative",
      "scale": {"domainMid": 0},
      "title": "Yield Delta (%)"
    },
    "column": {"field": "site", "title": "Site"}
  },
  "view": {"stroke": null},
  "config": {"legend": {"orient": "bottom", "direction": "horizontal"}}
}
*/

export default function chart() {
	return vl
		.markTrail()
		.title('Barley Yield comparison between 1932 and 1931')
		.data('data/barley.json')
		.transform(
			{ pivot: 'year', value: 'yield', groupby: ['variety', 'site'] },
			{ fold: ['1931', '1932'], as: ['year', 'yield'] },
			vl.calculate('toNumber(datum.year)').as('year'),
			vl.calculate("datum['1932'] - datum['1931']").as('delta')
		)
		.encode(
			vl.x().field('year').title(null),
			vl.y().field('variety').title('Variety'),
			vl.size()
				.fieldQ('yield')
				.scale({ range: [0, 12] })
				.legend({ values: [20, 60] })
				.title('Barley Yield (bushels/acre)'),
			vl.tooltip([{ field: 'year', type: 'quantitative' }, { field: 'yield' }]),
			vl.color().fieldQ('delta').scale({ domainMid: 0 }).title('Yield Delta (%)'),
			vl.column().field('site').title('Site')
		)
		.view({ stroke: null })
		.config({ legend: { orient: 'bottom', direction: 'horizontal' } })
		.toSpec();
}
