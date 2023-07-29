import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart () {
	const layer1 = vl
		.markBar({ xOffset: 2, x2Offset: -2, cornerRadius: 3 })
		.encode(
			vl.x().fieldQ('bin_Horsepower_start').title('Horsepower').axis({ grid: false }),
			vl.x2().field('bin_Horsepower_end'),
			vl.y().field('y').axis(null),
			vl.y2().field('y2'),
			vl.color().fieldO('max_bin_count_end').title('count').scale({ scheme: 'lighttealblue' })
		);

	const layer2 = vl
		.markBar({ xOffset: 2, x2Offset: -2, yOffset: -3, y2Offset: 3 })
		.encode(
			vl.x().fieldQ('bin_Horsepower_start').title('Horsepower').axis({ grid: false }),
			vl.x2().field('bin_Horsepower_end'),
			vl.y().field('y').axis(null),
			vl.y2().field('y2'),
			vl.color().fieldO('bin_count_end').title('count')
		);

	return vl
		.layer(layer1, layer2)
		.width(400)
		.height(150)
		.data('data/cars.json')
		.description('Heat lane chart based on https://www.smashingmagazine.com/2022/07/accessibility-first-approach-chart-visual-design/')
		.title('Heat Lane of Horsepower')
		.transform(
			vl.bin().field('Horsepower').as(['bin_Horsepower_start', 'bin_Horsepower_end']),
			vl.aggregate([{ op: 'count', as: 'count' }]).groupby(['bin_Horsepower_start', 'bin_Horsepower_end']),
			vl.bin(true).field('count').as(['bin_count_start', 'bin_count_end']),
			vl.calculate('-datum.bin_count_end/2').as('y2'),
			vl.calculate('datum.bin_count_end/2').as('y'),
			vl.joinaggregate([{ field: 'bin_count_end', op: 'max', as: 'max_bin_count_end' }])
		)
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Heat lane chart based on https://www.smashingmagazine.com/2022/07/accessibility-first-approach-chart-visual-design/",
  "data": {"url": "data/cars.json"},
  "height": 150,
  "width": 400,
  "title": "Heat Lane of Horsepower",
  "layer": [
    {
      "mark": {"type": "bar", "xOffset": 2, "x2Offset": -2, "cornerRadius": 3},
      "encoding": {
        "x": {
          "field": "bin_Horsepower_start",
          "type": "quantitative",
          "title": "Horsepower",
          "axis": {"grid": false}
        },
        "x2": {"field": "bin_Horsepower_end"},
        "y": {"field": "y", "axis": null},
        "y2": {"field": "y2"},
        "color": {
          "field": "max_bin_count_end",
          "type": "ordinal",
          "title": "count",
          "scale": {"scheme": "lighttealblue"}
        }
      }
    },
    {
      "mark": {
        "type": "bar",
        "xOffset": 2,
        "x2Offset": -2,
        "yOffset": -3,
        "y2Offset": 3
      },
      "encoding": {
        "x": {
          "field": "bin_Horsepower_start",
          "type": "quantitative",
          "title": "Horsepower",
          "axis": {"grid": false}
        },
        "x2": {"field": "bin_Horsepower_end"},
        "y": {"field": "y", "axis": null},
        "y2": {"field": "y2"},
        "color": {"field": "bin_count_end", "type": "ordinal", "title": "count"}
      }
    }
  ],
  "transform": [
    {
      "bin": true,
      "field": "Horsepower",
      "as": ["bin_Horsepower_start", "bin_Horsepower_end"]
    },
    {
      "aggregate": [{"op": "count", "as": "count"}],
      "groupby": ["bin_Horsepower_start", "bin_Horsepower_end"]
    },
    {"bin": true, "field": "count", "as": ["bin_count_start", "bin_count_end"]},
    {"calculate": "-datum.bin_count_end/2", "as": "y2"},
    {"calculate": "datum.bin_count_end/2", "as": "y"},
    {
      "joinaggregate": [
        {"field": "bin_count_end", "op": "max", "as": "max_bin_count_end"}
      ]
    }
  ]
}
*/
