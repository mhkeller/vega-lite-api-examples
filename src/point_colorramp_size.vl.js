import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */
export default function chart() {
	return vl
		.markPoint()
		.data('data/cars.json')
		.encode(
			vl.x().fieldQ('Horsepower'),
			vl.y().fieldQ('Acceleration'),
			vl.color().fieldQ('Miles_per_Gallon'),
			vl.size().fieldQ('Miles_per_Gallon')
		)
		.toSpec();
}
/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/cars.json"},
  "mark": "point",
  "encoding": {
    "x": {"field": "Horsepower", "type": "quantitative"},
    "y": {"field": "Acceleration", "type": "quantitative"},
    "color": {"field": "Miles_per_Gallon", "type": "quantitative"},
    "size": {"field": "Miles_per_Gallon", "type": "quantitative"}
  }
}
*/
