import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Bar graph showing the best films for the year they were produced, where best is defined by at least 2.5 points above average for that year. The red point shows the average rating for a film in that year, and the bar is the rating that the film recieved.",
  "data": {
    "url": "data/movies.json"
  },
  "transform": [
      {"filter": "datum['IMDB Rating'] != null"},
      {"timeUnit": "year", "field": "Release Date", "as": "year"},
      {
        "joinaggregate": [{
          "op": "mean",
          "field": "IMDB Rating",
          "as": "AverageYearRating"
        }],
        "groupby": [
          "year"
        ]
      },
      {
        "filter": "(datum['IMDB Rating'] - datum.AverageYearRating) > 2.5"
      }
  ],
  "layer": [{
      "mark": {"type": "bar", "clip": true},
      "encoding": {
        "x": {
          "field": "IMDB Rating",
          "type": "quantitative",
          "title": "IMDB Rating"
        },
        "y": {
          "field": "Title",
          "type": "ordinal"
        }
      }
    },
    {
      "mark": "tick",
      "encoding": {
        "x": {
          "field": "AverageYearRating",
          "type": "quantitative"
        },
        "y": {
          "field": "Title",
          "type": "ordinal"
        },
        "color": {"value": "red"}
      }
    }
  ]
}
*/
