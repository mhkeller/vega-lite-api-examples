import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "config": {"view": {"stroke": ""}},
  "data": {
    "values": [
      {"country": "Great Britain", "animal": "pigs"},
      {"country": "Great Britain", "animal": "pigs"},
      {"country": "Great Britain", "animal": "cattle"},
      {"country": "Great Britain", "animal": "cattle"},
      {"country": "Great Britain", "animal": "cattle"},
      {"country": "Great Britain", "animal": "sheep"},
      {"country": "Great Britain", "animal": "sheep"},
      {"country": "Great Britain", "animal": "sheep"},
      {"country": "Great Britain", "animal": "sheep"},
      {"country": "Great Britain", "animal": "sheep"},
      {"country": "Great Britain", "animal": "sheep"},
      {"country": "Great Britain", "animal": "sheep"},
      {"country": "Great Britain", "animal": "sheep"},
      {"country": "Great Britain", "animal": "sheep"},
      {"country": "Great Britain", "animal": "sheep"},
      {"country": "United States", "animal": "pigs"},
      {"country": "United States", "animal": "pigs"},
      {"country": "United States", "animal": "pigs"},
      {"country": "United States", "animal": "pigs"},
      {"country": "United States", "animal": "pigs"},
      {"country": "United States", "animal": "pigs"},
      {"country": "United States", "animal": "cattle"},
      {"country": "United States", "animal": "cattle"},
      {"country": "United States", "animal": "cattle"},
      {"country": "United States", "animal": "cattle"},
      {"country": "United States", "animal": "cattle"},
      {"country": "United States", "animal": "cattle"},
      {"country": "United States", "animal": "cattle"},
      {"country": "United States", "animal": "cattle"},
      {"country": "United States", "animal": "cattle"},
      {"country": "United States", "animal": "sheep"},
      {"country": "United States", "animal": "sheep"},
      {"country": "United States", "animal": "sheep"},
      {"country": "United States", "animal": "sheep"},
      {"country": "United States", "animal": "sheep"},
      {"country": "United States", "animal": "sheep"},
      {"country": "United States", "animal": "sheep"}
    ]
  },
  "transform": [
    {
      "calculate": "{'cattle': '🐄', 'pigs': '🐖', 'sheep': '🐏'}[datum.animal]",
      "as": "emoji"
    },
    {"window": [{"op": "rank", "as": "rank"}], "groupby": ["country", "animal"]}
  ],
  "facet": {"row": {"field": "country", "header": {"title": ""}}},
  "spec": {
    "width": 800,
    "height": 200,
    "mark": {"type": "text", "baseline": "middle"},
    "encoding": {
      "x": {"field": "rank", "type": "ordinal", "axis": null},
      "y": {"field": "animal", "type": "nominal", "axis": null, "sort": null},
      "text": {"field": "emoji", "type": "nominal"},
      "size": {"value": 65}
    }
  }
}
*/
