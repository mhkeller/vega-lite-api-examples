import * as vl from 'vega-lite-api';

// Write a Node.JS function that uses the vega-lite-api library to generate the vega-lite JSON spec below. The function should return the vega-lite-api object. Call the function `chart` and export as the es6 module default export.

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
   "title": "Body Mass of Penguin Species (g)",
  "data": {
    "values": [{
      "Species": "Adelie",
      "lower": 2850,
      "q1": 3350,
      "median": 3700,
      "q3": 4000,
      "upper": 4775,
      "outliers": []
    },{
      "Species": "Chinstrap",
      "lower": 2700,
      "q1": 3487.5,
      "median": 3700,
      "q3": 3950,
      "upper": 4800,
      "outliers": [2700,4800]
    },{
      "Species": "Gentoo",
      "lower": 3950,
      "q1": 4700,
      "median": 5000,
      "q3": 5500,
      "upper": 6300,
      "outliers": []
    }]
  },
  "encoding": {"y": {"field": "Species", "type": "nominal", "title": null}},
  "layer": [
    {
      "mark": {"type": "rule"},
      "encoding": {
        "x": {"field": "lower", "type": "quantitative","scale": {"zero": false}, "title": null},
        "x2": {"field": "upper"}
      }
    },
    {
      "mark": {"type": "bar", "size": 14},
      "encoding": {
        "x": {"field": "q1", "type": "quantitative"},
        "x2": {"field": "q3"},
        "color": {"field": "Species", "type": "nominal", "legend": null}
      }
    },
    {
      "mark": {"type": "tick", "color": "white", "size": 14},
      "encoding": {
        "x": {"field": "median", "type": "quantitative"}
      }
    },
    {
      "transform": [{"flatten": ["outliers"]}],
      "mark": {"type": "point", "style": "boxplot-outliers"},
      "encoding": {
        "x": {"field": "outliers", "type": "quantitative"}
      }
    }
  ]
}

*/