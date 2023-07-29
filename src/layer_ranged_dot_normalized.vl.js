import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A ranged dot plot that uses 'layer' to convey changing life expectancy for the five most populous countries (between 1955 and 2000).",
  "data": {"url": "data/countries.json"},
  "layer": [
    {
      "mark": "line",
      "encoding": {
        "x": {
          "field": "life_expect",
          "type": "quantitative",
          "title": "Life Expectancy (years)"
        },
        "y": {
          "field": "country",
          "type": "nominal",
          "title": "Country",
          "axis": {
            "offset": 5,
            "ticks": false,
            "minExtent": 70,
            "domain": false
          }
        },
        "detail": {"field": "country", "type": "nominal"},
        "color": {"value": "#db646f"}
      }
    },
    {
      "mark": {"type": "point", "filled": true},
      "encoding": {
        "x": {
          "field": "life_expect",
          "type": "quantitative",
          "title": "Life Expectancy (years)"
        },
        "y": {
          "field": "country",
          "type": "nominal",
          "title": "Country",
          "axis": {
            "offset": 5,
            "ticks": false,
            "minExtent": 70,
            "domain": false
          }
        },
        "color": {
          "field": "year",
          "type": "ordinal",
          "scale": {"domain": [1955, 2000], "range": ["#e6959c", "#911a24"]},
          "title": "Year"
        },
        "size": {"value": 100},
        "opacity": {"value": 1}
      }
    }
  ],
  "transform": [
    {
      "filter": {
        "field": "country",
        "oneOf": ["China", "India", "United States", "Indonesia", "Brazil"]
      }
    },
    {"filter": {"field": "year", "oneOf": [1955, 2000]}}
  ]
}
*/
