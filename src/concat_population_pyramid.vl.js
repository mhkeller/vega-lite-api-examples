import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
	return vl
		.hconcat(
			vl
				.markBar()
				.title('Female')
				.transform(vl.filter({ field: 'gender', equal: 'Female' }))
				.encode(
					vl.y().field('age').axis(null).sort('descending'),
					vl.x().aggregate('sum').field('people').title('population').axis({ format: 's' }).sort('descending'),
					vl.color().field('gender').scale({ range: ['#675193', '#ca8861'] }).legend(null)
				),
			vl
				.markText({ align: 'center' })
				.width(20)
				.view({ stroke: null })
				.encode(
					vl.y().fieldO('age').axis(null).sort('descending'),
					vl.text().fieldQ('age')
				),
			vl
				.markBar()
				.title('Male')
				.transform(vl.filter({ field: 'gender', equal: 'Male' }))
				.encode(
					vl.y().field('age').title(null).axis(null).sort('descending'),
					vl.x().aggregate('sum').field('people').title('population').axis({ format: 's' }),
					vl.color().field('gender').legend(null)
				)
		)
		.description('A population pyramid for the US in 2000.')
		.data('data/population.json')
		.transform(
			vl.filter('datum.year == 2000'),
			vl.calculate("datum.sex == 2 ? 'Female' : 'Male'").as('gender')
		)
		.spacing(0)
		.config({ view: { stroke: null }, axis: { grid: false } })
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A population pyramid for the US in 2000.",
  "data": { "url": "data/population.json"},
  "transform": [
    {"filter": "datum.year == 2000"},
    {"calculate": "datum.sex == 2 ? 'Female' : 'Male'", "as": "gender"}
  ],
  "spacing": 0,
  "hconcat": [{
    "transform": [{
      "filter": {"field": "gender", "equal": "Female"}
    }],
    "title": "Female",
    "mark": "bar",
    "encoding": {
      "y": {
        "field": "age", "axis": null, "sort": "descending"
      },
      "x": {
        "aggregate": "sum", "field": "people",
        "title": "population",
        "axis": {"format": "s"},
        "sort": "descending"
      },
      "color": {
        "field": "gender",
        "scale": {"range": ["#675193", "#ca8861"]},
        "legend": null
      }
    }
  }, {
    "width": 20,
    "view": {"stroke": null},
    "mark": {
      "type": "text",
      "align": "center"
    },
    "encoding": {
      "y": {"field": "age", "type": "ordinal", "axis": null, "sort": "descending"},
      "text": {"field": "age", "type": "quantitative"}
    }
  }, {
    "transform": [{
      "filter": {"field": "gender", "equal": "Male"}
    }],
    "title": "Male",
    "mark": "bar",
    "encoding": {
      "y": {
        "field": "age", "title": null,
        "axis": null, "sort": "descending"
      },
      "x": {
        "aggregate": "sum", "field": "people",
        "title": "population",
        "axis": {"format": "s"}
      },
      "color": {
        "field": "gender",
        "legend": null
      }
    }
  }],
  "config": {
    "view": {"stroke": null},
    "axis": {"grid": false}
  }
}
*/
