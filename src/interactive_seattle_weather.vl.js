import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Seattle Weather, 2012-2015",
  "data": {
    "url": "data/seattle-weather.csv"
  },
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
              "range": ["#e7ba52", "#a7a7a7", "#aec7e8", "#1f77b4", "#9467bd"]
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
      "params": [{
        "name": "brush",
        "select": {"type": "interval", "encodings": ["x"]}
      }],
      "transform": [{"filter": {"param": "click"}}]
    },
    {
      "encoding": {
        "color": {
          "condition": {
            "param": "click",
            "field": "weather",
            "scale": {
              "domain": ["sun", "fog", "drizzle", "rain", "snow"],
              "range": ["#e7ba52", "#a7a7a7", "#aec7e8", "#1f77b4", "#9467bd"]
            }
          },
          "value": "lightgray"
        },
        "x": {"aggregate": "count"},
        "y": {"title": "Weather", "field": "weather"}
      },
      "width": 600,
      "mark": "bar",
      "params": [{
        "name": "click",
        "select": {"type": "point", "encodings": ["color"]}
      }],
      "transform": [{"filter": {"param": "brush"}}]
    }
  ]
}


*/
