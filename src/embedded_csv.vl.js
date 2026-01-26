import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
	return vl
		.markPoint()
		.data({
			values: 'a\n1\n2\n3\n4',
			format: { type: 'csv' }
		})
		.encode(vl.y().fieldQ('a'))
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {
    "values": "a\n1\n2\n3\n4",
    "format": {
      "type": "csv"
    }
  },
  "mark": "point",
  "encoding": {
    "y": {"field": "a", "type": "quantitative"}
  }
}
*/
