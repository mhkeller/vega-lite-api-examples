import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
	return vl
		.data('data/population.json')
		.transform(
			vl.filter('datum.year == 2000'),
			vl.calculate("datum.sex == 2 ? 'Female' : 'Male'").as('gender')
		)
		.facet({ column: { field: 'gender' } })
		.spec(
			vl.markBar()
				.width({ step: 17 })
				.encode(
					vl.y().aggregate('sum').field('people').title('population'),
					vl.x().fieldO('age'),
					vl.color().field('gender').scale({ range: ['#675193', '#ca8861'] })
				)
		)
		.description('A trellis bar chart showing the US population distribution of age groups and gender in 2000.')
		.resolve({ scale: { x: 'independent' } })
		.config({ view: { fill: 'yellow' } })
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A trellis bar chart showing the US population distribution of age groups and gender in 2000.",
  "data": { "url": "data/population.json"},
  "transform": [
    {"filter": "datum.year == 2000"},
    {"calculate": "datum.sex == 2 ? 'Female' : 'Male'", "as": "gender"}
  ],
  "facet": {"column": {"field": "gender"}},
  "spec": {
    "width": {"step": 17},
    "mark": "bar",
    "encoding": {
      "y": {
        "aggregate": "sum", "field": "people",
        "title": "population"
      },
      "x": {"field": "age", "type": "ordinal"},
      "color": {
        "field": "gender",
        "scale": {"range": ["#675193", "#ca8861"]}
      }
    }
  },
  "resolve": {
    "scale": {"x": "independent"}
  },
  "config": {"view": {"fill": "yellow"}}
}
*/
