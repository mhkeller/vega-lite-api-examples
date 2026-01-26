import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
	return vl
		.markArea({ interpolate: 'monotone' })
		.data('data/cars.json')
		.encode(
			vl.x().timeUnit('year').field('Year'),
			vl.y().aggregate('sum').field('Weight_in_lbs'),
			vl.color().fieldO('Cylinders')
		)
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/cars.json"},
  "mark": {
    "type": "area",
    "interpolate": "monotone"
  },
  "encoding": {
    "x": {"timeUnit": "year", "field": "Year"},
    "y": {"aggregate": "sum", "field": "Weight_in_lbs"},
    "color": {"field": "Cylinders", "type": "ordinal"}
  }
}
*/
