import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart () {
	return vl
		.markArea()
		.height(100)
		.width(400)
		.data('data/cars.json')
		.transform(
			vl.fold('Displacement', 'Horsepower').as('Measurement', 'value'),
			vl.density('value').bandwidth(10).groupby('Measurement').extent(10, 500).counts(true).steps(200)
		)
		.encode(
			vl.x().fieldQ('value'),
			vl.y().fieldQ('density').stack('zero'),
			vl.color().fieldN('Measurement')
		)
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "width": 400,
  "height": 100,
  "data": {"url": "data/cars.json"},
  "mark": "area",
  "transform": [
    {
      "fold": [
        "Displacement",
        "Horsepower"
      ],
      "as": ["Measurement", "value"]
    },
    {
      "density": "value",
      "bandwidth": 10,
      "groupby": ["Measurement"],
      "extent": [10, 500],
      "counts": true,
      "steps": 200
    }
  ],
  "encoding": {
    "x": {
      "field": "value",
      "type": "quantitative"
    },
    "y": {
      "field": "density",
      "type": "quantitative",
      "stack": "zero"
    },
    "color": {
      "field": "Measurement",
      "type": "nominal"
    }
  }
}
*/
