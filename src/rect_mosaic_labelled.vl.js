import * as vl from 'vega-lite-api';

// Write a Node.JS function that uses the vega-lite-api library to generate the vega-lite JSON spec below. The function should return the vega-lite-api object. Call the function `chart` and export as the es6 module default export.

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {
    "url": "data/cars.json"
  },
  "transform": [
    {
      "aggregate": [
        {
          "op": "count",
          "as": "count_*"
        }
      ],
      "groupby": [
        "Origin",
        "Cylinders"
      ]
    },
    {
      "stack": "count_*",
      "groupby": [],
      "as": [
        "stack_count_Origin1",
        "stack_count_Origin2"
      ],
      "offset": "normalize",
      "sort": [
        {
          "field": "Origin",
          "order": "ascending"
        }
      ]
    },
    {
      "joinaggregate": [
        {
          "op": "min",
          "field": "stack_count_Origin1",
          "as": "x"
        },
        {
          "op": "max",
          "field": "stack_count_Origin2",
          "as": "x2"
        }
      ],
      "groupby": [
        "Origin"
      ]
    },
    {
      "stack": "count_*",
      "groupby": [
        "Origin"
      ],
      "as": [
        "y",
        "y2"
      ],
      "offset": "normalize",
      "sort": [
        {
          "field": "Cylinders",
          "order": "ascending"
        }
      ]
    },
    {
      "calculate": "(datum.x+datum.x2)/2",
      "as": "xc"
    },
    {
      "calculate": "(datum.y+datum.y2)/2",
      "as": "yc"
    }
  ],
  "vconcat": [
    {
      "mark": {
        "type": "text",
        "baseline": "middle",
        "align": "center"
      },
      "encoding": {
        "x": {
          "aggregate": "min",
          "field": "xc",
          "title": "Origin",
          "axis": {
            "orient": "top"
          }
        },
        "color": {
          "field": "Origin",
          "legend": null
        },
        "text": {"field": "Origin"}
      }
    },
    {
      "layer": [
        {
          "mark": {
            "type": "rect"
          },
          "encoding": {
            "x": {
              "field": "x",
              "type": "quantitative",
              "axis": null
            },
            "x2": {"field": "x2"},
            "y": {
              "field": "y",
              "type": "quantitative"
            },
            "y2": {"field": "y2"},
            "color": {
              "field": "Origin",
              "type": "nominal",
              "legend": null
            },
            "opacity": {
              "field": "Cylinders",
              "type": "quantitative",
              "legend": null
            },
            "tooltip": [
              {
                "field": "Origin",
                "type": "nominal"
              },
              {
                "field": "Cylinders",
                "type": "quantitative"
              }
            ]
          }
        },
        {
          "mark": {
            "type": "text",
            "baseline": "middle"
          },
          "encoding": {
            "x": {
              "field": "xc",
              "type": "quantitative",
              "axis": null
            },
            "y": {
              "field": "yc",
              "type": "quantitative",
              "axis": {
                "title": "Cylinders"
              }
            },
            "text": {
              "field": "Cylinders",
              "type": "nominal"
            }
          }
        }
      ]
    }
  ],
  "resolve": {"scale": {"x": "shared"}},
  "config": {
    "view": {
      "stroke": ""
    },
    "concat": {"spacing": 10},
    "axis": {
      "domain": false,
      "ticks": false,
      "labels": false,
      "grid": false
    }
  }
}

*/
