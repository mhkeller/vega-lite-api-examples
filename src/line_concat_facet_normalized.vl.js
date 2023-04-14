import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 * The function should return the vega-lite-api object.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/seattle-weather.csv"},
  "vconcat": [
    {
      "title": "Annual and Total Mean Precipitation from 2012-2015",
      "facet": {
        "row": {"field": "date", "timeUnit": "year", "header": {"title": null}}
      },
      "spec": {
        "height": 30,
        "mark": "line",
        "encoding": {
          "y": {
            "field": "precipitation",
            "aggregate": "mean",
            "axis": {"title": null}
          },
          "x": {"field": "date", "timeUnit": "month", "type": "ordinal"}
        }
      }
    },
    {
      "mark": "line",
      "encoding": {
        "x": {"field": "date", "timeUnit": "month", "type": "ordinal"},
        "y": {
          "field": "precipitation",
          "aggregate": "mean",
          "axis": {"title": null}
        }
      },
      "height": 50
    }
  ],
  "config": {"facet": {"spacing": 5}}
}
*/
