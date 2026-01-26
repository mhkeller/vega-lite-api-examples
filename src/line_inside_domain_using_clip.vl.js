import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
	return vl
		.markLine({ clip: true })
		.data({
			values: [
				{ wavelength: 250, power: 1 },
				{ wavelength: 300, power: 2 },
				{ wavelength: 420, power: 4 },
				{ wavelength: 450, power: 1.8 },
				{ wavelength: 500, power: 1.1 }
			]
		})
		.encode(
			vl.x().fieldQ('wavelength').scale({ domain: [300, 450] }),
			vl.y().fieldQ('power')
		)
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {
    "values": [
      {"wavelength": 250, "power": 1},
      {"wavelength": 300, "power": 2},
      {"wavelength": 420, "power": 4},
      {"wavelength": 450, "power": 1.8},
      {"wavelength": 500, "power": 1.1}
    ]
  },
  "mark": {
    "type": "line",
    "clip": true
  },
  "encoding": {
    "x": {
      "field": "wavelength",
      "type": "quantitative",
      "scale": {"domain": [300,450]}
    },
    "y": {
      "field": "power",
      "type": "quantitative"
    }
  }
}
*/
