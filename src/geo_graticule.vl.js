import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
	const spec = vl
		.markGeoshape()
		.width(200)
		.height(200)
		.data({ graticule: true })
		.toSpec();
	spec.projection = { type: 'orthographic' };
	return spec;
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "width": 200,
  "height": 200,
  "data": {
    "graticule": true
  },
  "projection": {
    "type": "orthographic"
  },
  "mark": {
    "type": "geoshape"
  }
}
*/
