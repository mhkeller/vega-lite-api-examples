import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
	return vl
		.vconcat(
			vl
				.layer(
					vl.markRule().encode(vl.x().field('lo'), vl.x2().field('hi')),
					vl.markCircle({ stroke: 'black', opacity: 1 }).encode(
						vl.x().field('mean'),
						vl.color().fieldN('measure').scale({ range: ['black', 'white'] }).legend(null)
					)
				)
				.title({ text: 'Mean of Subject Ratings (95% CIs)', frame: 'bounds' })
				.encode(
					vl.y().fieldN('study').axis({ title: null, labelPadding: 5, domain: false, ticks: false, grid: false }),
					vl.x().type('quantitative').scale({ domain: [-3, 3] }).axis({
						title: '',
						gridDash: [3, 3],
						gridColor: { condition: { test: 'datum.value === 0', value: '#666' }, value: '#CCC' }
					})
				),
			vl
				.layer(
					vl.markRule().encode(vl.x().field('from'), vl.x2().field('to')),
					vl.markPoint({ filled: true, size: 60, fill: 'black' }).encode(
						vl.x().field('to'),
						vl.shape().value('triangle-left').condition({ test: 'datum.to > 0', value: 'triangle-right' })
					),
					vl.markText({ align: 'right', style: 'arrow-label', text: ['Polestar', 'More Valuable'] })
						.transform(vl.filter("datum.label === 'PoleStar'"))
						.encode(vl.x().field('from')),
					vl.markText({ align: 'left', style: 'arrow-label', text: ['Voyager / Voyager 2', 'More Valuable'] })
						.transform(vl.filter("datum.label !== 'PoleStar'"))
						.encode(vl.x().field('from'))
				)
				.data([
					{ from: -0.25, to: -2.9, label: 'PoleStar' },
					{ from: 0.25, to: 2.9, label: 'Voyager / Voyager 2' }
				])
				.encode(vl.x().type('quantitative').scale({ zero: false }).axis(null))
		)
		.data([
			{ measure: 'Open Exploration', mean: 1.813, lo: 1.255, hi: 2.37, study: 'PoleStar vs Voyager' },
			{ measure: 'Focused Question Answering', mean: -1.688, lo: -2.325, hi: -1.05, study: 'PoleStar vs Voyager' },
			{ measure: 'Open Exploration', mean: 2.1875, lo: 1.665, hi: 2.71, study: 'PoleStar vs Voyager 2' },
			{ measure: 'Focused Question Answering', mean: -0.0625, lo: -0.474, hi: 0.349, study: 'PoleStar vs Voyager 2' }
		])
		.spacing(10)
		.config({
			view: { stroke: 'transparent' },
			style: { 'arrow-label': { dy: 12, fontSize: 9.5 }, 'arrow-label2': { dy: 24, fontSize: 9.5 } },
			title: { fontSize: 12 }
		})
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {
    "values": [
      {
        "measure": "Open Exploration",
        "mean": 1.813,
        "lo": 1.255,
        "hi": 2.37,
        "study": "PoleStar vs Voyager"
      },
      {
        "measure": "Focused Question Answering",
        "mean": -1.688,
        "lo": -2.325,
        "hi": -1.05,
        "study": "PoleStar vs Voyager"
      },
      {
        "measure": "Open Exploration",
        "mean": 2.1875,
        "lo": 1.665,
        "hi": 2.71,
        "study": "PoleStar vs Voyager 2"
      },
      {
        "measure": "Focused Question Answering",
        "mean": -0.0625,
        "lo": -0.474,
        "hi": 0.349,
        "study": "PoleStar vs Voyager 2"
      }
    ]
  },
  "spacing": 10,
  "vconcat": [
    {
      "title": {
        "text": "Mean of Subject Ratings (95% CIs)",
        "frame": "bounds"
      },
      "encoding": {
        "y": {
          "field": "study",
          "type": "nominal",
          "axis": {
            "title": null,
            "labelPadding": 5,
            "domain": false,
            "ticks": false,
            "grid": false
          }
        },
        "x": {
          "type": "quantitative",
          "scale": {"domain": [-3, 3]},
          "axis": {
            "title": "",
            "gridDash": [3, 3],
            "gridColor": {
              "condition": {
                "test": "datum.value === 0",
                "value": "#666"
              },
              "value": "#CCC"
            }
          }
        }
      },
      "layer": [
        {
          "mark": "rule",
          "encoding": {
            "x": {"field": "lo"},
            "x2": {"field": "hi"}
          }
        },
        {
          "mark": {
            "type": "circle",
            "stroke": "black",
            "opacity": 1
          },
          "encoding": {
            "x": {"field": "mean"},
            "color": {
              "field": "measure",
              "type": "nominal",
              "scale": {
                "range": ["black", "white"]
              },
              "legend": null
            }
          }
        }
      ]
    },
    {
      "data": {
        "values": [
          {
            "from": -0.25,
            "to": -2.9,
            "label": "PoleStar"
          },
          {
            "from": 0.25,
            "to": 2.9,
            "label": "Voyager / Voyager 2"
          }
        ]
      },
      "encoding": {
        "x": {
          "type": "quantitative",
          "scale": {"zero": false},
          "axis": null
        }
      },
      "layer": [
        {
          "mark": "rule",
          "encoding": {
            "x": {"field": "from"},
            "x2": {"field": "to"}
          }
        },
        {
          "mark": {
            "type": "point",
            "filled": true,
            "size": 60,
            "fill": "black"
          },
          "encoding": {
            "x": {"field": "to"},
            "shape": {
              "condition": {
                "test": "datum.to > 0",
                "value": "triangle-right"
              },
              "value": "triangle-left"
            }
          }
        },
        {
          "mark": {
            "type": "text",
            "align": "right",
            "style": "arrow-label",
            "text": ["Polestar", "More Valuable"]
          },
          "transform": [{"filter": "datum.label === 'PoleStar'"}],
          "encoding": {
            "x": {"field": "from"}
          }
        },
        {
          "mark": {
            "type": "text",
            "align": "left",
            "style": "arrow-label",
            "text": ["Voyager / Voyager 2", "More Valuable"]
          },
          "transform": [{"filter": "datum.label !== 'PoleStar'"}],
          "encoding": {
            "x": {"field": "from"}
          }
        }
      ]
    }
  ],
  "config": {
    "view": {"stroke": "transparent"},
    "style": {
      "arrow-label": {"dy": 12, "fontSize": 9.5},
      "arrow-label2": {"dy": 24, "fontSize": 9.5}
    },
    "title": {"fontSize": 12}
  }
}
*/
