import * as vl from 'vega-lite-api';



/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/cars.json"},
  "mark": "point",
  "encoding": {
    "row": {"field": "Cylinders"},
    "column": {"field": "Origin"},
    "x": {"field": "Horsepower", "type": "quantitative"},
    "y": {"field": "Miles_per_Gallon", "type": "quantitative"},
    "color": {"field": "Cylinders", "type": "nominal"},
    "shape": {"field": "Origin", "type": "nominal"}
  }
}
*/

export default function chart() {
	return vl
		.markPoint()
		.data('data/cars.json')
		.encode(
			vl.row().field('Cylinders'),
			vl.column().field('Origin'),
			vl.x().fieldQ('Horsepower'),
			vl.y().fieldQ('Miles_per_Gallon'),
			vl.color().fieldN('Cylinders'),
			vl.shape().fieldN('Origin')
		)
		.toSpec();
}
