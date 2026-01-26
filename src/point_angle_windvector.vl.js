import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
	const spec = vl
		.markPoint({ shape: 'wedge', filled: true })
		.description('Vector array map showing wind speed and direction.')
		.width(615)
		.height(560)
		.data({
			url: 'data/windvectors.csv',
			format: {
				type: 'csv',
				parse: { longitude: 'number', latitude: 'number' }
			}
		})
		.encode(
			vl.longitude().fieldQ('longitude'),
			vl.latitude().fieldQ('latitude'),
			vl
				.color()
				.fieldQ('dir')
				.scale({ domain: [0, 360], scheme: 'rainbow' })
				.legend(null),
			vl
				.angle()
				.fieldQ('dir')
				.scale({ domain: [0, 360], range: [180, 540] }),
			vl.size().fieldQ('speed').scale({ rangeMax: 500 })
		)
		.config({ aria: false, view: { step: 10, fill: 'black' } })
		.toSpec();
	spec.projection = { type: 'equalEarth' };
	return spec;
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Vector array map showing wind speed and direction.",
  "width": 615,
  "height": 560,
  "data": {
    "url": "data/windvectors.csv",
    "format": {"type": "csv", "parse": {"longitude": "number", "latitude": "number"}}
  },
  "projection": {"type": "equalEarth"},
  "mark": {"type": "point", "shape": "wedge", "filled": true},
  "encoding": {
    "longitude": {"field": "longitude", "type": "quantitative"},
    "latitude": {"field": "latitude", "type": "quantitative"},
    "color": {
      "field": "dir", "type": "quantitative",
      "scale": {"domain": [0, 360], "scheme": "rainbow"},
      "legend": null
    },
    "angle": {
      "field": "dir", "type": "quantitative",
      "scale": {"domain": [0, 360], "range": [180, 540]}
    },
    "size": {
      "field": "speed", "type": "quantitative",
      "scale": {"rangeMax": 500}
    }
  },
  "config": {
    "aria": false,
    "view": {"step": 10, "fill": "black"}
  }
}
*/
