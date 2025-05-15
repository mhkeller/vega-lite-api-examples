import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
	const outerLayer1C1 = vl
		.markPoint({ style: 'boxplot-outliers' })
		.transform(
			vl.filter(
				`(datum[\"Body Mass (g)\"] < datum[\"lower_box_Body Mass (g)\"] - 1.5 * (datum[\"upper_box_Body Mass (g)\"] - datum[\"lower_box_Body Mass (g)\"])) || (datum[\"Body Mass (g)\"] > datum[\"upper_box_Body Mass (g)\"] + 1.5 * (datum[\"upper_box_Body Mass (g)\"] - datum[\"lower_box_Body Mass (g)\"]))`
			)
		)
		.encode(
			vl
				.x()
				.fieldQ('Body Mass (g)')
				.title('Body Mass (g)')
				.scale({ zero: false }),
			vl.y().fieldN('Species')
		);

	const outLayer1C2C1 = vl
		.markRule({ aria: false, style: 'boxplot-rule' })
		.encode(
			vl
				.x()
				.fieldQ('lower_whisker_Body Mass (g)')
				.title('Body Mass (g)')
				.scale({ zero: false }),
			vl.x2().field('lower_box_Body Mass (g)'),
			vl.y().fieldN('Species'),
			vl
				.tooltip()
				.fieldQ('mean_Body Mass (g)')
				.title('Mean of Body Mass (g)')
		);

	const outLayer1C2C2 = vl
		.markRule({ aria: false, style: 'boxplot-rule' })
		.encode(
			vl
				.x()
				.fieldQ('upper_box_Body Mass (g)')
				.title('Body Mass (g)')
				.scale({ zero: false }),
			vl.x2().field('upper_whisker_Body Mass (g)'),
			vl.y().fieldN('Species'),
			vl
				.tooltip()
				.fieldQ('mean_Body Mass (g)')
				.title('Mean of Body Mass (g)')
		);

	const outerLayer1C2 = vl
		.layer(outLayer1C2C1, outLayer1C2C2)
		.transform(
			vl.filter(
				`(datum[\"lower_box_Body Mass (g)\"] - 1.5 * (datum[\"upper_box_Body Mass (g)\"] - datum[\"lower_box_Body Mass (g)\"]) <= datum[\"Body Mass (g)\"]) && (datum[\"Body Mass (g)\"] <= datum[\"upper_box_Body Mass (g)\"] + 1.5 * (datum[\"upper_box_Body Mass (g)\"] - datum[\"lower_box_Body Mass (g)\"]))`
			),
			vl
				.aggregate(
					{
						op: 'min',
						field: 'Body Mass (g)',
						as: 'lower_whisker_Body Mass (g)'
					},
					{
						op: 'max',
						field: 'Body Mass (g)',
						as: 'upper_whisker_Body Mass (g)'
					},
					{
						op: 'min',
						field: 'lower_box_Body Mass (g)',
						as: 'lower_box_Body Mass (g)'
					},
					{
						op: 'max',
						field: 'upper_box_Body Mass (g)',
						as: 'upper_box_Body Mass (g)'
					},
					{
						op: 'mean',
						field: 'Body Mass (g)',
						as: 'mean_Body Mass (g)'
					}
				)
				.groupby(['Species'])
		);

	const outerLayer1 = vl
		.layer(outerLayer1C1, outerLayer1C2)
		.transform(
			vl
				.joinaggregate(
					{
						op: 'q1',
						field: 'Body Mass (g)',
						as: 'lower_box_Body Mass (g)'
					},
					{
						op: 'q3',
						field: 'Body Mass (g)',
						as: 'upper_box_Body Mass (g)'
					}
				)
				.groupby(['Species'])
		);

	const outerLayer2C1 = vl
		.markBar({
			size: 14,
			orient: 'horizontal',
			ariaRoleDescription: 'box',
			style: 'boxplot-box'
		})
		.encode(
			vl
				.x()
				.fieldQ('lower_box_Body Mass (g)')
				.title('Body Mass (g)')
				.scale({ zero: false }),
			vl.x2().field('upper_box_Body Mass (g)'),
			vl.y().fieldN('Species'),
			vl
				.tooltip()
				.fieldQ('mean_Body Mass (g)')
				.title('Mean of Body Mass (g)')
		);

	const outerLayer2C2 = vl
		.markTick({
			color: 'white',
			size: 14,
			orient: 'vertical',
			aria: false,
			style: 'boxplot-median'
		})
		.encode(
			vl
				.x()
				.fieldQ('mid_box_Body Mass (g)')
				.title('Body Mass (g)')
				.scale({ zero: false }),
			vl.y().fieldN('Species'),
			vl
				.tooltip()
				.fieldQ('mean_Body Mass (g)')
				.title('Mean of Body Mass (g)')
		);

	const outerLayer2 = vl
		.layer(outerLayer2C1, outerLayer2C2)
		.transform(
			vl
				.aggregate(
					{
						op: 'mean',
						field: 'Body Mass (g)',
						as: 'mean_Body Mass (g)'
					},
					{
						op: 'q1',
						field: 'Body Mass (g)',
						as: 'lower_box_Body Mass (g)'
					},
					{
						op: 'q3',
						field: 'Body Mass (g)',
						as: 'upper_box_Body Mass (g)'
					},
					{
						op: 'median',
						field: 'Body Mass (g)',
						as: 'mid_box_Body Mass (g)'
					},
					{
						op: 'min',
						field: 'Body Mass (g)',
						as: 'min_Body Mass (g)'
					},
					{
						op: 'max',
						field: 'Body Mass (g)',
						as: 'max_Body Mass (g)'
					}
				)
				.groupby(['Species'])
		);

	return vl
		.layer(outerLayer1, outerLayer2)
		.data('data/penguins.json')
		.description(
			'A horizontal box plot showing median and lower and upper quartiles of the distribution of body mass of penguins. The tooltip shows the mean mass.'
		)
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A horizontal box plot showing median and lower and upper quartiles of the distribution of body mass of penguins. The tooltip shows the mean mass.",
  "data": {"url": "data/penguins.json"},
  "layer": [
    {
      "transform": [
        {
          "joinaggregate": [
            {
              "op": "q1",
              "field": "Body Mass (g)",
              "as": "lower_box_Body Mass (g)"
            },
            {
              "op": "q3",
              "field": "Body Mass (g)",
              "as": "upper_box_Body Mass (g)"
            }
          ],
          "groupby": ["Species"]
        }
      ],
      "layer": [
        {
          "transform": [
            {
              "filter": "(datum[\"Body Mass (g)\"] < datum[\"lower_box_Body Mass (g)\"] - 1.5 * (datum[\"upper_box_Body Mass (g)\"] - datum[\"lower_box_Body Mass (g)\"])) || (datum[\"Body Mass (g)\"] > datum[\"upper_box_Body Mass (g)\"] + 1.5 * (datum[\"upper_box_Body Mass (g)\"] - datum[\"lower_box_Body Mass (g)\"]))"
            }
          ],
          "mark": {"type": "point", "style": "boxplot-outliers"},
          "encoding": {
            "x": {
              "field": "Body Mass (g)",
              "type": "quantitative",
              "title": "Body Mass (g)",
              "scale": {"zero": false}
            },
            "y": {"field": "Species", "type": "nominal"}
          }
        },
        {
          "transform": [
            {
              "filter": "(datum[\"lower_box_Body Mass (g)\"] - 1.5 * (datum[\"upper_box_Body Mass (g)\"] - datum[\"lower_box_Body Mass (g)\"]) <= datum[\"Body Mass (g)\"]) && (datum[\"Body Mass (g)\"] <= datum[\"upper_box_Body Mass (g)\"] + 1.5 * (datum[\"upper_box_Body Mass (g)\"] - datum[\"lower_box_Body Mass (g)\"]))"
            },
            {
              "aggregate": [
                {
                  "op": "min",
                  "field": "Body Mass (g)",
                  "as": "lower_whisker_Body Mass (g)"
                },
                {
                  "op": "max",
                  "field": "Body Mass (g)",
                  "as": "upper_whisker_Body Mass (g)"
                },
                {
                  "op": "min",
                  "field": "lower_box_Body Mass (g)",
                  "as": "lower_box_Body Mass (g)"
                },
                {
                  "op": "max",
                  "field": "upper_box_Body Mass (g)",
                  "as": "upper_box_Body Mass (g)"
                },
                {
                  "op": "mean",
                  "as": "mean_Body Mass (g)",
                  "field": "Body Mass (g)"
                }
              ],
              "groupby": ["Species"]
            }
          ],
          "layer": [
            // todo
            {
              "mark": {"type": "rule", "aria": false, "style": "boxplot-rule"},
              "encoding": {
                "x": {
                  "field": "lower_whisker_Body Mass (g)",
                  "type": "quantitative",
                  "title": "Body Mass (g)",
                  "scale": {"zero": false}
                },
                "x2": {"field": "lower_box_Body Mass (g)"},
                "y": {"field": "Species", "type": "nominal"},
                "tooltip": {
                  "title": "Mean of Body Mass (g)",
                  "type": "quantitative",
                  "field": "mean_Body Mass (g)"
                }
              }
            },
            {
              "mark": {"type": "rule", "aria": false, "style": "boxplot-rule"},
              "encoding": {
                "x": {
                  "field": "upper_box_Body Mass (g)",
                  "type": "quantitative",
                  "title": "Body Mass (g)",
                  "scale": {"zero": false}
                },
                "x2": {"field": "upper_whisker_Body Mass (g)"},
                "y": {"field": "Species", "type": "nominal"},
                "tooltip": {
                  "title": "Mean of Body Mass (g)",
                  "type": "quantitative",
                  "field": "mean_Body Mass (g)"
                }
              }
            }
          ]
        }
      ]
    },
    {
      "transform": [
        {
          "aggregate": [
            {
              "op": "mean",
              "as": "mean_Body Mass (g)",
              "field": "Body Mass (g)"
            },
            {
              "op": "q1",
              "field": "Body Mass (g)",
              "as": "lower_box_Body Mass (g)"
            },
            {
              "op": "q3",
              "field": "Body Mass (g)",
              "as": "upper_box_Body Mass (g)"
            },
            {
              "op": "median",
              "field": "Body Mass (g)",
              "as": "mid_box_Body Mass (g)"
            },
            {"op": "min", "field": "Body Mass (g)", "as": "min_Body Mass (g)"},
            {"op": "max", "field": "Body Mass (g)", "as": "max_Body Mass (g)"}
          ],
          "groupby": ["Species"]
        }
      ],
      "layer": [
        {
          "mark": {
            "type": "bar",
            "size": 14,
            "orient": "horizontal",
            "ariaRoleDescription": "box",
            "style": "boxplot-box"
          },
          "encoding": {
            "x": {
              "field": "lower_box_Body Mass (g)",
              "type": "quantitative",
              "title": "Body Mass (g)",
              "scale": {"zero": false}
            },
            "x2": {"field": "upper_box_Body Mass (g)"},
            "y": {"field": "Species", "type": "nominal"},
            "tooltip": {
              "title": "Mean of Body Mass (g)",
              "type": "quantitative",
              "field": "mean_Body Mass (g)"
            }
          }
        },
        {
          "mark": {
            "color": "white",
            "type": "tick",
            "size": 14,
            "orient": "vertical",
            "aria": false,
            "style": "boxplot-median"
          },
          "encoding": {
            "x": {
              "field": "mid_box_Body Mass (g)",
              "type": "quantitative",
              "title": "Body Mass (g)",
              "scale": {"zero": false}
            },
            "y": {"field": "Species", "type": "nominal"},
            "tooltip": {
              "title": "Mean of Body Mass (g)",
              "type": "quantitative",
              "field": "mean_Body Mass (g)"
            }
          }
        }
      ]
    }
  ]
}
*/
