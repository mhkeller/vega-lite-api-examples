import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
	const spec = vl
		.markCircle()
		.width(500)
		.height(300)
		.data('data/airports.csv')
		.encode(
			vl.longitude().fieldQ('longitude'),
			vl.latitude().fieldQ('latitude'),
			vl.size().value(10)
		)
		.config({ view: { stroke: 'transparent' } })
		.toSpec();
	spec.projection = { type: 'albersUsa' };
	return spec;
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "width": 500,
  "height": 300,
  "data": {
    "url": "data/airports.csv"
  },
  "projection": {
    "type": "albersUsa"
  },
  "mark": "circle",
  "encoding": {
    "longitude": {
      "field": "longitude",
      "type": "quantitative"
    },
    "latitude": {
      "field": "latitude",
      "type": "quantitative"
    },
    "size": {"value": 10}
  },
  "config": {
    "view": {
      "stroke": "transparent"
    }
  }
}
*/
