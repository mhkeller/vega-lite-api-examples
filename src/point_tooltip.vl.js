import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate the vega-lite JSON spec below.
 * The function should return the vega-lite-api object.
 */
export default function chart () {
	return vl
		.markPoint()
		.description('A scatterplot showing horsepower and miles per gallons for various cars.')
		.data('data/cars.json')
		.encode(
			vl.x().fieldQ('Horsepower'),
			vl.y().fieldQ('Miles_per_Gallon'),
			vl.tooltip().fieldN('Origin')
		)
		.toSpec();
}
/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A scatterplot showing horsepower and miles per gallons for various cars.",
  "data": {"url": "data/cars.json"},
  "mark": "point",
  "encoding": {
    "x": {"field": "Horsepower", "type": "quantitative"},
    "y": {"field": "Miles_per_Gallon", "type": "quantitative"},
    "tooltip": {"field": "Origin", "type": "nominal"}
  }
}
*/
