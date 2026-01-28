import * as vl from 'vega-lite-api';



/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A bar chart showing the US population distribution of age groups and gender in 2000.",
  "data": {"url": "data/population.json"},
  "transform": [
    {"filter": "datum.year == 2000"},
    {"calculate": "datum.sex == 2 ? 'Female' : 'Male'", "as": "gender"}
  ],
  "width": {"step": 17},
  "mark": "bar",
  "encoding": {
    "x": {
      "field": "age",
      "type": "ordinal"
    },
    "y": {
      "aggregate": "sum",
      "field": "people",
      "type": "quantitative",
      "title": "population"
    },
    "opacity": {"field": "people", "type": "quantitative"}
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
			vl.x().fieldO('age'),
			vl.y().aggregate('sum').fieldQ('people').title('population'),
			vl.opacity().fieldQ('people')
		)
		.toSpec();
}
