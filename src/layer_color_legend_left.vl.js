import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Stock price over time with color legend orient = left.",
  "data": {"url": "data/stocks.csv"},
  "encoding": {
    "x": {"field": "date", "type": "temporal"},
    "y": {"field": "price", "type": "quantitative"},
    "color": {"field": "symbol", "type": "nominal", "legend": {"orient": "left"}}
  },
  "layer": [
    {"mark": "line"},
    {"mark": {"type":"point", "filled": true}}
  ]
}
*/
