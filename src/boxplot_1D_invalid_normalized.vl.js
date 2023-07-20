import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
  const outerLayer1C1 = vl
    .markPoint({style: 'boxplot-outliers'})
    .transform(
      vl.filter(
        `(datum[\"b\"] < datum[\"lower_box_b\"] - 1.5 * (datum[\"upper_box_b\"] - datum[\"lower_box_b\"])) || (datum[\"b\"] > datum[\"upper_box_b\"] + 1.5 * (datum[\"upper_box_b\"] - datum[\"lower_box_b\"]))`
      )
    )
    .encode(
      vl.x().fieldQ('a').axis({labelAngle: 0}),
      vl.y().fieldQ('b').title('b'),
    );

  const outLayer1C2C1 = vl
    .markRule({
      invalid: 'filter',
      aria: false,
      style: 'boxplot-rule',
    })
    .encode(
      vl.x().fieldQ('a').axis({labelAngle: 0}),
      vl.y().fieldQ('lower_whisker_b').title('b'),
      vl.y2().field('lower_box_b'),
      vl.tooltip([
        vl.tooltip().fieldQ('upper_whisker_b')
          .title('Upper Whisker of b'),
        vl.tooltip().fieldQ('lower_whisker_b')
          .title('Lower Whisker of b'),
        vl.tooltip().fieldQ('a')
      ])
    );

  const outLayer1C2C2 = vl
    .markRule({
      invalid: 'filter',
      aria: false,
      style: 'boxplot-rule',
    })
    .encode(
      vl.x().fieldQ('a').axis({labelAngle: 0}),
      vl.y().fieldQ('upper_box_b').title('b'),
      vl.y2().field('upper_whisker_b'),
      vl.tooltip([
        vl.tooltip().fieldQ('upper_whisker_b')
          .title('Upper Whisker of b'),
        vl.tooltip().fieldQ('lower_whisker_b')
          .title('Lower Whisker of b'),
        vl.tooltip().fieldQ('a')
      ])
    );

  const outerLayer1C2 = vl
    .layer(outLayer1C2C1, outLayer1C2C2)
    .transform(
      vl.filter(
        `(datum[\"lower_box_b\"] - 1.5 * (datum[\"upper_box_b\"] - datum[\"lower_box_b\"]) <= datum[\"b\"]) && (datum[\"b\"] <= datum[\"upper_box_b\"] + 1.5 * (datum[\"upper_box_b\"] - datum[\"lower_box_b\"]))`
      ),
      vl.aggregate(
        {op: 'min', field: 'b', as: 'lower_whisker_b'},
        {op: 'max', field: 'b', as: 'upper_whisker_b'},
        {op: 'min', field: 'lower_box_b', as: 'lower_box_b'},
        {op: 'max', field: 'upper_box_b', as: 'upper_box_b'},
      ).groupby(['a'])
    );

  const outerLayer1 = vl
    .layer(outerLayer1C1, outerLayer1C2)
    .transform(
      vl.joinaggregate(
        {op: 'q1', field: 'b', as: 'lower_box_b'},
        {op: 'q3', field: 'b', as: 'upper_box_b'},
      ).groupby(['a'])
    );
  
  const outerLayer2C1 = vl
    .markBar({
      size: 14,
      orient: 'vertical',
      invalid: 'filter',
      ariaRoleDescription: 'box',
      style: 'boxplot-box',
    })
    .encode(
      vl.x().fieldQ('a').axis({labelAngle: 0}),
      vl.y().fieldQ('lower_box_b').title('b'),
      vl.y2().field('upper_box_b'),
      vl.tooltip([
        vl.tooltip().fieldQ('max_b').title('Max of b'),
        vl.tooltip().fieldQ('upper_box_b').title('Q3 of b'),
        vl.tooltip().fieldQ('mid_box_b').title('Median of b'),
        vl.tooltip().fieldQ('lower_box_b').title('Q1 of b'),
        vl.tooltip().fieldQ('min_b').title('Min of b'),
        vl.tooltip().fieldQ('a')
      ])
    );

  const outerLayer2C2 = vl
    .markTick({
      color: 'white',
      type: 'tick',
      invalid: 'filter',
      size: 14,
      orient: 'horizontal',
      aria: false,
      style: 'boxplot-median',
    })
    .encode(
      vl.x().fieldQ('a').axis({labelAngle: 0}),
      vl.y().fieldQ('mid_box_b').title('b'),
      vl.tooltip([
        vl.tooltip().fieldQ('max_b').title('Max of b'),
        vl.tooltip().fieldQ('upper_box_b').title('Q3 of b'),
        vl.tooltip().fieldQ('mid_box_b').title('Median of b'),
        vl.tooltip().fieldQ('lower_box_b').title('Q1 of b'),
        vl.tooltip().fieldQ('min_b').title('Min of b'),
        vl.tooltip().fieldQ('a')
      ])
    );
    
  const outerLayer2 = vl
    .layer(outerLayer2C1, outerLayer2C2)
    .transform(
      vl.aggregate(
        {op: 'q1', field: 'b', as: 'lower_box_b'},
        {op: 'q3', field: 'b', as: 'upper_box_b'},
        {op: 'median', field: 'b', as: 'mid_box_b'},
        {op: 'min', field: 'b', as: 'min_b'},
        {op: 'max', field: 'b', as: 'max_b'},
      ).groupby(['a'])
    );

  return vl
    .layer(outerLayer1, outerLayer2)
    .data({
      values: [
        {a: 'null', b: 28},
        {a: 33, b: 55},
        {a: 33, b: 43},
        {a: 'null', b: 91},
        {a: 'null', b: 81},
        {a: 'null', b: 53},
      ]
    })
    .toSpec();
}


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {
    "values": [
      {"a": "null", "b": 28},
      {"a": 33, "b": 55},
      {"a": 33, "b": 43},
      {"a": "null", "b": 91},
      {"a": "null", "b": 81},
      {"a": "null", "b": 53}
    ]
  },
  "layer": [
    {
      "transform": [
        {
          "joinaggregate": [
            {"op": "q1", "field": "b", "as": "lower_box_b"},
            {"op": "q3", "field": "b", "as": "upper_box_b"}
          ],
          "groupby": ["a"]
        }
      ],
      "layer": [
        {
          "transform": [
            {
              "filter": "(datum[\"b\"] < datum[\"lower_box_b\"] - 1.5 * (datum[\"upper_box_b\"] - datum[\"lower_box_b\"])) || (datum[\"b\"] > datum[\"upper_box_b\"] + 1.5 * (datum[\"upper_box_b\"] - datum[\"lower_box_b\"]))"
            }
          ],
          "mark": {"type": "point", "style": "boxplot-outliers"},
          "encoding": {
            "y": {"field": "b", "type": "quantitative", "title": "b"},
            "x": {
              "field": "a",
              "type": "quantitative",
              "axis": {"labelAngle": 0}
            }
          }
        },
        {
          "transform": [
            {
              "filter": "(datum[\"lower_box_b\"] - 1.5 * (datum[\"upper_box_b\"] - datum[\"lower_box_b\"]) <= datum[\"b\"]) && (datum[\"b\"] <= datum[\"upper_box_b\"] + 1.5 * (datum[\"upper_box_b\"] - datum[\"lower_box_b\"]))"
            },
            {
              "aggregate": [
                {"op": "min", "field": "b", "as": "lower_whisker_b"},
                {"op": "max", "field": "b", "as": "upper_whisker_b"},
                {"op": "min", "field": "lower_box_b", "as": "lower_box_b"},
                {"op": "max", "field": "upper_box_b", "as": "upper_box_b"}
              ],
              "groupby": ["a"]
            }
          ],
          "layer": [
            {
              "mark": {
                "type": "rule",
                "invalid": "filter",
                "aria": false,
                "style": "boxplot-rule"
              },
              "encoding": {
                "y": {
                  "field": "lower_whisker_b",
                  "type": "quantitative",
                  "title": "b"
                },
                "y2": {"field": "lower_box_b"},
                "x": {
                  "field": "a",
                  "type": "quantitative",
                  "axis": {"labelAngle": 0}
                },
                "tooltip": [
                  {
                    "field": "upper_whisker_b",
                    "type": "quantitative",
                    "title": "Upper Whisker of b"
                  },
                  {
                    "field": "lower_whisker_b",
                    "type": "quantitative",
                    "title": "Lower Whisker of b"
                  },
                  {"field": "a", "type": "quantitative"}
                ]
              }
            },
            {
              "mark": {
                "type": "rule",
                "invalid": "filter",
                "aria": false,
                "style": "boxplot-rule"
              },
              "encoding": {
                "y": {
                  "field": "upper_box_b",
                  "type": "quantitative",
                  "title": "b"
                },
                "y2": {"field": "upper_whisker_b"},
                "x": {
                  "field": "a",
                  "type": "quantitative",
                  "axis": {"labelAngle": 0}
                },
                "tooltip": [
                  {
                    "field": "upper_whisker_b",
                    "type": "quantitative",
                    "title": "Upper Whisker of b"
                  },
                  {
                    "field": "lower_whisker_b",
                    "type": "quantitative",
                    "title": "Lower Whisker of b"
                  },
                  {"field": "a", "type": "quantitative"}
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
            {"op": "q1", "field": "b", "as": "lower_box_b"},
            {"op": "q3", "field": "b", "as": "upper_box_b"},
            {"op": "median", "field": "b", "as": "mid_box_b"},
            {"op": "min", "field": "b", "as": "min_b"},
            {"op": "max", "field": "b", "as": "max_b"}
          ],
          "groupby": ["a"]
        }
      ],
      "layer": [
        {
          "mark": {
            "type": "bar",
            "size": 14,
            "orient": "vertical",
            "invalid": "filter",
            "ariaRoleDescription": "box",
            "style": "boxplot-box"
          },
          "encoding": {
            "y": {"field": "lower_box_b", "type": "quantitative", "title": "b"},
            "y2": {"field": "upper_box_b"},
            "x": {
              "field": "a",
              "type": "quantitative",
              "axis": {"labelAngle": 0}
            },
            "tooltip": [
              {"field": "max_b", "type": "quantitative", "title": "Max of b"},
              {
                "field": "upper_box_b",
                "type": "quantitative",
                "title": "Q3 of b"
              },
              {
                "field": "mid_box_b",
                "type": "quantitative",
                "title": "Median of b"
              },
              {
                "field": "lower_box_b",
                "type": "quantitative",
                "title": "Q1 of b"
              },
              {"field": "min_b", "type": "quantitative", "title": "Min of b"},
              {"field": "a", "type": "quantitative"}
            ]
          }
        },
        // todo
        {
          "mark": {
            "color": "white",
            "type": "tick",
            "invalid": "filter",
            "size": 14,
            "orient": "horizontal",
            "aria": false,
            "style": "boxplot-median"
          },
          "encoding": {
            "y": {"field": "mid_box_b", "type": "quantitative", "title": "b"},
            "x": {
              "field": "a",
              "type": "quantitative",
              "axis": {"labelAngle": 0}
            },
            "tooltip": [
              {"field": "max_b", "type": "quantitative", "title": "Max of b"},
              {
                "field": "upper_box_b",
                "type": "quantitative",
                "title": "Q3 of b"
              },
              {
                "field": "mid_box_b",
                "type": "quantitative",
                "title": "Median of b"
              },
              {
                "field": "lower_box_b",
                "type": "quantitative",
                "title": "Q1 of b"
              },
              {"field": "min_b", "type": "quantitative", "title": "Min of b"},
              {"field": "a", "type": "quantitative"}
            ]
          }
        }
      ]
    }
  ]
}
*/
