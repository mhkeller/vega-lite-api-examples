import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */
export default function chart () {
	return vl.markBar()
		.data('data/movies.json')
		.description('The production budget of the movie that has the highest US Gross in each major genre.')
		.encode(
			vl.x().fieldQ('Production Budget').aggregate({ argmax: 'US Gross' }),
			vl.y().fieldN('Major Genre')
		)
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "The production budget of the movie that has the highest US Gross in each major genre.",
  "data": {"url": "data/movies.json"},
  "mark": "bar",
  "encoding": {
    "x": {
      "aggregate": {"argmax": "US Gross"},
      "field": "Production Budget",
      "type": "quantitative"
    },
    "y": {"field": "Major Genre", "type": "nominal"}
  }
}
*/
