import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
	return vl
		.layer(
			vl.markLine().encode(
				vl.detail().fieldN('country'),
				vl.color().value('#db646f')
			),
			vl.markPoint({ filled: true }).encode(
				vl
					.color()
					.fieldO('year')
					.scale({ domain: [1955, 2000], range: ['#e6959c', '#911a24'] })
					.title('Year'),
				vl.size().value(100),
				vl.opacity().value(1)
			)
		)
		.description(
			"A ranged dot plot that uses 'layer' to convey changing life expectancy for the five most populous countries (between 1955 and 2000)."
		)
		.data('data/countries.json')
		.transform(
			{
				filter: {
					field: 'country',
					oneOf: ['China', 'India', 'United States', 'Indonesia', 'Brazil']
				}
			},
			{ filter: { field: 'year', oneOf: [1955, 2000] } }
		)
		.encode(
			vl.x().fieldQ('life_expect').title('Life Expectancy (years)'),
			vl.y().fieldN('country').title('Country').axis({
				offset: 5,
				ticks: false,
				minExtent: 70,
				domain: false
			})
		)
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A ranged dot plot that uses 'layer' to convey changing life expectancy for the five most populous countries (between 1955 and 2000).",
  "data": {"url": "data/countries.json"},
  "transform": [
    {
      "filter": {
        "field": "country",
        "oneOf": ["China", "India", "United States", "Indonesia", "Brazil"]
      }
    },
    {
      "filter": {
        "field": "year",
        "oneOf": [1955, 2000]
      }
    }
  ],
  "encoding": {
    "x": {
      "field": "life_expect",
      "type": "quantitative",
      "title": "Life Expectancy (years)"
    },
    "y": {
      "field": "country",
      "type": "nominal",
      "title": "Country",
      "axis": {
        "offset": 5,
        "ticks": false,
        "minExtent": 70,
        "domain": false
      }
    }
  },
  "layer": [
    {
      "mark": "line",
      "encoding": {
        "detail": {
          "field": "country",
          "type": "nominal"
        },
        "color": {"value": "#db646f"}
      }
    },
    {
      "mark": {
        "type": "point",
        "filled": true
      },
      "encoding": {
        "color": {
          "field": "year",
          "type": "ordinal",
          "scale": {
            "domain": [1955, 2000],
            "range": ["#e6959c", "#911a24"]
          },
          "title": "Year"
        },
        "size": {"value": 100},
        "opacity": {"value": 1}
      }
    }
  ]
}
*/
