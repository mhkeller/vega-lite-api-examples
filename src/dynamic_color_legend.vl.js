import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate the vega-lite JSON spec below.
 * The function should return the vega-lite-api object.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Seattle Weather, 2012-2015",
  "data": {"url": "data/seattle-weather.csv"},
  "params": [
    {"name": "color_rain", "value": "#4682b4", "bind": {"input": "color"}},
    {"name": "color_sun", "value": "#4682b4", "bind": {"input": "color"}},
    {"name": "color_fog", "value": "#4682b4", "bind": {"input": "color"}},
    {"name": "color_drizzle", "value": "#4682b4", "bind": {"input": "color"}},
    {"name": "color_snow", "value": "#4682b4", "bind": {"input": "color"}}
  ],
  "vconcat": [
    {
      "encoding": {
        "color": {
          "condition": {
            "param": "brush",
            "title": "Weather",
            "field": "weather",
            "type": "nominal",
            "scale": {
              "domain": ["sun", "fog", "drizzle", "rain", "snow"],
              "range": [
                {"expr": "color_sun"},
                {"expr": "color_fog"},
                {"expr": "color_drizzle"},
                {"expr": "color_rain"},
                {"expr": "color_snow"}
              ]
            }
          },
          "value": "lightgray"
        },
        "size": {
          "title": "Precipitation",
          "field": "precipitation",
          "scale": {"domain": [-1, 50]},
          "type": "quantitative"
        },
        "x": {
          "field": "date",
          "timeUnit": "monthdate",
          "title": "Date",
          "axis": {"format": "%b"}
        },
        "y": {
          "title": "Maximum Daily Temperature (C)",
          "field": "temp_max",
          "scale": {"domain": [-5, 40]},
          "type": "quantitative"
        }
      },
      "width": 600,
      "height": 300,
      "mark": "point",
      "params": [
        {"name": "brush", "select": {"type": "interval", "encodings": ["x"]}}
      ],
      "transform": [{"filter": {"param": "click"}}]
    },
    {
      "encoding": {
        "color": {
          "condition": {
            "param": "click",
            "field": "weather"

          },
          "value": "lightgray"
        },
        "x": {"aggregate": "count"},
        "y": {"title": "Weather", "field": "weather"}
      },
      "width": 600,
      "mark": "bar",
      "params": [
        {"name": "click", "select": {"type": "point", "encodings": ["color"]}}
      ],
      "transform": [{"filter": {"param": "brush"}}]
    }
  ]
}
*/
