import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Nested concatenation aligned by setting axis minExtent",
  "data": {"url": "data/movies.json"},
  "vconcat": [
    {
      "align": "all",
      "title": "Ratings",
      "columns": 2,
      "concat": [
        {
          "width": 150,
          "height": 50,
          "mark": "bar",
          "encoding": {
            "x": {"field": "Rotten Tomatoes Rating", "bin": {"maxbins": 20}},
            "y": {"aggregate": "count"}
          },
          "name": "child__column_Rotten_Tomatoes_Rating"
        },
        {
          "width": 150,
          "height": 50,
          "mark": "bar",
          "encoding": {
            "x": {"field": "IMDB Rating", "bin": {"maxbins": 20}},
            "y": {"aggregate": "count"}
          },
          "name": "child__column_IMDB_Rating"
        }
      ]
    },
    {
      "align": "all",
      "title": "Gross",
      "columns": 2,
      "concat": [
        {
          "width": 150,
          "height": 50,
          "encoding": {
            "x": {"field": "US Gross", "bin": {"maxbins": 20}},
            "y": {"aggregate": "count"}
          },
          "mark": "bar",
          "name": "child__column_US_Gross"
        },
        {
          "width": 150,
          "height": 50,
          "encoding": {
            "x": {"field": "Worldwide Gross", "bin": {"maxbins": 20}},
            "y": {"aggregate": "count"}
          },
          "mark": "bar",
          "name": "child__column_Worldwide_Gross"
        }
      ]
    }
  ],
  "config": {
    "countTitle": "Count",
    "axisX": {"titleLimit": 150},
    "axisY": {"minExtent": 40}
  }
}
*/
