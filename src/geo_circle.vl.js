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
		.data('data/zipcodes.csv')
		.transform({ calculate: "substring(datum.zip_code, 0, 1)", as: 'digit' })
		.encode(
			vl.longitude().fieldQ('longitude'),
			vl.latitude().fieldQ('latitude'),
			vl.size().value(1),
			vl.color().fieldN('digit')
		)
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
    "url": "data/zipcodes.csv"
  },
  "transform": [{"calculate": "substring(datum.zip_code, 0, 1)", "as": "digit"}],
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
    "size": {"value": 1},
    "color": {"field": "digit", "type": "nominal"}
  }
}
*/
