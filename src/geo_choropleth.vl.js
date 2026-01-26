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
		.data({
			url: 'data/us-10m.json',
			format: { type: 'topojson', feature: 'counties' }
		})
		.transform(
			vl.lookup('id').from(vl.data('data/unemployment.tsv').key('id').fields(['rate']))
		)
		.encode(vl.color().fieldQ('rate'))
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
    "url": "data/us-10m.json",
    "format": {
      "type": "topojson",
      "feature": "counties"
    }
  },
  "transform": [{
    "lookup": "id",
    "from": {
      "data": {
        "url": "data/unemployment.tsv"
      },
      "key": "id",
      "fields": ["rate"]
    }
  }],
  "projection": {
    "type": "albersUsa"
  },
  "mark": "geoshape",
  "encoding": {
    "color": {
      "field": "rate",
      "type": "quantitative"
    }
  }
}
*/
