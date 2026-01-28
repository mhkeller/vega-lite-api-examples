import * as vl from 'vega-lite-api';



/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "width": 75,
  "height": 75,
  "data": {"url": "data/movies.json"},
  "mark": "point",
  "encoding": {
    "column": {"field": "MPAA Rating"},
    "x": {"field": "Worldwide Gross", "type": "quantitative"},
    "y": {"field": "US DVD Sales", "type": "quantitative"}
  }
}
*/

export default function chart() {
	return vl
		.markPoint()
		.width(75)
		.height(75)
		.data('data/movies.json')
		.encode(
			vl.column().field('MPAA Rating'),
			vl.x().fieldQ('Worldwide Gross'),
			vl.y().fieldQ('US DVD Sales')
		)
		.toSpec();
}
