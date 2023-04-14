import * as vl from 'vega-lite-api';

// Write a Node.JS function that uses the vega-lite-api library to generate the vega-lite JSON spec below. The function should return the vega-lite-api object. Call the function `chart` and export as the es6 module default export.

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A dual axis chart, created by setting y's scale resolution to `\"independent\"`",
  "width": 400,
  "height": 300,
  "data": {"url": "data/weather.csv"},
  "layer": [
    {
      "mark": {"opacity": 0.3, "type": "area", "color": "#85C5A6"},
      "encoding": {
        "x": {
          "timeUnit": "month",
          "field": "date",
          "axis": {"format": "%b", "title": null}
        },
        "y": {
          "aggregate": "average",
          "field": "temp_max",
          "scale": {"domain": [0, 30]},
          "title": "Avg. Temperature (°C)",
          "axis": {"titleColor": "#85C5A6"}
        },
        "y2": {"aggregate": "average", "field": "temp_min"}
      }
    },
    {
      "mark": {"stroke": "#85A9C5", "type": "line", "interpolate": "monotone"},
      "encoding": {
        "x": {
          "timeUnit": "month",
          "field": "date",
          "axis": {"format": "%b", "title": null}
        },
        "y": {
          "aggregate": "average",
          "field": "precipitation",
          "title": "Precipitation (inches)",
          "axis": {"titleColor": "#85A9C5"}
        }
      }
    }
  ],
  "resolve": {"scale": {"y": "independent"}},
  "transform": [{"filter": "datum.location == \"Seattle\""}]
}
*/
