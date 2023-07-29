import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart () {
	const area = vl
		.markArea()
		.height(80)
		.width(400)
		.encode(
			vl.x().fieldQ('value')
				.title('Body Mass (g)'),
			vl.y().fieldQ('density').stack('zero')
		);

	return vl
		.data('data/penguins.json')
		.facet({ row: vl.field('Species') })
		.spec(area)
		.title('Distribution of Body Mass of Penguins')
		.transform(
			vl.density('Body Mass (g)').extent(2500, 6500).groupby('Species')
		)
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Distribution of Body Mass of Penguins",
  "data": {"url": "data/penguins.json"},
  "transform": [
    {"density": "Body Mass (g)", "groupby": ["Species"], "extent": [2500, 6500]}
  ],
  "facet": {"row": {"field": "Species"}},
  "spec": {
    "width": 400,
    "height": 80,
    "mark": "area",
    "encoding": {
      "x": {"field": "value", "type": "quantitative", "title": "Body Mass (g)"},
      "y": {"field": "density", "type": "quantitative", "stack": "zero"}
    }
  }
}
*/
