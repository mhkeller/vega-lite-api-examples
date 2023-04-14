import * as vl from 'vega-lite-api';

// Write a Node.JS function that uses the vega-lite-api library to generate the vega-lite JSON spec below. The function should return the vega-lite-api object. Call the function `chart` and export as the es6 module default export.

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/barley.json"},
  "title": "Barley Yield comparison between 1932 and 1931",
  "config": {"legend": {"orient": "bottom", "direction": "horizontal"}},
  "transform": [
    {"pivot": "year", "value": "yield", "groupby": ["variety", "site"]},
    {"fold": ["1931", "1932"], "as": ["year", "yield"]},
    {"calculate": "toNumber(datum.year)", "as": "year"},
    {"calculate": "datum['1932'] - datum['1931']", "as": "delta"}
  ],
  "facet": {"column": {"field": "site", "title": "Site"}},
  "spec": {
    "view": {"stroke": null},
    "mark": "trail",
    "encoding": {
      "x": {"field": "year", "title": null},
      "y": {"field": "variety", "title": "Variety"},
      "size": {
        "field": "yield",
        "type": "quantitative",
        "scale": {"range": [0, 12]},
        "legend": {"values": [20, 60]},
        "title": "Barley Yield (bushels/acre)"
      },
      "tooltip": [
        {"field": "year", "type": "quantitative"},
        {"field": "yield"}
      ],
      "color": {
        "field": "delta",
        "type": "quantitative",
        "scale": {"domainMid": 0},
        "title": "Yield Delta (%)"
      }
    }
  }
}
*/
