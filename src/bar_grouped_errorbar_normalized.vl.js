import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */
export default function chart () {
  const layer1 = vl
    .markBar()
    .encode(
      vl.x().fieldN('Cylinders'),
      vl.xOffset().fieldN('Origin'),
      vl.y().fieldQ('Acceleration').aggregate('mean'),
      vl.color().fieldN('Origin')
    );

  const layer2 = vl
  .markRule({
    ariaRoleDescription: 'errorbar',
    style: 'errorbar-rule'
  })
  .transform([
    {
      aggregate: [
        {
          op: 'stderr',
          field: 'Acceleration',
          as: 'extent_Acceleration'
        },
        { op: 'mean', field: 'Acceleration', as: 'center_Acceleration' }
      ],
      groupby: ['Cylinders', 'Origin']
    },
    {
      calculate: 'datum["center_Acceleration"] + datum["extent_Acceleration"]',
      as: 'upper_Acceleration'
    },
    {
      calculate: 'datum["center_Acceleration"] - datum["extent_Acceleration"]',
      as: 'lower_Acceleration'
    }
  ])
  .encode(
    vl.y().fieldQ('lower_Acceleration').title('Acceleration'),
    vl.y2().field('upper_Acceleration'),
    vl.x().fieldN('Cylinders'),
    vl.xOffset().fieldN('Origin'),
    vl.tooltip([
      vl.tooltip().fieldQ('center_Acceleration').title('Mean of Acceleration') /*.title('Mean of Acceleration')*/,
      vl.tooltip().fieldQ('upper_Acceleration').title('Mean + stderr of Acceleration') /*.title('Mean + stderr of Acceleration')*/,
      vl.tooltip().fieldQ('lower_Acceleration').title('Mean - stderr of Acceleration') /*.title('Mean - stderr of Acceleration')*/,
      vl.tooltip().fieldN('Cylinders'),
      vl.tooltip().fieldN('Origin')
    ])
  );

	return vl
		.data('data/cars.json')
		.description('A vertical box plot showing median, min, and max body mass of penguins.')
		.layer(layer1, layer2)
		.toSpec();
}
/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A vertical box plot showing median, min, and max body mass of penguins.",
  "data": {"url": "data/cars.json"},
  "layer": [
    {
      "mark": "bar",
      "encoding": {
        "x": {"field": "Cylinders", "type": "nominal"},
        "xOffset": {"field": "Origin", "type": "nominal"},
        "y": {
          "aggregate": "mean",
          "field": "Acceleration",
          "type": "quantitative"
        },
        "color": {"field": "Origin", "type": "nominal"}
      }
    },
    {
      "transform": [
        {
          "aggregate": [
            {
              "op": "stderr",
              "field": "Acceleration",
              "as": "extent_Acceleration"
            },
            {"op": "mean", "field": "Acceleration", "as": "center_Acceleration"}
          ],
          "groupby": ["Cylinders", "Origin"]
        },
        {
          "calculate": "datum[\"center_Acceleration\"] + datum[\"extent_Acceleration\"]",
          "as": "upper_Acceleration"
        },
        {
          "calculate": "datum[\"center_Acceleration\"] - datum[\"extent_Acceleration\"]",
          "as": "lower_Acceleration"
        }
      ],
      "mark": {
        "type": "rule",
        "ariaRoleDescription": "errorbar",
        "style": "errorbar-rule"
      },
      "encoding": {
        "y": {
          "field": "lower_Acceleration",
          "type": "quantitative",
          "title": "Acceleration"
        },
        "y2": {"field": "upper_Acceleration"},
        "x": {"field": "Cylinders", "type": "nominal"},
        "xOffset": {"field": "Origin", "type": "nominal"},
        "tooltip": [
          {
            "field": "center_Acceleration",
            "type": "quantitative",
            "title": "Mean of Acceleration"
          },
          {
            "field": "upper_Acceleration",
            "type": "quantitative",
            "title": "Mean + stderr of Acceleration"
          },
          {
            "field": "lower_Acceleration",
            "type": "quantitative",
            "title": "Mean - stderr of Acceleration"
          },
          {"field": "Cylinders", "type": "nominal"},
          {"field": "Origin", "type": "nominal"}
        ]
      }
    }
  ]
}
*/
