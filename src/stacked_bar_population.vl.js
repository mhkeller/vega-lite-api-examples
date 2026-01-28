import * as vl from 'vega-lite-api';



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
    "y": {
      "aggregate": "sum", "field": "people",
      "title": "population"
    },
    "x": {"field": "age"},
    "color": {
      "field": "gender",
      "scale": {"range": ["#675193", "#ca8861"]}
    }
  }
}
*/

export default function chart() {
	return vl
		.markBar()
		.description('A bar chart showing the US population distribution of age groups and gender in 2000.')
		.width({ step: 17 })
		.data('data/population.json')
		.transform(
			vl.filter('datum.year == 2000'),
			vl.calculate("datum.sex == 2 ? 'Female' : 'Male'").as('gender')
		)
		.encode(
			vl.y().aggregate('sum').field('people').title('population'),
			vl.x().field('age'),
			vl.color().field('gender').scale({ range: ['#675193', '#ca8861'] })
		)
		.toSpec();
}
