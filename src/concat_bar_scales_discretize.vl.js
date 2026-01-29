import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
	return vl
		.hconcat(
			vl.markCircle().encode(
				vl.y().fieldN('b').sort(null).axis({ ticks: false, domain: false, title: null }),
				vl.size().fieldQ('b').scale({ type: 'quantize' }),
				vl.color().fieldQ('b').scale({ type: 'quantize', zero: true }).legend({ title: 'Quantize' })
			),
			vl.markCircle().encode(
				vl.y().fieldN('b').sort(null).axis({ ticks: false, domain: false, title: null }),
				vl.size().fieldQ('b').scale({ type: 'quantile', range: [80, 160, 240, 320, 400] }),
				vl.color().fieldQ('b').scale({ type: 'quantile', scheme: 'magma' }).legend({ format: 'd', title: 'Quantile' })
			),
			vl.markCircle().encode(
				vl.y().fieldN('b').sort(null).axis({ ticks: false, domain: false, title: null }),
				vl.size().fieldQ('b').scale({ type: 'threshold', domain: [30, 70], range: [80, 200, 320] }),
				vl.color().fieldQ('b').scale({ type: 'threshold', domain: [30, 70], scheme: 'viridis' }).legend({ title: 'Threshold' })
			)
		)
		.description('Horizontally concatenated charts that show different types of discretizing scales.')
		.data([
			{ a: 'A', b: 28 },
			{ a: 'B', b: 55 },
			{ a: 'C', b: 43 },
			{ a: 'D', b: 91 },
			{ a: 'E', b: 81 },
			{ a: 'F', b: 53 },
			{ a: 'G', b: 19 },
			{ a: 'H', b: 87 },
			{ a: 'I', b: 52 }
		])
		.resolve({ scale: { color: 'independent', size: 'independent' } })
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Horizontally concatenated charts that show different types of discretizing scales.",
  "data": {
    "values": [
      {"a": "A", "b": 28},
      {"a": "B", "b": 55},
      {"a": "C", "b": 43},
      {"a": "D", "b": 91},
      {"a": "E", "b": 81},
      {"a": "F", "b": 53},
      {"a": "G", "b": 19},
      {"a": "H", "b": 87},
      {"a": "I", "b": 52}
    ]
  },
  "hconcat": [
    {
      "mark": "circle",
      "encoding": {
        "y": {
          "field": "b",
          "type": "nominal",
          "sort": null,
          "axis": {
            "ticks": false,
            "domain": false,
            "title": null
          }
        },
        "size": {
          "field": "b",
          "type": "quantitative",
          "scale": {
            "type": "quantize"
          }
        },
        "color": {
          "field": "b",
          "type": "quantitative",
          "scale": {
            "type": "quantize",
            "zero": true
          },
          "legend": {
            "title": "Quantize"
          }
        }
      }
    },
    {
      "mark": "circle",
      "encoding": {
        "y": {
          "field": "b",
          "type": "nominal",
          "sort": null,
          "axis": {
            "ticks": false,
            "domain": false,
            "title": null
          }
        },
        "size": {
          "field": "b",
          "type": "quantitative",
          "scale": {
            "type": "quantile",
            "range": [80, 160, 240, 320, 400]
          }
        },
        "color": {
          "field": "b",
          "type": "quantitative",
          "scale": {
            "type": "quantile",
            "scheme": "magma"
          },
          "legend": {
            "format": "d",
            "title": "Quantile"
          }
        }
      }
    },
    {
      "mark": "circle",
      "encoding": {
        "y": {
          "field": "b",
          "type": "nominal",
          "sort": null,
          "axis": {
            "ticks": false,
            "domain": false,
            "title": null
          }
        },
        "size": {
          "field": "b",
          "type": "quantitative",
          "scale": {
            "type": "threshold",
            "domain": [30, 70],
            "range": [80, 200, 320]
          }
        },
        "color": {
          "field": "b",
          "type": "quantitative",
          "scale": {
            "type": "threshold",
            "domain": [30, 70],
            "scheme": "viridis"
          },
          "legend": {
            "title": "Threshold"
          }
        }
      }
    }
  ],
  "resolve": {
    "scale": {
      "color": "independent",
      "size": "independent"
    }
  }
}
*/
