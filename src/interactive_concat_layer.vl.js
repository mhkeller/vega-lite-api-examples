import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
	return {
		$schema: 'https://vega.github.io/schema/vega-lite/v5.json',
		description: 'A dashboard with cross-highlighting.',
		data: { url: 'data/movies.json' },
		vconcat: [
			{
				layer: [
					{
						mark: { type: 'rect' },
						encoding: {
							x: { bin: { maxbins: 10 }, field: 'IMDB Rating' },
							y: {
								bin: { maxbins: 10 },
								field: 'Rotten Tomatoes Rating'
							},
							color: {
								aggregate: 'count',
								legend: {
									title: 'All Movies Count',
									direction: 'horizontal',
									gradientLength: 120
								}
							}
						}
					},
					{
						transform: [{ filter: { param: 'pts' } }],
						mark: { type: 'point' },
						encoding: {
							x: { bin: { maxbins: 10 }, field: 'IMDB Rating' },
							y: {
								bin: { maxbins: 10 },
								field: 'Rotten Tomatoes Rating'
							},
							size: {
								aggregate: 'count',
								legend: { title: 'Selected Category Count' }
							},
							color: { value: '#666' }
						}
					}
				]
			},
			{
				width: 330,
				height: 120,
				mark: { type: 'bar' },
				params: [
					{ name: 'pts', select: { type: 'point', encodings: ['x'] } }
				],
				encoding: {
					x: { field: 'Major Genre', axis: { labelAngle: -40 } },
					y: { aggregate: 'count' },
					color: {
						condition: { param: 'pts', value: 'steelblue' },
						value: 'grey'
					}
				}
			}
		],
		resolve: { legend: { color: 'independent', size: 'independent' } }
	};
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A dashboard with cross-highlighting.",
  "data": {"url": "data/movies.json"},
  "vconcat": [
    {
      "layer": [{
        "mark": "rect",
        "encoding": {
          "x": {
            "bin": {"maxbins": 10},
            "field": "IMDB Rating"
          },
          "y": {
            "bin": {"maxbins": 10},
            "field": "Rotten Tomatoes Rating"
          },
          "color": {
            "aggregate": "count",
            "legend": {
              "title": "All Movies Count",
              "direction": "horizontal",
              "gradientLength": 120
            }
          }
        }
      }, {
        "transform": [{
          "filter": {"param": "pts"}
        }],
        "mark": "point",
        "encoding": {
          "x": {
            "bin": {"maxbins": 10},
            "field": "IMDB Rating"
          },
          "y": {
            "bin": {"maxbins": 10},
            "field": "Rotten Tomatoes Rating"
          },
          "size": {
            "aggregate": "count",
            "legend": {"title": "Selected Category Count"}
          },
          "color": {
            "value": "#666"
          }
        }
      }]
    }, {
      "width": 330,
      "height": 120,
      "mark": "bar",
      "params": [{
        "name": "pts",
        "select": {"type": "point", "encodings": ["x"]}
      }],
      "encoding": {
        "x": {"field": "Major Genre", "axis": {"labelAngle": -40}},
        "y": {"aggregate": "count"},
        "color": {
          "condition": {
            "param": "pts",
            "value": "steelblue"
          },
          "value": "grey"
        }
      }
    }
  ],
  "resolve": {
    "legend": {
      "color": "independent",
      "size": "independent"
    }
  }
}
*/
