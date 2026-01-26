import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
	const spec = vl
		.markGeoshape()
		.width(500)
		.height(300)
		.data('data/income.json')
		.transform(
			vl.lookup('id').from(
				vl
					.data({
						url: 'data/us-10m.json',
						format: { type: 'topojson', feature: 'states' }
					})
					.key('id')
			).as('geo')
		)
		.encode(
			vl.shape().field('geo').type('geojson'),
			vl.color().fieldQ('pct'),
			vl.row().field('group')
		)
		.toSpec();
	spec.projection = { type: 'albersUsa' };
	return spec;
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "width": 500,
  "height": 300,
  "data": {
    "url": "data/income.json"
  },
  "transform": [
    {
      "lookup": "id",
      "from": {
        "data": {
          "url": "data/us-10m.json",
          "format": {
            "type": "topojson",
            "feature": "states"
          }
        },
        "key": "id"
      },
      "as": "geo"
    }
  ],
  "projection": {"type": "albersUsa"},
  "mark": "geoshape",
  "encoding": {
    "shape": {"field": "geo", "type": "geojson"},
    "color": {"field": "pct", "type": "quantitative"},
    "row": {"field": "group"}
  }
}
*/
