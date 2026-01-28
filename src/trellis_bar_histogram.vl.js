import * as vl from 'vega-lite-api';



/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/cars.json"},
  "mark": "bar",
  "encoding": {
    "x": {
      "bin": {"maxbins": 15},
      "field": "Horsepower",
      "type": "quantitative"
    },
    "y": {
      "aggregate": "count",
      "type": "quantitative"
    },
    "row": {"field": "Origin"}
  }
}
*/

export default function chart() {
	return vl
		.markBar()
		.data('data/cars.json')
		.encode(
			vl.x().fieldQ('Horsepower').bin({ maxbins: 15 }),
			vl.y().aggregate('count').type('quantitative'),
			vl.row().field('Origin')
		)
		.toSpec();
}
