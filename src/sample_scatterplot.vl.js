import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
	return vl
		.hconcat(
			vl.markPoint().encode(
				vl.x().fieldQ('Horsepower'),
				vl.y().fieldQ('Miles_per_Gallon')
			),
			vl
				.markPoint()
				.transform({ sample: 200 })
				.encode(
					vl.x().fieldQ('Horsepower'),
					vl.y().fieldQ('Miles_per_Gallon')
				)
		)
		.data('data/cars.json')
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/cars.json"},
  "hconcat": [
    {
      "mark": "point",
      "encoding": {
        "x": {"field": "Horsepower", "type": "quantitative"},
        "y": {"field": "Miles_per_Gallon", "type": "quantitative"}
        }
    },
    {
      "transform": [{"sample" : 200}],
      "mark": "point",
      "encoding": {
        "x": {"field": "Horsepower", "type": "quantitative"},
        "y": {"field": "Miles_per_Gallon", "type": "quantitative"}
      }
    }
  ]
}
*/
