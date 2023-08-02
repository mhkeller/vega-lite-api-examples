import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */
export default function chart () {
	return vl
		.markPoint()
		.description('Shows the relationship between horsepower and the number of cylinders using point marks with random offset (jittering).')
		.data('data/cars.json')
		.transform(vl.calculate('random()').as('random'))
		.height({ step: 50 })
		.encode(
			vl.x().fieldQ('Horsepower'),
			vl.y().fieldO('Cylinders'),
			vl.yOffset().fieldQ('random')
		)
		.toSpec();
}
/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Shows the relationship between horsepower and the number of cylinders using point marks with random offset (jittering).",
  "data": {"url": "data/cars.json"},
  "transform": [{"calculate": "random()", "as": "random"}],
  "height": {"step": 50},
  "mark": "point",
  "encoding": {
    "x": {"field": "Horsepower", "type": "quantitative"},
    "y": {"field": "Cylinders", "type": "ordinal"},
    "yOffset": {"field": "random", "type": "quantitative"}
  }
}
*/
