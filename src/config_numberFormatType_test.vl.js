import * as vl from 'vega-lite-api';

// Write a Node.JS function that uses the vega-lite-api library to generate the vega-lite JSON spec below. The function should return the vega-lite-api object. Call the function `chart` and export as the es6 module default export.

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Testing global number formatting config",
  "width": 150,
  "height": 150,
  "data": {"url": "data/cars.json"},
  "mark": {"type": "point", "tooltip": true},
  "encoding": {
    "x": {"field": "Year", "type": "temporal"},
    "y": {"field": "Miles_per_Gallon", "type": "quantitative"},
    "color": {"field": "Acceleration", "type": "quantitative"},
    "size": {"bin": true, "field": "Displacement", "type": "quantitative"},
    "facet": {"bin": {"maxbins": 4}, "field": "Weight_in_lbs", "columns": 3}
  },
  "config": {
    "numberFormat": "1.0",
    "numberFormatType": "pow",
    "customFormatTypes": true
  }
}

*/
