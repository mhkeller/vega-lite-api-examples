import * as vl from 'vega-lite-api';

// Write a Node.JS function that uses the vega-lite-api library to generate the vega-lite JSON spec below. The function should return the vega-lite-api object. Call the function `chart` and export as the es6 module default export.

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Parsing a date in utc and outputting utc.",
  "data": {
    "values": [
      {"date": "2011-10-10"},
      {"date": "2011-10-12"}
    ]
  },
  "mark": "point",
  "encoding": {
    "y": {
      "timeUnit": "utchours",
      "field": "date",
      "type": "ordinal",
      "title": "time"
    }
  }
}

*/
