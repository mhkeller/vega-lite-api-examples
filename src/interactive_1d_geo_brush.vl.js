import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
	return vl
		.layer(
			vl.markGeoshape({ fill: 'lightgray', stroke: 'white' })
				.data(vl.topojson('data/us-10m.json').feature('states')),
			vl.markCircle()
				.data('data/airports.csv')
				.transform(vl.filter("datum.state !== 'PR' && datum.state !== 'VI'"))
				.params({ name: 'brush', select: { type: 'interval', encodings: ['latitude'] }, value: { latitude: [45, 51.5] } })
				.encode(
					vl.longitude().fieldQ('longitude'),
					vl.latitude().fieldQ('latitude'),
					vl.color().value('steelblue').condition({ param: 'brush', empty: false, value: 'goldenrod' }),
					vl.size().value(10)
				)
		)
		.width(500)
		.height(300)
		.project(vl.projection('albersUsa'))
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "width": 500,
  "height": 300,
  "projection": {"type": "albersUsa"},
  "layer": [
    {
      "data": {
        "url": "data/us-10m.json",
        "format": {"type": "topojson", "feature": "states"}
      },
      "mark": {"type": "geoshape", "fill": "lightgray", "stroke": "white"}
    },
    {
      "data": {"url": "data/airports.csv"},
      "transform": [
        {"filter": "datum.state !== 'PR' && datum.state !== 'VI'"}
      ],
      "params": [
        {
          "name": "brush",
          "select": {"type": "interval", "encodings": ["latitude"]},
          "value": {"latitude": [45, 51.5]}
        }
      ],
      "mark": "circle",
      "encoding": {
        "longitude": {"field": "longitude", "type": "quantitative"},
        "latitude": {"field": "latitude", "type": "quantitative"},
        "color": {
          "condition": {"param": "brush", "empty": false, "value": "goldenrod"},
          "value": "steelblue"
        },
        "size": {"value": 10}
      }
    }
  ]
}
*/
