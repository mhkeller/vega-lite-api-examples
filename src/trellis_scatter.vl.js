import * as vl from 'vega-lite-api';



/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/movies.json"},
  "mark": "point",

  "encoding": {
    "facet": {"field": "MPAA Rating", "type": "ordinal", "columns": 2},
    "x": {"field": "Worldwide Gross", "type": "quantitative"},
    "y": {"field": "US DVD Sales", "type": "quantitative"}
  }
}
*/

export default function chart() {
	return vl
		.markPoint()
		.data('data/movies.json')
		.encode(
			vl.facet().fieldO('MPAA Rating').columns(2),
			vl.x().fieldQ('Worldwide Gross'),
			vl.y().fieldQ('US DVD Sales')
		)
		.toSpec();
}
