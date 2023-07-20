import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
  const layer1 = vl
    .markRule({aria: false, style: 'boxplot-rule'})
    .encode(
      vl.x().fieldQ('lower_whisker_Body Mass (g)')
        .title('Body Mass (g)').scale({zero: false}),
      vl.x2().field('lower_box_Body Mass (g)'),
      vl.y().fieldN('Species'),
      vl.tooltip([
        vl.tooltip().fieldQ('upper_whisker_Body Mass (g)')
          .title('Max of Body Mass (g)'),
        vl.tooltip().fieldQ('upper_box_Body Mass (g)')
          .title('Q3 of Body Mass (g)'),
        vl.tooltip().fieldQ('mid_box_Body Mass (g)')
          .title('Median of Body Mass (g)'),
        vl.tooltip().fieldQ('lower_box_Body Mass (g)')
          .title('Q1 of Body Mass (g)'),
        vl.tooltip().fieldQ('lower_whisker_Body Mass (g)')
          .title('Min of Body Mass (g)'),
        vl.tooltip().fieldN('Species'),
      ])
    );

  const layer2 = vl
    .markRule({aria: false, style: 'boxplot-rule'})
    .encode(
      vl.x().fieldQ('upper_box_Body Mass (g)')
        .title('Body Mass (g)').scale({zero: false}),
      vl.x2().field('upper_whisker_Body Mass (g)'),
      vl.y().fieldN('Species'),
      vl.tooltip([
        vl.tooltip().fieldQ('upper_whisker_Body Mass (g)')
          .title('Max of Body Mass (g)'),
        vl.tooltip().fieldQ('upper_box_Body Mass (g)')
          .title('Q3 of Body Mass (g)'),
        vl.tooltip().fieldQ('mid_box_Body Mass (g)')
          .title('Median of Body Mass (g)'),
        vl.tooltip().fieldQ('lower_box_Body Mass (g)')
          .title('Q1 of Body Mass (g)'),
        vl.tooltip().fieldQ('lower_whisker_Body Mass (g)')
          .title('Min of Body Mass (g)'),
        vl.tooltip().fieldN('Species'),
      ])
    );

  const layer3 = vl
    .markBar({
      size: 14,
      orient: 'horizontal',
      ariaRoleDescription: 'box',
      style: 'boxplot-box',
    })
    .encode(
      vl.x().fieldQ('lower_box_Body Mass (g)')
        .title('Body Mass (g)').scale({zero: false}),
      vl.x2().field('upper_box_Body Mass (g)'),
      vl.y().fieldN('Species'),
      vl.tooltip([
        vl.tooltip().fieldQ('upper_whisker_Body Mass (g)')
          .title('Max of Body Mass (g)'),
        vl.tooltip().fieldQ('upper_box_Body Mass (g)')
          .title('Q3 of Body Mass (g)'),
        vl.tooltip().fieldQ('mid_box_Body Mass (g)')
          .title('Median of Body Mass (g)'),
        vl.tooltip().fieldQ('lower_box_Body Mass (g)')
          .title('Q1 of Body Mass (g)'),
        vl.tooltip().fieldQ('lower_whisker_Body Mass (g)')
          .title('Min of Body Mass (g)'),
        vl.tooltip().fieldN('Species'),
      ])
    );

  const layer4 = vl
    .markTick({
      color: 'orange',
      size: 14,
      orient: 'vertical',
      aria: false,
      style: 'boxplot-median',
    })
    .encode(
      vl.x().fieldQ('mid_box_Body Mass (g)')
        .title('Body Mass (g)').scale({zero: false}),
      vl.y().fieldN('Species'),
      vl.tooltip([
        vl.tooltip().fieldQ('upper_whisker_Body Mass (g)')
          .title('Max of Body Mass (g)'),
        vl.tooltip().fieldQ('upper_box_Body Mass (g)')
          .title('Q3 of Body Mass (g)'),
        vl.tooltip().fieldQ('mid_box_Body Mass (g)')
          .title('Median of Body Mass (g)'),
        vl.tooltip().fieldQ('lower_box_Body Mass (g)')
          .title('Q1 of Body Mass (g)'),
        vl.tooltip().fieldQ('lower_whisker_Body Mass (g)')
          .title('Min of Body Mass (g)'),
        vl.tooltip().fieldN('Species'),
      ])
    );

  return vl
    .layer(layer1, layer2, layer3, layer4)
    .data('data/penguins.json')
    .description('A horizontal box plot showing median, min, and max body mass of penguins.')
    .transform(
      vl.aggregate(
        {op: 'q1', field: 'Body Mass (g)', as: 'lower_box_Body Mass (g)'},
        {op: 'q3', field: 'Body Mass (g)', as: 'upper_box_Body Mass (g)'},
        {op: 'median', field: 'Body Mass (g)', as: 'mid_box_Body Mass (g)'},
        {op: 'min', field: 'Body Mass (g)', as: 'lower_whisker_Body Mass (g)'},
        {op: 'max', field: 'Body Mass (g)', as: 'upper_whisker_Body Mass (g)'},
      ).groupby('Species')
    )
    .config({boxplot: {median: {color: 'orange' }}})
    .toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A horizontal box plot showing median, min, and max body mass of penguins.",
  "data": {"url": "data/penguins.json"},
  "config": {"boxplot": {"median": {"color": "orange"}}},
  "transform": [
    {
      "aggregate": [
        {"op": "q1", "field": "Body Mass (g)", "as": "lower_box_Body Mass (g)"},
        {"op": "q3", "field": "Body Mass (g)", "as": "upper_box_Body Mass (g)"},
        {
          "op": "median",
          "field": "Body Mass (g)",
          "as": "mid_box_Body Mass (g)"
        },
        {
          "op": "min",
          "field": "Body Mass (g)",
          "as": "lower_whisker_Body Mass (g)"
        },
        {
          "op": "max",
          "field": "Body Mass (g)",
          "as": "upper_whisker_Body Mass (g)"
        }
      ],
      "groupby": ["Species"]
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
        "y": {"field": "Species", "type": "nominal"},
        "tooltip": [
          {
            "field": "upper_whisker_Body Mass (g)",
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
            "field": "lower_whisker_Body Mass (g)",
            "type": "quantitative",
            "title": "Min of Body Mass (g)"
          },
          {"field": "Species", "type": "nominal"}
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
        "y": {"field": "Species", "type": "nominal"},
        "tooltip": [
          {
            "field": "upper_whisker_Body Mass (g)",
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
            "field": "lower_whisker_Body Mass (g)",
            "type": "quantitative",
            "title": "Min of Body Mass (g)"
          },
          {"field": "Species", "type": "nominal"}
        ]
      }
    },
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
        "tooltip": [
          {
            "field": "upper_whisker_Body Mass (g)",
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
            "field": "lower_whisker_Body Mass (g)",
            "type": "quantitative",
            "title": "Min of Body Mass (g)"
          },
          {"field": "Species", "type": "nominal"}
        ]
      }
    },
    {
      "mark": {
        "color": "orange",
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
        "tooltip": [
          {
            "field": "upper_whisker_Body Mass (g)",
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
            "field": "lower_whisker_Body Mass (g)",
            "type": "quantitative",
            "title": "Min of Body Mass (g)"
          },
          {"field": "Species", "type": "nominal"}
        ]
      }
    }
  ]
}
*/
