import * as vl from 'vega-lite-api';

// Write a Node.JS function that uses the vega-lite-api library to generate the vega-lite JSON spec below. The function should return the vega-lite-api object. Call the function `chart` and export as the es6 module default export.

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/lookup_groups.csv"},
  "transform": [{
    "lookup": "person",
    "from": {
      "data": {"url": "data/lookup_people.csv"},
      "key": "name",
      "fields": ["age", "height"]
    }
  }],
  "mark": "bar",
  "encoding": {
    "x": {"field": "group"},
    "y": {"field": "age", "aggregate": "mean"}
  }
}

*/
