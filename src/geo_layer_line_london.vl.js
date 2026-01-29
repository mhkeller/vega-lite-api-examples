import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
	return vl
		.layer(
			vl.markGeoshape({ stroke: 'white', strokeWidth: 2 })
				.data(vl.topojson('data/londonBoroughs.json').feature('boroughs'))
				.encode(vl.color().value('#eee')),
			vl.markText()
				.data({ url: 'data/londonCentroids.json', format: { type: 'json' } })
				.transform(vl.calculate("indexof (datum.name,' ') > 0  ? substring(datum.name,0,indexof(datum.name, ' ')) : datum.name").as('bLabel'))
				.encode(
					vl.longitude().fieldQ('cx'),
					vl.latitude().fieldQ('cy'),
					vl.text().fieldN('bLabel'),
					vl.size().value(8),
					vl.opacity().value(0.6)
				),
			vl.markGeoshape({ filled: false, strokeWidth: 2 })
				.data(vl.topojson('data/londonTubeLines.json').feature('line'))
				.encode(
					vl.color().fieldN('id').legend({ title: null, orient: 'bottom-right', offset: 0 }).scale({
						domain: ['Bakerloo', 'Central', 'Circle', 'District', 'DLR', 'Hammersmith & City', 'Jubilee', 'Metropolitan', 'Northern', 'Piccadilly', 'Victoria', 'Waterloo & City'],
						range: ['rgb(137,78,36)', 'rgb(220,36,30)', 'rgb(255,206,0)', 'rgb(1,114,41)', 'rgb(0,175,173)', 'rgb(215,153,175)', 'rgb(106,114,120)', 'rgb(114,17,84)', 'rgb(0,0,0)', 'rgb(0,24,168)', 'rgb(0,160,226)', 'rgb(106,187,170)']
					})
				)
		)
		.width(700)
		.height(500)
		.view({ stroke: 'transparent' })
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "width": 700,
  "height": 500,
  "view": {
    "stroke": "transparent"
  },
  "layer": [
    {
      "data": {
        "url": "data/londonBoroughs.json",
        "format": {
          "type": "topojson",
          "feature": "boroughs"
        }
      },
      "mark": {
        "type": "geoshape",
        "stroke": "white",
        "strokeWidth": 2
      },
      "encoding": {
        "color": {
          "value": "#eee"
        }
      }
    },
    {
      "data": {
        "url": "data/londonCentroids.json",
        "format": {
          "type": "json"
        }
      },
      "transform": [
        {
          "calculate": "indexof (datum.name,' ') > 0  ? substring(datum.name,0,indexof(datum.name, ' ')) : datum.name",
          "as": "bLabel"
        }
      ],
      "mark": "text",
      "encoding": {
        "longitude": {
          "field": "cx",
          "type": "quantitative"
        },
        "latitude": {
          "field": "cy",
          "type": "quantitative"
        },
        "text": {
          "field": "bLabel",
          "type": "nominal"
        },
        "size": {
          "value": 8
        },
        "opacity": {
          "value": 0.6
        }
      }
    },
    {
      "data": {
        "url": "data/londonTubeLines.json",
        "format": {
          "type": "topojson",
          "feature": "line"
        }
      },
      "mark": {
        "type": "geoshape",
        "filled": false,
        "strokeWidth": 2
      },
      "encoding": {
        "color": {
          "field": "id",
          "type": "nominal",
          "legend": {
            "title": null,
            "orient": "bottom-right",
            "offset": 0
          },
          "scale": {
            "domain": [
              "Bakerloo",
              "Central",
              "Circle",
              "District",
              "DLR",
              "Hammersmith & City",
              "Jubilee",
              "Metropolitan",
              "Northern",
              "Piccadilly",
              "Victoria",
              "Waterloo & City"
            ],
            "range": [
              "rgb(137,78,36)",
              "rgb(220,36,30)",
              "rgb(255,206,0)",
              "rgb(1,114,41)",
              "rgb(0,175,173)",
              "rgb(215,153,175)",
              "rgb(106,114,120)",
              "rgb(114,17,84)",
              "rgb(0,0,0)",
              "rgb(0,24,168)",
              "rgb(0,160,226)",
              "rgb(106,187,170)"
            ]
          }
        }
      }
    }
  ]
}
*/
