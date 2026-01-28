import * as vl from 'vega-lite-api';



/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description":
    "A bar chart showing the US population distribution of age groups and gender in 2000.",
  "data": {
    "url": "data/population.json"
  },
  "transform": [
    {"filter": "datum.year == 2000"},
    {"calculate": "datum.sex == 2 ? 'Female' : 'Male'", "as": "gender"},
    {
      "stack": "people",
      "offset": "normalize",
      "as": ["v1", "v2"],
      "groupby": ["age"],
      "sort": [{"field": "gender", "order": "descending"}]
    }
  ],
  "width": {"step": 17},
  "mark": "bar",
  "encoding": {
    "y": {
      "field": "v1",
      "type": "quantitative",
      "title": "population"
    },
    "y2": {"field": "v2"},
    "x": {
      "field": "age",
      "type": "ordinal"
    },
    "color": {
      "field": "gender",
      "type": "nominal",
      "scale": {
        "range": ["#675193", "#ca8861"]
      }
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
			vl.calculate("datum.sex == 2 ? 'Female' : 'Male'").as('gender'),
			{
				stack: 'people',
				offset: 'normalize',
				as: ['v1', 'v2'],
				groupby: ['age'],
				sort: [{ field: 'gender', order: 'descending' }]
			}
		)
		.encode(
			vl.y().fieldQ('v1').title('population'),
			vl.y2().field('v2'),
			vl.x().fieldO('age'),
			vl.color().fieldN('gender').scale({ range: ['#675193', '#ca8861'] })
		)
		.toSpec();
}
