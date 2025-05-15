import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
	return vl
		.markBar()
		.width({ step: 17 })
		.data('data/population.json')
		.description(
			'A bar chart showing the US population distribution of age groups and gender in 2000.'
		)
		.transform(
			vl.filter('datum.year == 2000'),
			vl
				.calculate(`datum.sex == 2 ? 'Female' : 'Male'`)
				.as('gender')
		)
		.encode(
			vl.x().fieldO('age'),
			vl
				.y()
				.aggregate('sum')
				.field('people')
				.title('population')
				.stack(null),
			vl
				.color()
				.field('gender')
				.scale({ range: ['#675193', '#ca8861'] }),
			vl.opacity().value(0.7)
		)
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A bar chart showing the US population distribution of age groups and gender in 2000.",
  "data": { "url": "data/population.json"},
  "transform": [
    {"filter": "datum.year == 2000"},
    {"calculate": "datum.sex == 2 ? 'Female' : 'Male'", "as": "gender"}
  ],
  "width": {"step": 17},
  "mark": "bar",
  "encoding": {
    "x": {"field": "age", "type": "ordinal"},
    "y": {
      "aggregate": "sum", "field": "people",
      "title": "population",
      "stack": null
    },
    "color": {
      "field": "gender",
      "scale": {"range": ["#675193", "#ca8861"]}
    },
    "opacity": {"value": 0.7}
  }
}
*/
