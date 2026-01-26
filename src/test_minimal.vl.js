import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
	const spec = vl.markPoint().data({ values: [{}] }).toSpec();
	spec.encoding = {};
	return spec;
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {
    "values": [{}]
  },
  "mark": "point",
  "encoding": {}
}
*/
