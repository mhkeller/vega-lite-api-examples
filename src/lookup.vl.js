import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
	return vl
		.markBar()
		.data('data/lookup_groups.csv')
		.transform(
			vl
				.lookup('person')
				.from(
					vl
						.data('data/lookup_people.csv')
						.key('name')
						.fields(['age', 'height'])
				)
		)
		.encode(
			vl.x().field('group'),
			vl.y().field('age').aggregate('mean')
		)
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/lookup_groups.csv"},
  "transform": [{
    "lookup": "person",
    "from": {
      "data": {"url": "data/lookup_people.csv"},
      "key": "name",
      "fields": ["age", "height"]
    }
  }],
  "mark": "bar",
  "encoding": {
    "x": {"field": "group"},
    "y": {"field": "age", "aggregate": "mean"}
  }
}
*/
