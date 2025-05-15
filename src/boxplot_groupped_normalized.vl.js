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
				`(datum[\"Acceleration\"] < datum[\"lower_box_Acceleration\"] - 1.5 * (datum[\"upper_box_Acceleration\"] - datum[\"lower_box_Acceleration\"])) || (datum[\"Acceleration\"] > datum[\"upper_box_Acceleration\"] + 1.5 * (datum[\"upper_box_Acceleration\"] - datum[\"lower_box_Acceleration\"]))`
			)
		)
		.encode(
			vl.x().fieldN('Cylinders'),
			vl.xOffset().fieldN('Origin'),
			vl.y().fieldQ('Acceleration').title('Acceleration'),
			vl.color().fieldN('Origin')
		);

	const outLayer1C2C1 = vl
		.markRule({ aria: false, style: 'boxplot-rule' })
		.encode(
			vl.x().fieldN('Cylinders'),
			vl.xOffset().fieldN('Origin'),
			vl
				.y()
				.fieldQ('lower_whisker_Acceleration')
				.title('Acceleration'),
			vl.y2().field('lower_box_Acceleration'),
			vl.tooltip([
				vl
					.tooltip()
					.fieldQ('upper_whisker_Acceleration')
					.title('Upper Whisker of Acceleration'),
				vl
					.tooltip()
					.fieldQ('lower_whisker_Acceleration')
					.title('Lower Whisker of Acceleration'),
				vl.tooltip().fieldN('Cylinders'),
				vl.tooltip().fieldN('Origin')
			])
		);

	const outLayer1C2C2 = vl
		.markRule({ aria: false, style: 'boxplot-rule' })
		.encode(
			vl.x().fieldN('Cylinders'),
			vl.xOffset().fieldN('Origin'),
			vl
				.y()
				.fieldQ('upper_box_Acceleration')
				.title('Acceleration'),
			vl.y2().field('upper_whisker_Acceleration'),
			vl.tooltip([
				vl
					.tooltip()
					.fieldQ('upper_whisker_Acceleration')
					.title('Upper Whisker of Acceleration'),
				vl
					.tooltip()
					.fieldQ('lower_whisker_Acceleration')
					.title('Lower Whisker of Acceleration'),
				vl.tooltip().fieldN('Cylinders'),
				vl.tooltip().fieldN('Origin')
			])
		);

	const outerLayer1C2 = vl
		.layer(outLayer1C2C1, outLayer1C2C2)
		.transform(
			vl.filter(
				`(datum[\"lower_box_Acceleration\"] - 1.5 * (datum[\"upper_box_Acceleration\"] - datum[\"lower_box_Acceleration\"]) <= datum[\"Acceleration\"]) && (datum[\"Acceleration\"] <= datum[\"upper_box_Acceleration\"] + 1.5 * (datum[\"upper_box_Acceleration\"] - datum[\"lower_box_Acceleration\"]))`
			),
			vl
				.aggregate(
					{
						op: 'min',
						field: 'Acceleration',
						as: 'lower_whisker_Acceleration'
					},
					{
						op: 'max',
						field: 'Acceleration',
						as: 'upper_whisker_Acceleration'
					},
					{
						op: 'min',
						field: 'lower_box_Acceleration',
						as: 'lower_box_Acceleration'
					},
					{
						op: 'max',
						field: 'upper_box_Acceleration',
						as: 'upper_box_Acceleration'
					}
				)
				.groupby(['Cylinders', 'Origin', 'Origin'])
		);

	const outerLayer1 = vl
		.layer(outerLayer1C1, outerLayer1C2)
		.transform(
			vl
				.joinaggregate(
					{
						op: 'q1',
						field: 'Acceleration',
						as: 'lower_box_Acceleration'
					},
					{
						op: 'q3',
						field: 'Acceleration',
						as: 'upper_box_Acceleration'
					}
				)
				.groupby(['Cylinders', 'Origin', 'Origin'])
		);

	const outerLayer2C1 = vl
		.markBar({
			size: 14,
			orient: 'vertical',
			ariaRoleDescription: 'box',
			style: 'boxplot-box'
		})
		.encode(
			vl.x().fieldN('Cylinders'),
			vl.xOffset().fieldN('Origin'),
			vl
				.y()
				.fieldQ('lower_box_Acceleration')
				.title('Acceleration'),
			vl.y2().field('upper_box_Acceleration'),
			vl.color().fieldN('Origin'),
			vl.tooltip([
				vl
					.tooltip()
					.fieldQ('max_Acceleration')
					.title('Max of Acceleration'),
				vl
					.tooltip()
					.fieldQ('upper_box_Acceleration')
					.title('Q3 of Acceleration'),
				vl
					.tooltip()
					.fieldQ('mid_box_Acceleration')
					.title('Median of Acceleration'),
				vl
					.tooltip()
					.fieldQ('lower_box_Acceleration')
					.title('Q1 of Acceleration'),
				vl
					.tooltip()
					.fieldQ('min_Acceleration')
					.title('Min of Acceleration'),
				vl.tooltip().fieldN('Cylinders'),
				vl.tooltip().fieldN('Origin')
			])
		);

	const outerLayer2C2 = vl
		.markTick({
			color: 'white',
			size: 14,
			orient: 'horizontal',
			aria: false,
			style: 'boxplot-median'
		})
		.encode(
			vl.x().fieldN('Cylinders'),
			vl.xOffset().fieldN('Origin'),
			vl
				.y()
				.fieldQ('mid_box_Acceleration')
				.title('Acceleration'),
			vl.tooltip([
				vl
					.tooltip()
					.fieldQ('max_Acceleration')
					.title('Max of Acceleration'),
				vl
					.tooltip()
					.fieldQ('upper_box_Acceleration')
					.title('Q3 of Acceleration'),
				vl
					.tooltip()
					.fieldQ('mid_box_Acceleration')
					.title('Median of Acceleration'),
				vl
					.tooltip()
					.fieldQ('lower_box_Acceleration')
					.title('Q1 of Acceleration'),
				vl
					.tooltip()
					.fieldQ('min_Acceleration')
					.title('Min of Acceleration'),
				vl.tooltip().fieldN('Cylinders'),
				vl.tooltip().fieldN('Origin')
			])
		);

	const outerLayer2 = vl
		.layer(outerLayer2C1, outerLayer2C2)
		.transform(
			vl
				.aggregate(
					{
						op: 'q1',
						field: 'Acceleration',
						as: 'lower_box_Acceleration'
					},
					{
						op: 'q3',
						field: 'Acceleration',
						as: 'upper_box_Acceleration'
					},
					{
						op: 'median',
						field: 'Acceleration',
						as: 'mid_box_Acceleration'
					},
					{
						op: 'min',
						field: 'Acceleration',
						as: 'min_Acceleration'
					},
					{
						op: 'max',
						field: 'Acceleration',
						as: 'max_Acceleration'
					}
				)
				.groupby(['Cylinders', 'Origin', 'Origin'])
		);

	return vl
		.layer(outerLayer1, outerLayer2)
		.data('data/cars.json')
		.description(
			'A vertical box plot showing median, min, and max body mass of penguins.'
		)
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A vertical box plot showing median, min, and max body mass of penguins.",
  "data": {"url": "data/cars.json"},
  "layer": [
    {
      "transform": [
        {
          "joinaggregate": [
            {
              "op": "q1",
              "field": "Acceleration",
              "as": "lower_box_Acceleration"
            },
            {
              "op": "q3",
              "field": "Acceleration",
              "as": "upper_box_Acceleration"
            }
          ],
          "groupby": ['Cylinders', 'Origin', 'Origin']
        }
      ],
      "layer": [
        {
          "transform": [
            {
              "filter": "(datum[\"Acceleration\"] < datum[\"lower_box_Acceleration\"] - 1.5 * (datum[\"upper_box_Acceleration\"] - datum[\"lower_box_Acceleration\"])) || (datum[\"Acceleration\"] > datum[\"upper_box_Acceleration\"] + 1.5 * (datum[\"upper_box_Acceleration\"] - datum[\"lower_box_Acceleration\"]))"
            }
          ],
          "mark": {"type": "point", "style": "boxplot-outliers"},
          "encoding": {
            "y": {
              "field": "Acceleration",
              "type": "quantitative",
              "title": "Acceleration"
            },
            "x": {"field": "Cylinders", "type": "nominal"},
            "xOffset": {"field": "Origin", "type": "nominal"},
            "color": {"field": "Origin", "type": "nominal"}
          }
        },
        {
          "transform": [
            {
              "filter": "(datum[\"lower_box_Acceleration\"] - 1.5 * (datum[\"upper_box_Acceleration\"] - datum[\"lower_box_Acceleration\"]) <= datum[\"Acceleration\"]) && (datum[\"Acceleration\"] <= datum[\"upper_box_Acceleration\"] + 1.5 * (datum[\"upper_box_Acceleration\"] - datum[\"lower_box_Acceleration\"]))"
            },
            {
              "aggregate": [
                {
                  "op": "min",
                  "field": "Acceleration",
                  "as": "lower_whisker_Acceleration"
                },
                {
                  "op": "max",
                  "field": "Acceleration",
                  "as": "upper_whisker_Acceleration"
                },
                {
                  "op": "min",
                  "field": "lower_box_Acceleration",
                  "as": "lower_box_Acceleration"
                },
                {
                  "op": "max",
                  "field": "upper_box_Acceleration",
                  "as": "upper_box_Acceleration"
                }
              ],
              "groupby": ['Cylinders', 'Origin', 'Origin']
            }
          ],
          "layer": [
            {
              "mark": {"type": "rule", "aria": false, "style": "boxplot-rule"},
              "encoding": {
                "y": {
                  "field": "lower_whisker_Acceleration",
                  "type": "quantitative",
                  "title": "Acceleration"
                },
                "y2": {"field": "lower_box_Acceleration"},
                "x": {"field": "Cylinders", "type": "nominal"},
                "xOffset": {"field": "Origin", "type": "nominal"},
                "tooltip": [
                  {
                    "field": "upper_whisker_Acceleration",
                    "type": "quantitative",
                    "title": "Upper Whisker of Acceleration"
                  },
                  {
                    "field": "lower_whisker_Acceleration",
                    "type": "quantitative",
                    "title": "Lower Whisker of Acceleration"
                  },
                  {"field": "Cylinders", "type": "nominal"},
                  {"field": "Origin", "type": "nominal"}
                ]
              }
            },
            {
              "mark": {"type": "rule", "aria": false, "style": "boxplot-rule"},
              "encoding": {
                "y": {
                  "field": "upper_box_Acceleration",
                  "type": "quantitative",
                  "title": "Acceleration"
                },
                "y2": {"field": "upper_whisker_Acceleration"},
                "x": {"field": "Cylinders", "type": "nominal"},
                "xOffset": {"field": "Origin", "type": "nominal"},
                "tooltip": [
                  {
                    "field": "upper_whisker_Acceleration",
                    "type": "quantitative",
                    "title": "Upper Whisker of Acceleration"
                  },
                  {
                    "field": "lower_whisker_Acceleration",
                    "type": "quantitative",
                    "title": "Lower Whisker of Acceleration"
                  },
                  {"field": "Cylinders", "type": "nominal"},
                  {"field": "Origin", "type": "nominal"}
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
              "field": "Acceleration",
              "as": "lower_box_Acceleration"
            },
            {
              "op": "q3",
              "field": "Acceleration",
              "as": "upper_box_Acceleration"
            },
            {
              "op": "median",
              "field": "Acceleration",
              "as": "mid_box_Acceleration"
            },
            {"op": "min", "field": "Acceleration", "as": "min_Acceleration"},
            {"op": "max", "field": "Acceleration", "as": "max_Acceleration"}
          ],
          "groupby": ['Cylinders', 'Origin', 'Origin']
        }
      ],
      "layer": [
        {
          "mark": {
            "type": "bar",
            "size": 14,
            "orient": "vertical",
            "ariaRoleDescription": "box",
            "style": "boxplot-box"
          },
          "encoding": {
            "y": {
              "field": "lower_box_Acceleration",
              "type": "quantitative",
              "title": "Acceleration"
            },
            "y2": {"field": "upper_box_Acceleration"},
            "x": {"field": "Cylinders", "type": "nominal"},
            "color": {"field": "Origin", "type": "nominal"},
            "xOffset": {"field": "Origin", "type": "nominal"},
            "tooltip": [
              {
                "field": "max_Acceleration",
                "type": "quantitative",
                "title": "Max of Acceleration"
              },
              {
                "field": "upper_box_Acceleration",
                "type": "quantitative",
                "title": "Q3 of Acceleration"
              },
              {
                "field": "mid_box_Acceleration",
                "type": "quantitative",
                "title": "Median of Acceleration"
              },
              {
                "field": "lower_box_Acceleration",
                "type": "quantitative",
                "title": "Q1 of Acceleration"
              },
              {
                "field": "min_Acceleration",
                "type": "quantitative",
                "title": "Min of Acceleration"
              },
              {"field": "Cylinders", "type": "nominal"},
              {"field": "Origin", "type": "nominal"}
            ]
          }
        },
        {
          "mark": {
            "color": "white",
            "type": "tick",
            "size": 14,
            "orient": "horizontal",
            "aria": false,
            "style": "boxplot-median"
          },
          "encoding": {
            "y": {
              "field": "mid_box_Acceleration",
              "type": "quantitative",
              "title": "Acceleration"
            },
            "x": {"field": "Cylinders", "type": "nominal"},
            "xOffset": {"field": "Origin", "type": "nominal"},
            "tooltip": [
              {
                "field": "max_Acceleration",
                "type": "quantitative",
                "title": "Max of Acceleration"
              },
              {
                "field": "upper_box_Acceleration",
                "type": "quantitative",
                "title": "Q3 of Acceleration"
              },
              {
                "field": "mid_box_Acceleration",
                "type": "quantitative",
                "title": "Median of Acceleration"
              },
              {
                "field": "lower_box_Acceleration",
                "type": "quantitative",
                "title": "Q1 of Acceleration"
              },
              {
                "field": "min_Acceleration",
                "type": "quantitative",
                "title": "Min of Acceleration"
              },
              {"field": "Cylinders", "type": "nominal"},
              {"field": "Origin", "type": "nominal"}
            ]
          }
        }
      ]
    }
  ]
}
*/
