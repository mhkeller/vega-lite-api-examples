import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
	const layer1 = vl
		.markRule()
		.encode(
			vl
				.x()
				.fieldQ('lower')
				.title(null)
				.scale({ zero: false }),
			vl.y().fieldN('Species').title(null),
			vl.x2().field('upper')
		);

	const layer2 = vl
		.markBar({ size: 14 })
		.encode(
			vl.x().fieldQ('q1'),
			vl.x2().field('q3'),
			vl.y().fieldN('Species').title(null),
			vl.color().fieldN('Species').legend(null)
		);

	const layer3 = vl
		.markTick({ color: 'white', size: 14 })
		.encode(
			vl.x().fieldQ('median'),
			vl.y().fieldN('Species').title(null)
		);

	const layer4 = vl
		.markPoint({ style: 'boxplot-outliers' })
		.transform(vl.flatten('outliers'))
		.encode(
			vl.x().fieldQ('outliers'),
			vl.y().fieldN('Species').title(null)
		);

	return vl
		.layer(layer1, layer2, layer3, layer4)
		.data({
			values: [
				{
					Species: 'Adelie',
					lower: 2850,
					q1: 3350,
					median: 3700,
					q3: 4000,
					upper: 4775,
					outliers: []
				},
				{
					Species: 'Chinstrap',
					lower: 2700,
					q1: 3487.5,
					median: 3700,
					q3: 3950,
					upper: 4800,
					outliers: [2700, 4800]
				},
				{
					Species: 'Gentoo',
					lower: 3950,
					q1: 4700,
					median: 5000,
					q3: 5500,
					upper: 6300,
					outliers: []
				}
			]
		})
		.title('Body Mass of Penguin Species (g)')
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Body Mass of Penguin Species (g)",
  "data": {
    "values": [
      {
        "Species": "Adelie",
        "lower": 2850,
        "q1": 3350,
        "median": 3700,
        "q3": 4000,
        "upper": 4775,
        "outliers": []
      },
      {
        "Species": "Chinstrap",
        "lower": 2700,
        "q1": 3487.5,
        "median": 3700,
        "q3": 3950,
        "upper": 4800,
        "outliers": [2700, 4800]
      },
      {
        "Species": "Gentoo",
        "lower": 3950,
        "q1": 4700,
        "median": 5000,
        "q3": 5500,
        "upper": 6300,
        "outliers": []
      }
    ]
  },
  "layer": [
    {
      "mark": {"type": "rule"},
      "encoding": {
        "y": {"field": "Species", "type": "nominal", "title": null},
        "x": {
          "field": "lower",
          "type": "quantitative",
          "scale": {"zero": false},
          "title": null
        },
        "x2": {"field": "upper"}
      }
    },
    {
      "mark": {"type": "bar", "size": 14},
      "encoding": {
        "y": {"field": "Species", "type": "nominal", "title": null},
        "x": {"field": "q1", "type": "quantitative"},
        "x2": {"field": "q3"},
        "color": {"field": "Species", "type": "nominal", "legend": null}
      }
    },
    {
      "mark": {"type": "tick", "color": "white", "size": 14},
      "encoding": {
        "y": {"field": "Species", "type": "nominal", "title": null},
        "x": {"field": "median", "type": "quantitative"}
      }
    },
    {
      "mark": {"type": "point", "style": "boxplot-outliers"},
      "encoding": {
        "y": {"field": "Species", "type": "nominal", "title": null},
        "x": {"field": "outliers", "type": "quantitative"}
      },
      "transform": [{"flatten": ["outliers"]}]
    }
  ]
}
*/
