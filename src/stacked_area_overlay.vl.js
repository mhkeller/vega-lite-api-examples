import * as vl from 'vega-lite-api';



/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": { "url": "data/population.json"},
  "transform": [
    {"filter": "datum.year == 2000"},
    {"calculate": "datum.sex == 2 ? 'Female' : 'Male'", "as": "gender"}
  ],
  "mark": {"type": "area", "line": true},
  "encoding": {
    "y": {"aggregate": "sum", "field": "people"},
    "x": {"field": "age"},
    "color": {
      "field": "gender",
      "scale": {"range": ["#675193", "#ca8861"]}
    },
    "opacity": {"value": 0.7}
  }
}
*/

export default function chart() {
	return vl
		.markArea({ line: true })
		.data('data/population.json')
		.transform(
			vl.filter('datum.year == 2000'),
			vl.calculate("datum.sex == 2 ? 'Female' : 'Male'").as('gender')
		)
		.encode(
			vl.y().aggregate('sum').field('people'),
			vl.x().field('age'),
			vl.color().field('gender').scale({ range: ['#675193', '#ca8861'] }),
			vl.opacity().value(0.7)
		)
		.toSpec();
}
