import * as vl from 'vega-lite-api';



/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A trellis scatterplot showing Horsepower and Miles per gallons, faceted by binned values of Acceleration.",
  "data": {"url": "data/cars.json"},
  "mark": "point",
  "encoding": {
    "row": {"field": "Acceleration", "bin": true},
    "x": {"field": "Horsepower", "type": "quantitative"},
    "y": {"field": "Miles_per_Gallon", "type": "quantitative"}
  }
}
*/

export default function chart() {
	return vl
		.markPoint()
		.description('A trellis scatterplot showing Horsepower and Miles per gallons, faceted by binned values of Acceleration.')
		.data('data/cars.json')
		.encode(
			vl.row().field('Acceleration').bin(true),
			vl.x().fieldQ('Horsepower'),
			vl.y().fieldQ('Miles_per_Gallon')
		)
		.toSpec();
}
