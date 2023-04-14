import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 * The function should return the vega-lite-api object.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Relative frequency histogram. The data is binned with first transform. The number of values per bin and the total number are calculated in the second and third transform to calculate the relative frequency in the last transformation step.",
  "data": {"url": "data/cars.json"},
  "transform": [{
      "bin": true, "field": "Horsepower", "as": "bin_Horsepwoer"
    }, {
      "aggregate": [{"op": "count", "as": "Count"}],
      "groupby": ["bin_Horsepwoer", "bin_Horsepwoer_end"]
    }, {
      "joinaggregate": [{"op": "sum", "field": "Count", "as": "TotalCount"}]
    }, {
      "calculate": "datum.Count/datum.TotalCount", "as": "PercentOfTotal"
    }
  ],
  "mark": {"type": "bar", "tooltip": true},
  "encoding": {
    "x": {
      "title": "Horsepower",
      "field": "bin_Horsepwoer",
      "bin": {"binned": true}
    },
    "x2": {"field": "bin_Horsepwoer_end"},
    "y": {
      "title": "Relative Frequency",
      "field": "PercentOfTotal",
      "type": "quantitative",
      "axis": {
        "format": ".1~%"
        }
    }
  }
}
*/
