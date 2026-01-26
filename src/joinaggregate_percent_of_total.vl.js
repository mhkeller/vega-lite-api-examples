import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
	return vl
		.markBar()
		.description(
			'A bar graph showing what activites consume what percentage of the day.'
		)
		.data({
			values: [
				{ Activity: 'Sleeping', Time: 8 },
				{ Activity: 'Eating', Time: 2 },
				{ Activity: 'TV', Time: 4 },
				{ Activity: 'Work', Time: 8 },
				{ Activity: 'Exercise', Time: 2 }
			]
		})
		.height({ step: 12 })
		.transform(
			{
				joinaggregate: [{ op: 'sum', field: 'Time', as: 'TotalTime' }]
			},
			{
				calculate: 'datum.Time/datum.TotalTime * 100',
				as: 'PercentOfTotal'
			}
		)
		.encode(
			vl.x().fieldQ('PercentOfTotal').title('% of total Time'),
			vl.y().fieldN('Activity')
		)
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A bar graph showing what activites consume what percentage of the day.",
  "data": {
    "values": [
      {"Activity": "Sleeping", "Time": 8},
      {"Activity": "Eating", "Time": 2},
      {"Activity": "TV", "Time": 4},
      {"Activity": "Work", "Time": 8},
      {"Activity": "Exercise", "Time": 2}
    ]
  },
  "transform": [{
    "joinaggregate": [{
      "op": "sum",
      "field": "Time",
      "as": "TotalTime"
    }]
  },
  {
    "calculate": "datum.Time/datum.TotalTime * 100",
    "as": "PercentOfTotal"
  }],
  "height": {"step": 12},
  "mark": "bar",
  "encoding": {
    "x": {
      "field": "PercentOfTotal",
      "type": "quantitative",
      "title": "% of total Time"
    },
    "y": {
      "field": "Activity",
      "type": "nominal"
    }
  }
}
*/
