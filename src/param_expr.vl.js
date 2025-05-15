import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */
export default function chart() {
	// Both of these styles are valid
	const size = vl.expr('sel.Miles_per_Gallon * 10 || 75');
	const opacity = { expr: 'opacityVar/100' };

	return vl
		.markPoint({ size, opacity })
		.data('data/cars.json')
		.params([
			{
				name: 'opacityVar',
				value: 50,
				bind: { input: 'range', min: 1, max: 100 }
			},
			{
				name: 'sel',
				select: {
					type: 'point',
					fields: ['Miles_per_Gallon'],
					toggle: false
				}
			}
		])
		.encode(
			vl.x().fieldQ('Horsepower'),
			vl.y().fieldQ('Miles_per_Gallon')
		)
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/cars.json"},
  "params": [
    {
      "name": "opacityVar",
      "value": 50,
      "bind": {"input": "range", "min": 1, "max": 100}
    },
    {
      "name": "sel",
      "select": {"type": "point", "fields": ["Miles_per_Gallon"], "toggle": false}
    }
  ],
  "mark": {
    "type": "point",
    "size": {"expr": "sel.Miles_per_Gallon * 10 || 75"},
    "opacity": {"expr": "opacityVar/100"}
  },
  "encoding": {
    "x": {"field": "Horsepower", "type": "quantitative"},
    "y": {"field": "Miles_per_Gallon", "type": "quantitative"}
  }
}
*/
