import * as vl from 'vega-lite-api';

// Write a Node.JS function that uses the vega-lite-api library to generate the vega-lite JSON spec below. The function should return the vega-lite-api object. Call the function `chart` and export as the es6 module default export.

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A line graph showing how the overall average Miles Per Gallon for how the MPG has changed over the years. The red line shows the average, and is layered on top of all the raw data.",
  "data": {"url": "data/cars.json"},
  "transform": [
    {"filter": "datum.Miles_per_Gallon !== null"},
    {"timeUnit": "year", "field": "Year", "as": "year"},
    {
      "window": [{
        "op": "mean",
        "field": "Miles_per_Gallon",
        "as": "Average_MPG"
      }],
      "sort": [{"field": "year", "order": "ascending"}],
      "ignorePeers": false,
      "frame": [null, 0]
    }
  ],
  "layer": [
    {
      "mark": "circle",
      "encoding": {
        "x": {"timeUnit": "year", "field": "Year"},
        "y": {"field": "Miles_per_Gallon", "type": "quantitative"}
      }
    },
    {
      "mark": {"type":"line", "color": "red"},
      "encoding": {
        "x": {"timeUnit": "year", "field": "Year"},
        "y": {
          "field": "Average_MPG",
          "type": "quantitative",
          "title": "Miles Per Gallon"
        }
      }
    }
  ]
}

*/
