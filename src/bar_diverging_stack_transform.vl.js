import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */
export default function chart() {
	return vl
		.markBar()
		.description(
			'A diverging stacked bar chart for sentiments towards a set of eight questions, displayed as percentages with neutral responses straddling the 0% mark'
		)
		.data([
			{
				question: 'Question 1',
				type: 'Strongly disagree',
				value: 24,
				percentage: 0.7
			},
			{
				question: 'Question 1',
				type: 'Disagree',
				value: 294,
				percentage: 9.1
			},
			{
				question: 'Question 1',
				type: 'Neither agree nor disagree',
				value: 594,
				percentage: 18.5
			},
			{
				question: 'Question 1',
				type: 'Agree',
				value: 1927,
				percentage: 59.9
			},
			{
				question: 'Question 1',
				type: 'Strongly agree',
				value: 376,
				percentage: 11.7
			},
			{
				question: 'Question 2',
				type: 'Strongly disagree',
				value: 2,
				percentage: 18.2
			},
			{
				question: 'Question 2',
				type: 'Disagree',
				value: 2,
				percentage: 18.2
			},
			{
				question: 'Question 2',
				type: 'Neither agree nor disagree',
				value: 0,
				percentage: 0
			},
			{
				question: 'Question 2',
				type: 'Agree',
				value: 7,
				percentage: 63.6
			},
			{
				question: 'Question 2',
				type: 'Strongly agree',
				value: 11,
				percentage: 0
			},
			{
				question: 'Question 3',
				type: 'Strongly disagree',
				value: 2,
				percentage: 20
			},
			{
				question: 'Question 3',
				type: 'Disagree',
				value: 0,
				percentage: 0
			},
			{
				question: 'Question 3',
				type: 'Neither agree nor disagree',
				value: 2,
				percentage: 20
			},
			{
				question: 'Question 3',
				type: 'Agree',
				value: 4,
				percentage: 40
			},
			{
				question: 'Question 3',
				type: 'Strongly agree',
				value: 2,
				percentage: 20
			},
			{
				question: 'Question 4',
				type: 'Strongly disagree',
				value: 0,
				percentage: 0
			},
			{
				question: 'Question 4',
				type: 'Disagree',
				value: 2,
				percentage: 12.5
			},
			{
				question: 'Question 4',
				type: 'Neither agree nor disagree',
				value: 1,
				percentage: 6.3
			},
			{
				question: 'Question 4',
				type: 'Agree',
				value: 7,
				percentage: 43.8
			},
			{
				question: 'Question 4',
				type: 'Strongly agree',
				value: 6,
				percentage: 37.5
			},
			{
				question: 'Question 5',
				type: 'Strongly disagree',
				value: 0,
				percentage: 0
			},
			{
				question: 'Question 5',
				type: 'Disagree',
				value: 1,
				percentage: 4.2
			},
			{
				question: 'Question 5',
				type: 'Neither agree nor disagree',
				value: 3,
				percentage: 12.5
			},
			{
				question: 'Question 5',
				type: 'Agree',
				value: 16,
				percentage: 66.7
			},
			{
				question: 'Question 5',
				type: 'Strongly agree',
				value: 4,
				percentage: 16.7
			},
			{
				question: 'Question 6',
				type: 'Strongly disagree',
				value: 1,
				percentage: 6.3
			},
			{
				question: 'Question 6',
				type: 'Disagree',
				value: 1,
				percentage: 6.3
			},
			{
				question: 'Question 6',
				type: 'Neither agree nor disagree',
				value: 2,
				percentage: 12.5
			},
			{
				question: 'Question 6',
				type: 'Agree',
				value: 9,
				percentage: 56.3
			},
			{
				question: 'Question 6',
				type: 'Strongly agree',
				value: 3,
				percentage: 18.8
			},
			{
				question: 'Question 7',
				type: 'Strongly disagree',
				value: 0,
				percentage: 0
			},
			{
				question: 'Question 7',
				type: 'Disagree',
				value: 0,
				percentage: 0
			},
			{
				question: 'Question 7',
				type: 'Neither agree nor disagree',
				value: 1,
				percentage: 20
			},
			{
				question: 'Question 7',
				type: 'Agree',
				value: 4,
				percentage: 80
			},
			{
				question: 'Question 7',
				type: 'Strongly agree',
				value: 0,
				percentage: 0
			},
			{
				question: 'Question 8',
				type: 'Strongly disagree',
				value: 0,
				percentage: 0
			},
			{
				question: 'Question 8',
				type: 'Disagree',
				value: 0,
				percentage: 0
			},
			{
				question: 'Question 8',
				type: 'Neither agree nor disagree',
				value: 0,
				percentage: 0
			},
			{
				question: 'Question 8',
				type: 'Agree',
				value: 0,
				percentage: 0
			},
			{
				question: 'Question 8',
				type: 'Strongly agree',
				value: 2,
				percentage: 100
			}
		])
		.transform([
			{
				calculate:
					"if(datum.type === 'Strongly disagree',-2,0) + if(datum.type==='Disagree',-1,0) + if(datum.type =='Neither agree nor disagree',0,0) + if(datum.type ==='Agree',1,0) + if(datum.type ==='Strongly agree',2,0)",
				as: 'q_order'
			},
			{
				calculate:
					"if(datum.type === 'Disagree' || datum.type === 'Strongly disagree', datum.percentage,0) + if(datum.type === 'Neither agree nor disagree', datum.percentage / 2,0)",
				as: 'signed_percentage'
			},
			{
				stack: 'percentage',
				as: ['v1', 'v2'],
				groupby: ['question']
			},
			{
				joinaggregate: [
					{
						field: 'signed_percentage',
						op: 'sum',
						as: 'offset'
					}
				],
				groupby: ['question']
			},
			{ calculate: 'datum.v1 - datum.offset', as: 'nx' },
			{ calculate: 'datum.v2 - datum.offset', as: 'nx2' }
		])
		.encode(
			vl.x().fieldQ('nx').title('Percentage'),
			vl.x2().field('nx2'),
			vl.y().fieldN('question').title('Question').axis({
				offset: 5,
				ticks: false,
				minExtent: 60,
				domain: false
			}),
			vl
				.color()
				.fieldN('type')
				.title('Response')
				.scale({
					domain: [
						'Strongly disagree',
						'Disagree',
						'Neither agree nor disagree',
						'Agree',
						'Strongly agree'
					],
					range: [
						'#c30d24',
						'#f3a583',
						'#cccccc',
						'#94c6da',
						'#1770ab'
					],
					type: 'ordinal'
				})
		)
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A diverging stacked bar chart for sentiments towards a set of eight questions, displayed as percentages with neutral responses straddling the 0% mark",
  "data": {
    "values": [
      {"question": "Question 1", "type": "Strongly disagree", "value": 24, "percentage": 0.7},
      {"question": "Question 1", "type": "Disagree", "value": 294, "percentage": 9.1},
      {"question": "Question 1", "type": "Neither agree nor disagree", "value": 594, "percentage": 18.5},
      {"question": "Question 1", "type": "Agree", "value": 1927, "percentage": 59.9},
      {"question": "Question 1", "type": "Strongly agree", "value": 376, "percentage": 11.7},
      {"question": "Question 2", "type": "Strongly disagree", "value": 2, "percentage": 18.2},
      {"question": "Question 2", "type": "Disagree", "value": 2, "percentage": 18.2},
      {"question": "Question 2", "type": "Neither agree nor disagree", "value": 0, "percentage": 0},
      {"question": "Question 2", "type": "Agree", "value": 7, "percentage": 63.6},
      {"question": "Question 2", "type": "Strongly agree", "value": 11, "percentage": 0},
      {"question": "Question 3", "type": "Strongly disagree", "value": 2, "percentage": 20},
      {"question": "Question 3", "type": "Disagree", "value": 0, "percentage": 0},
      {"question": "Question 3", "type": "Neither agree nor disagree", "value": 2, "percentage": 20},
      {"question": "Question 3", "type": "Agree", "value": 4, "percentage": 40},
      {"question": "Question 3", "type": "Strongly agree", "value": 2, "percentage": 20},
      {"question": "Question 4", "type": "Strongly disagree", "value": 0, "percentage": 0},
      {"question": "Question 4", "type": "Disagree", "value": 2, "percentage": 12.5},
      {"question": "Question 4", "type": "Neither agree nor disagree", "value": 1, "percentage": 6.3},
      {"question": "Question 4", "type": "Agree", "value": 7, "percentage": 43.8},
      {"question": "Question 4", "type": "Strongly agree", "value": 6, "percentage": 37.5},
      {"question": "Question 5", "type": "Strongly disagree", "value": 0, "percentage": 0},
      {"question": "Question 5", "type": "Disagree", "value": 1, "percentage": 4.2},
      {"question": "Question 5", "type": "Neither agree nor disagree", "value": 3, "percentage": 12.5},
      {"question": "Question 5", "type": "Agree", "value": 16, "percentage": 66.7},
      {"question": "Question 5", "type": "Strongly agree", "value": 4, "percentage": 16.7},
      {"question": "Question 6", "type": "Strongly disagree", "value": 1, "percentage": 6.3},
      {"question": "Question 6", "type": "Disagree", "value": 1, "percentage": 6.3},
      {"question": "Question 6", "type": "Neither agree nor disagree", "value": 2, "percentage": 12.5},
      {"question": "Question 6", "type": "Agree", "value": 9, "percentage": 56.3},
      {"question": "Question 6", "type": "Strongly agree", "value": 3, "percentage": 18.8},
      {"question": "Question 7", "type": "Strongly disagree", "value": 0, "percentage": 0},
      {"question": "Question 7", "type": "Disagree", "value": 0, "percentage": 0},
      {"question": "Question 7", "type": "Neither agree nor disagree", "value": 1, "percentage": 20},
      {"question": "Question 7", "type": "Agree", "value": 4, "percentage": 80},
      {"question": "Question 7", "type": "Strongly agree", "value": 0, "percentage": 0},
      {"question": "Question 8", "type": "Strongly disagree", "value": 0, "percentage": 0},
      {"question": "Question 8", "type": "Disagree", "value": 0, "percentage": 0},
      {"question": "Question 8", "type": "Neither agree nor disagree", "value": 0, "percentage": 0},
      {"question": "Question 8", "type": "Agree", "value": 0, "percentage": 0},
      {"question": "Question 8", "type": "Strongly agree", "value": 2, "percentage": 100}
    ]
  },
  "transform": [
    {
      "calculate": "if(datum.type === 'Strongly disagree',-2,0) + if(datum.type==='Disagree',-1,0) + if(datum.type =='Neither agree nor disagree',0,0) + if(datum.type ==='Agree',1,0) + if(datum.type ==='Strongly agree',2,0)",
      "as": "q_order"
    },
    {
      "calculate": "if(datum.type === 'Disagree' || datum.type === 'Strongly disagree', datum.percentage,0) + if(datum.type === 'Neither agree nor disagree', datum.percentage / 2,0)",
      "as": "signed_percentage"
    },
    {"stack": "percentage", "as": ["v1", "v2"], "groupby": ["question"]},
    {
      "joinaggregate": [
        {
          "field": "signed_percentage",
          "op": "sum",
          "as": "offset"
        }
      ],
      "groupby": ["question"]
    },
    {"calculate": "datum.v1 - datum.offset", "as": "nx"},
    {"calculate": "datum.v2 - datum.offset", "as": "nx2"}
  ],
  "mark": "bar",
  "encoding": {
    "x": {
      "field": "nx",
      "type": "quantitative",
      "title": "Percentage"
    },
    "x2": {"field": "nx2"},
    "y": {
      "field": "question",
      "type": "nominal",
      "title": "Question",
      "axis": {
        "offset": 5,
        "ticks": false,
        "minExtent": 60,
        "domain": false
      }
    },
    "color": {
      "field": "type",
      "type": "nominal",
      "title": "Response",
      "scale": {
        "domain": ["Strongly disagree", "Disagree", "Neither agree nor disagree", "Agree", "Strongly agree"],
        "range": ["#c30d24", "#f3a583", "#cccccc", "#94c6da", "#1770ab"],
        "type": "ordinal"
      }
    }
  }
}
*/
