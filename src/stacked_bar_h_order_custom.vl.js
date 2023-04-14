import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/barley.json"},
  "transform": [{
    "calculate": "if(datum.site === 'University Farm', 0, if(datum.site === 'Grand Rapids', 1, 2))",
    "as": "siteOrder"
  }],
  "mark": "bar",
  "encoding": {
    "x": {"aggregate": "sum", "field": "yield"},
    "y": {"field": "variety"},
    "color": {"field": "site"},
    "order": {"field": "siteOrder"}
  }
}
*/
