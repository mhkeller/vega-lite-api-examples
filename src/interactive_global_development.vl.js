import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "An interactive scatter plot of global health statistics by country and year.",
  "data": {"url": "data/gapminder.json"},
  "width": 800,
  "height": 500,
  "layer": [
    {
      "transform": [
        {"filter": {"field": "country", "equal": "Afghanistan"}},
        {"filter": {"param": "year"}}
      ],
      "mark": {
        "type": "text",
        "fontSize": 100,
        "x": 420,
        "y": 250,
        "opacity": 0.06
      },
      "encoding": {"text": {"field": "year"}}
    },
    {
      "transform": [
        {
          "lookup": "cluster",
          "from": {
            "key": "id",
            "fields": ["name"],
            "data": {
              "values": [
                {"id": 0, "name": "South Asia"},
                {"id": 1, "name": "Europe & Central Asia"},
                {"id": 2, "name": "Sub-Saharan Africa"},
                {"id": 3, "name": "America"},
                {"id": 4, "name": "East Asia & Pacific"},
                {"id": 5, "name": "Middle East & North Africa"}
              ]
            }
          }
        }
      ],
      "encoding": {
        "x": {
          "field": "fertility",
          "type": "quantitative",
          "scale": {"domain": [0, 9]},
          "axis": {"tickCount": 5, "title": "Fertility"}
        },
        "y": {
          "field": "life_expect",
          "type": "quantitative",
          "scale": {"domain": [20, 85]},
          "axis": {"tickCount": 5, "title": "Life Expectancy"}
        }
      },
      "layer": [
        {
          "mark": {
            "type": "line",
            "size": 4,
            "color": "lightgray",
            "strokeCap": "round"
          },
          "encoding": {
            "detail": {"field": "country"},
            "order": {"field": "year"},
            "opacity": {
              "condition": {
                "test": {"or": [
                  {"param": "hovered", "empty": false},
                  {"param": "clicked", "empty": false}
                ]},
                "value": 0.8
              },
              "value": 0
            }
          }
        },
        {
          "params": [
            {
              "name": "year",
              "value": [{"year": 1955}],
              "select": {
                "type": "point",
                "fields": ["year"]
              },
              "bind": {
                "name": "Year",
                "input": "range",
                "min": 1955, "max": 2005, "step": 5
              }
            },
            {
              "name": "hovered",
              "select": {
                "type": "point",
                "fields": ["country"],
                "toggle": false,
                "on": "mouseover"
              }
            },
            {
              "name": "clicked",
              "select": {"type": "point", "fields": ["country"]}
            }
          ],
          "transform": [{"filter": {"param": "year"}}],
          "mark": {"type": "circle", "size": 100, "opacity": 0.9},
          "encoding": {"color": {"field": "name", "title": "Region"}}
        },
        {
          "transform": [
            {
              "filter": {
                "and": [
                  {"param": "year"},
                  {"or": [
                    {"param": "clicked", "empty": false},
                    {"param": "hovered", "empty": false}
                  ]}
                ]
              }
            }
          ],
          "mark": {
            "type": "text",
            "yOffset": -12,
            "fontSize": 12,
            "fontWeight": "bold"
          },
          "encoding": {
            "text": {"field": "country"},
            "color": {"field": "name", "title": "Region"}
          }
        },
        {
          "transform": [
            {"filter": {"param": "hovered", "empty": false}},
            {"filter": {"not": {"param": "year"}}}
          ],
          "layer": [
            {
              "mark": {
                "type": "text",
                "yOffset": -12,
                "fontSize": 12,
                "color": "gray"
              },
              "encoding": {"text": {"field": "year"}}
            },
            {"mark": {"type": "circle", "color": "gray"}}
          ]
        }
      ]
    }
  ]
}
*/
