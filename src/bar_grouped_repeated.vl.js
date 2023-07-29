import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart () {
	const specBar = vl
		.markBar()
		.encode(
			vl.x().fieldN('Major Genre'),
			vl.y().fieldQ({ repeat: 'layer' }).aggregate('sum').title('Total Gross'),
			vl.color().datum({ repeat: 'layer' }).title('Gross'),
			vl.xOffset().datum({ repeat: 'layer' })
		);

	return vl
		.spec(specBar)
		.repeat(vl.layer(['Worldwide Gross', 'US Gross']))
		.data('data/movies.json')
		.config({ mark: { invalid: null } })
		.toSpec();
}
/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {
    "url": "data/movies.json"
  },
  "repeat": {"layer": ["Worldwide Gross", "US Gross"]},
  "spec": {
    "mark": "bar",
    "encoding": {
      "x": {
        "field": "Major Genre",
        "type": "nominal"
      },
      "y": {
        "aggregate": "sum",
        "field": {"repeat": "layer"},
        "type": "quantitative",
        "title": "Total Gross"
      },
      "color": {"datum": {"repeat": "layer"}, "title": "Gross"},
      "xOffset": {"datum": {"repeat": "layer"}}
    }
  },
  "config": {
    "mark": {"invalid": null}
  }
}
*/
