import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": {
    "text": "World Cup 2018: Group F Rankings",
    "frame": "bounds"
  },
  "data": {
    "values": [
      {"team": "Germany", "matchday": 1, "point": 0, "diff": -1},
      {"team": "Mexico", "matchday": 1, "point": 3, "diff": 1},
      {"team": "South Korea", "matchday": 1, "point": 0, "diff": -1},
      {"team": "Sweden", "matchday": 1, "point": 3, "diff": 1},
      {"team": "Germany", "matchday": 2, "point": 3, "diff": 0},
      {"team": "Mexico", "matchday": 2, "point": 6, "diff": 2},
      {"team": "South Korea", "matchday": 2, "point": 0, "diff": -2},
      {"team": "Sweden", "matchday": 2, "point": 3, "diff": 0},
      {"team": "Germany", "matchday": 3, "point": 3, "diff": -2},
      {"team": "Mexico", "matchday": 3, "point": 6, "diff": -1},
      {"team": "South Korea", "matchday": 3, "point": 3, "diff": 0},
      {"team": "Sweden", "matchday": 3, "point": 6, "diff": 3}
    ]
  },
  "transform": [{
    "sort": [
      {"field": "point", "order": "descending"},
      {"field": "diff", "order": "descending"}
    ],
    "window": [{
      "op": "rank",
      "as": "rank"
    }],
    "groupby": ["matchday"]
  }],
  "mark": {"type": "line", "orient": "vertical"},
  "encoding": {
    "x": {"field": "matchday", "type": "ordinal"},
    "y": {"field": "rank", "type": "ordinal"},
    "color": {
      "field": "team", "type": "nominal",
      "scale": {
        "domain": ["Germany", "Mexico", "South Korea", "Sweden"],
        "range": ["black", "#127153", "#C91A3C", "#0C71AB"]
      }
    }
  }
}
*/
