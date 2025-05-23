import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */
export default function chart() {
	return vl
		.markBar()
		.description(
			'A population pyramid for the US in 2000, created using stack. See https://vega.github.io/vega-lite/examples/concat_population_pyramid.html for a variant of this created using concat.'
		)
		.data('data/population.json')
		.transform([
			{ filter: 'datum.year == 2000' },
			{
				calculate: "datum.sex == 2 ? 'Female' : 'Male'",
				as: 'gender'
			},
			{
				calculate:
					'datum.sex == 2 ? -datum.people : datum.people',
				as: 'signed_people'
			}
		])
		.width(300)
		.height(200)
		.encode(
			vl.y().field('age').axis(null).sort('descending'),
			vl
				.x()
				.aggregate('sum')
				.field('signed_people')
				.title('population')
				.axis({ format: 's' }),
			vl
				.color()
				.field('gender')
				.scale({ range: ['#675193', '#ca8861'] })
				.legend({ orient: 'top', title: null })
		)
		.config({
			view: { stroke: null },
			axis: { grid: false }
		})
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A population pyramid for the US in 2000, created using stack. See https://vega.github.io/vega-lite/examples/concat_population_pyramid.html for a variant of this created using concat.",
  "data": { "url": "data/population.json"},
  "transform": [
    {"filter": "datum.year == 2000"},
    {"calculate": "datum.sex == 2 ? 'Female' : 'Male'", "as": "gender"},
    {"calculate": "datum.sex == 2 ? -datum.people : datum.people", "as": "signed_people"}
  ],
  "width": 300,
  "height": 200,
  "mark": "bar",
  "encoding": {
    "y": {
      "field": "age",
      "axis": null, "sort": "descending"
    },
    "x": {
      "aggregate": "sum", "field": "signed_people",
      "title": "population",
      "axis": {"format": "s"}
    },
    "color": {
      "field": "gender",
      "scale": {"range": ["#675193", "#ca8861"]},
      "legend": {"orient": "top", "title": null}
    }
  },
  "config": {
    "view": {"stroke": null},
    "axis": {"grid": false}
  }
}
*/
