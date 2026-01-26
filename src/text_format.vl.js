import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
	return vl
		.markText()
		.data('data/cars.json')
		.width(50)
		.encode(
			vl.y().fieldO('Origin'),
			vl.text().aggregate('mean').fieldQ('Horsepower').format('.2f')
		)
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/cars.json"},
  "width": 50,
  "mark": "text",
  "encoding": {
    "y": {
      "field": "Origin",
      "type": "ordinal"
    },
    "text": {
      "aggregate": "mean",
      "field": "Horsepower",
      "type": "quantitative",
      "format": ".2f"
    }
  }
}
*/
