import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
	return vl
		.markErrorbar({ extent: 'ci', ticks: true })
		.data('data/cars.json')
		.encode(
			vl
				.y()
				.fieldQ('Miles_per_Gallon')
				.scale({ zero: false })
				.title('Miles per Gallon (95% CIs)'),
			vl.x().timeUnit('year').field('Year')
		)
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/cars.json"},
  "mark": {
    "type": "errorbar",
    "extent": "ci",
    "ticks": true
  },
  "encoding": {
    "y": {
      "field": "Miles_per_Gallon",
      "type": "quantitative",
      "scale": {"zero": false},
      "title": "Miles per Gallon (95% CIs)"
    },
    "x": {"timeUnit": "year", "field": "Year"}
  }
}
*/
