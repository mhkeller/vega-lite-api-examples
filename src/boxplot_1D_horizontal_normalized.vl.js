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
				.scale({ zero: false })
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
			vl.tooltip([
				vl
					.tooltip()
					.fieldQ('upper_whisker_Body Mass (g)')
					.title('Upper Whisker of Body Mass (g)'),
				vl
					.tooltip()
					.fieldQ('lower_whisker_Body Mass (g)')
					.title('Lower Whisker of Body Mass (g)')
			])
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
			vl.tooltip([
				vl
					.tooltip()
					.fieldQ('upper_whisker_Body Mass (g)')
					.title('Upper Whisker of Body Mass (g)'),
				vl
					.tooltip()
					.fieldQ('lower_whisker_Body Mass (g)')
					.title('Lower Whisker of Body Mass (g)')
			])
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
					}
				)
				.groupby([])
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
				.groupby([])
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
			vl.tooltip([
				vl
					.tooltip()
					.fieldQ('max_Body Mass (g)')
					.title('Max of Body Mass (g)'),
				vl
					.tooltip()
					.fieldQ('upper_box_Body Mass (g)')
					.title('Q3 of Body Mass (g)'),
				vl
					.tooltip()
					.fieldQ('mid_box_Body Mass (g)')
					.title('Median of Body Mass (g)'),
				vl
					.tooltip()
					.fieldQ('lower_box_Body Mass (g)')
					.title('Q1 of Body Mass (g)'),
				vl
					.tooltip()
					.fieldQ('min_Body Mass (g)')
					.title('Min of Body Mass (g)')
			])
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
			vl.tooltip([
				vl
					.tooltip()
					.fieldQ('max_Body Mass (g)')
					.title('Max of Body Mass (g)'),
				vl
					.tooltip()
					.fieldQ('upper_box_Body Mass (g)')
					.title('Q3 of Body Mass (g)'),
				vl
					.tooltip()
					.fieldQ('mid_box_Body Mass (g)')
					.title('Median of Body Mass (g)'),
				vl
					.tooltip()
					.fieldQ('lower_box_Body Mass (g)')
					.title('Q1 of Body Mass (g)'),
				vl
					.tooltip()
					.fieldQ('min_Body Mass (g)')
					.title('Min of Body Mass (g)')
			])
		);

	const outerLayer2 = vl
		.layer(outerLayer2C1, outerLayer2C2)
		.transform(
			vl
				.aggregate(
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
				.groupby([])
		);

	return vl
		.layer(outerLayer1, outerLayer2)
		.data('data/penguins.json')
		.description(
			'A horizontal box plot showing median and lower and upper quartiles of the distribution of body mass of penguins.'
		)
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A horizontal box plot showing median and lower and upper quartiles of the distribution of body mass of penguins.",
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
          "groupby": []
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
            }
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
                }
              ],
              "groupby": []
            }
          ],
          "layer": [
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
                "tooltip": [
                  {
                    "field": "upper_whisker_Body Mass (g)",
                    "type": "quantitative",
                    "title": "Upper Whisker of Body Mass (g)"
                  },
                  {
                    "field": "lower_whisker_Body Mass (g)",
                    "type": "quantitative",
                    "title": "Lower Whisker of Body Mass (g)"
                  }
                ]
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
                "tooltip": [
                  {
                    "field": "upper_whisker_Body Mass (g)",
                    "type": "quantitative",
                    "title": "Upper Whisker of Body Mass (g)"
                  },
                  {
                    "field": "lower_whisker_Body Mass (g)",
                    "type": "quantitative",
                    "title": "Lower Whisker of Body Mass (g)"
                  }
                ]
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
          "groupby": []
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
            "tooltip": [
              {
                "field": "max_Body Mass (g)",
                "type": "quantitative",
                "title": "Max of Body Mass (g)"
              },
              {
                "field": "upper_box_Body Mass (g)",
                "type": "quantitative",
                "title": "Q3 of Body Mass (g)"
              },
              {
                "field": "mid_box_Body Mass (g)",
                "type": "quantitative",
                "title": "Median of Body Mass (g)"
              },
              {
                "field": "lower_box_Body Mass (g)",
                "type": "quantitative",
                "title": "Q1 of Body Mass (g)"
              },
              {
                "field": "min_Body Mass (g)",
                "type": "quantitative",
                "title": "Min of Body Mass (g)"
              }
            ]
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
            "tooltip": [
              {
                "field": "max_Body Mass (g)",
                "type": "quantitative",
                "title": "Max of Body Mass (g)"
              },
              {
                "field": "upper_box_Body Mass (g)",
                "type": "quantitative",
                "title": "Q3 of Body Mass (g)"
              },
              {
                "field": "mid_box_Body Mass (g)",
                "type": "quantitative",
                "title": "Median of Body Mass (g)"
              },
              {
                "field": "lower_box_Body Mass (g)",
                "type": "quantitative",
                "title": "Q1 of Body Mass (g)"
              },
              {
                "field": "min_Body Mass (g)",
                "type": "quantitative",
                "title": "Min of Body Mass (g)"
              }
            ]
          }
        }
      ]
    }
  ]
}
*/
