import * as vl from 'vega-lite-api';

// Write a Node.JS function that uses the vega-lite-api library to generate the vega-lite JSON spec below. The function should return the vega-lite-api object. Call the function `chart` and export as the es6 module default export.

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A Wilkinson Dot Plot",
  "height": 100,
  "data": {
    "values": [
      1,1,1,1,1,1,1,1,1,1,
      2,2,2,
      3,3,
      4,4,4,4,4,4
    ]
  },
  "transform": [{
    "window": [{"op": "rank", "as": "id"}],
    "groupby": ["data"]
  }],
  "mark": {
  	"type": "circle",
  	"opacity": 1
  },
  "encoding": {
    "x": {"field": "data", "type": "ordinal"},
    "y": {"field": "id", "type": "ordinal", "axis": null, "sort": "descending"}
  }
}

*/
