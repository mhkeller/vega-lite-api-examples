import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart () {
	return vl
		.markArea()
		.height(80)
		.width(400)
		.title('Distribution of Body Mass of Penguins')
		.data('data/penguins.json')
		.transform(
			vl.density('Body Mass (g)').extent(2500, 6500).groupby('Species')
		)
		.encode(
			vl.x().fieldQ('value')
				.title('Body Mass (g)'),
			vl.y().fieldQ('density').stack('zero'),
			vl.color().fieldN('Species')
		)
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Distribution of Body Mass of Penguins",
  "width": 400,
  "height": 80,
  "data": {
    "url": "data/penguins.json"
  },
  "mark": "area",
  "transform": [
    {
      "density": "Body Mass (g)",
      "groupby": ["Species"],
      "extent": [2500, 6500]
    }
  ],
  "encoding": {
    "x": {"field": "value", "type": "quantitative", "title": "Body Mass (g)"},
    "y": {"field": "density", "type": "quantitative", "stack": "zero"},
    "color": {"field": "Species", "type": "nominal"}
  }
}
*/
