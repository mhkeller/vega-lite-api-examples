import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

/*
{
  "data": {"url": "data/cars.json"},
  "align": "all",
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "columns": 3,
  "concat": [
    {
      "params": [{"name": "grid", "select": "interval", "bind": "scales"}],
      "mark": "point",
      "encoding": {
        "x": {"field": "Miles_per_Gallon", "type": "quantitative"},
        "y": {
          "field": "Horsepower",
          "type": "quantitative",
          "axis": {"minExtent": 30}
        },
        "color": {"field": "Origin", "type": "nominal"}
      },
      "name": "child__row_Horsepowercolumn_Miles_per_Gallon"
    },
    {
      "params": [{"name": "grid", "select": "interval", "bind": "scales"}],
      "mark": "point",
      "encoding": {
        "x": {"field": "Acceleration", "type": "quantitative"},
        "y": {
          "field": "Horsepower",
          "type": "quantitative",
          "axis": {"minExtent": 30}
        },
        "color": {"field": "Origin", "type": "nominal"}
      },
      "name": "child__row_Horsepowercolumn_Acceleration"
    },
    {
      "params": [{"name": "grid", "select": "interval", "bind": "scales"}],
      "mark": "point",
      "encoding": {
        "x": {"field": "Horsepower", "type": "quantitative"},
        "y": {
          "field": "Horsepower",
          "type": "quantitative",
          "axis": {"minExtent": 30}
        },
        "color": {"field": "Origin", "type": "nominal"}
      },
      "name": "child__row_Horsepowercolumn_Horsepower"
    },
    {
      "params": [{"name": "grid", "select": "interval", "bind": "scales"}],
      "mark": "point",
      "encoding": {
        "x": {"field": "Miles_per_Gallon", "type": "quantitative"},
        "y": {
          "field": "Acceleration",
          "type": "quantitative",
          "axis": {"minExtent": 30}
        },
        "color": {"field": "Origin", "type": "nominal"}
      },
      "name": "child__row_Accelerationcolumn_Miles_per_Gallon"
    },
    {
      "params": [{"name": "grid", "select": "interval", "bind": "scales"}],
      "mark": "point",
      "encoding": {
        "x": {"field": "Acceleration", "type": "quantitative"},
        "y": {
          "field": "Acceleration",
          "type": "quantitative",
          "axis": {"minExtent": 30}
        },
        "color": {"field": "Origin", "type": "nominal"}
      },
      "name": "child__row_Accelerationcolumn_Acceleration"
    },
    {
      "params": [{"name": "grid", "select": "interval", "bind": "scales"}],
      "mark": "point",
      "encoding": {
        "x": {"field": "Horsepower", "type": "quantitative"},
        "y": {
          "field": "Acceleration",
          "type": "quantitative",
          "axis": {"minExtent": 30}
        },
        "color": {"field": "Origin", "type": "nominal"}
      },
      "name": "child__row_Accelerationcolumn_Horsepower"
    },
    {
      "params": [{"name": "grid", "select": "interval", "bind": "scales"}],
      "mark": "point",
      "encoding": {
        "x": {"field": "Miles_per_Gallon", "type": "quantitative"},
        "y": {
          "field": "Miles_per_Gallon",
          "type": "quantitative",
          "axis": {"minExtent": 30}
        },
        "color": {"field": "Origin", "type": "nominal"}
      },
      "name": "child__row_Miles_per_Galloncolumn_Miles_per_Gallon"
    },
    {
      "params": [{"name": "grid", "select": "interval", "bind": "scales"}],
      "mark": "point",
      "encoding": {
        "x": {"field": "Acceleration", "type": "quantitative"},
        "y": {
          "field": "Miles_per_Gallon",
          "type": "quantitative",
          "axis": {"minExtent": 30}
        },
        "color": {"field": "Origin", "type": "nominal"}
      },
      "name": "child__row_Miles_per_Galloncolumn_Acceleration"
    },
    {
      "params": [{"name": "grid", "select": "interval", "bind": "scales"}],
      "mark": "point",
      "encoding": {
        "x": {"field": "Horsepower", "type": "quantitative"},
        "y": {
          "field": "Miles_per_Gallon",
          "type": "quantitative",
          "axis": {"minExtent": 30}
        },
        "color": {"field": "Origin", "type": "nominal"}
      },
      "name": "child__row_Miles_per_Galloncolumn_Horsepower"
    }
  ]
}
*/
