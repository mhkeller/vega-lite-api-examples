import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
	const spec = vl
		.layer(
			vl
				.markGeoshape({ fill: 'lightgray', stroke: 'white' })
				.data({
					url: 'data/us-10m.json',
					format: { type: 'topojson', feature: 'states' }
				}),
			vl
				.layer(
					vl.markCircle({ color: 'orange' }),
					vl
						.markText({ dy: -10 })
						.encode(vl.text().fieldN('city'))
				)
				.data('data/us-state-capitals.json')
				.encode(
					vl.longitude().fieldQ('lon'),
					vl.latitude().fieldQ('lat')
				)
		)
		.width(800)
		.height(500)
		.toSpec();
	spec.projection = { type: 'albersUsa' };
	return spec;
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "width": 800,
  "height": 500,
  "projection": {
    "type": "albersUsa"
  },
  "layer": [
    {
      "data": {
        "url": "data/us-10m.json",
        "format": {
          "type": "topojson",
          "feature": "states"
        }
      },
      "mark": {
        "type": "geoshape",
        "fill": "lightgray",
        "stroke": "white"
      }
    },
    {
      "data": {
        "url": "data/us-state-capitals.json"
      },
      "encoding": {
        "longitude": {
          "field": "lon",
          "type": "quantitative"
        },
        "latitude": {
          "field": "lat",
          "type": "quantitative"
        }
      },
      "layer": [{
        "mark": {
          "type": "circle",
          "color": "orange"
        }
      }, {
        "mark": {
          "type": "text",
          "dy": -10
        },
        "encoding": {
          "text": {"field": "city", "type": "nominal"}
        }
      }]
    }
  ]
}
*/
