import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 * The function should return the vega-lite-api object.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {
    "values": {
      "hits": {
        "hits": [
          {"source": {"reco": 2, "yes": 1}},
          {"source": {"reco": 3, "yes": 4}},
          {"source": {"reco": 2, "yes": 0}},
          {"source": {"reco": 1, "yes": 3}},
          {"source": {"reco": 3, "yes": 4}},
          {"source": {"reco": 1, "yes": 1}},
          {"source": {"reco": 1, "yes": 1}},
          {"source": {"reco": 1, "yes": 1}},
          {"source": {"reco": 1, "yes": 0}},
          {"source": {"reco": 1, "yes": 1}}
        ]
      }
    },
    "format": {"property": "hits.hits"}
  },
  "mark": "point",
  "encoding": {
    "x": {"field": "source.reco", "type": "quantitative"},
    "y": {"field": "source.yes", "type": "quantitative"}
  }
}
*/
