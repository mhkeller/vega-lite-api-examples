import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
	return vl
		.layer(
			vl.markGeoshape({ fill: 'lightgray', stroke: 'white' })
				.data(vl.topojson('data/us-10m.json').feature('states'))
				.project(vl.projection('albersUsa')),
			vl.markCircle()
				.data('data/airports.csv')
				.project(vl.projection('albersUsa'))
				.encode(
					vl.longitude().fieldQ('longitude'),
					vl.latitude().fieldQ('latitude'),
					vl.size().value(10),
					vl.color().value('steelblue')
				)
		)
		.width(500)
		.height(300)
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "width": 500,
  "height": 300,
  "layer": [
    {
      "data": {
        "url": "data/us-10m.json",
        "format": {
          "type": "topojson",
          "feature": "states"
        }
      },
      "projection": {
        "type": "albersUsa"
      },
      "mark": {
        "type": "geoshape",
        "fill": "lightgray",
        "stroke": "white"
      }
    },
    {
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
        "size": {"value": 10},
        "color": {"value": "steelblue"}
      }
    }
  ]
}
*/
