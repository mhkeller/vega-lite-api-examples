import * as vl from 'vega-lite-api';

// Write a Node.JS function that uses the vega-lite-api library to generate the vega-lite JSON spec below. The function should return the vega-lite-api object. Call the function `chart` and export as the es6 module default export.

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {
    "values": {
      "hits": {
        "hits": [
          {"source.reco": 2 ,"source.yes": 1},
          {"source.reco": 3 ,"source.yes": 4},
          {"source.reco": 2 ,"source.yes": 0},
          {"source.reco": 1 ,"source.yes": 3},
          {"source.reco": 3 ,"source.yes": 4},
          {"source.reco": 1 ,"source.yes": 1},
          {"source.reco": 1 ,"source.yes": 1},
          {"source.reco": 1 ,"source.yes": 1},
          {"source.reco": 1 ,"source.yes": 0},
          {"source.reco": 1 ,"source.yes": 1}
        ]
      }
    },
    "format": {"property": "hits.hits"}
  },
  "mark": "point",
  "encoding": {
    "x": {"field": "source\\.reco", "type": "quantitative"},
    "y": {"field": "source\\.yes", "type": "quantitative"}
  }
}

*/
