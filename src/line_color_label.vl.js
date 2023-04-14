import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate the vega-lite JSON spec below.
 * The function should return the vega-lite-api object.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Multi-series line chart with labels.",
  "data": {"url": "data/stocks.csv"},
  "transform": [{"filter": "datum.symbol!=='IBM'"}],
  "encoding": {
    "color": {
      "field":"symbol",
      "type":"nominal",
      "legend": null
    }
  },
  "layer": [{
    "mark": "line",
    "encoding": {
      "x": {"field": "date", "type": "temporal", "title": "date"},
      "y": {"field": "price", "type": "quantitative", "title": "price"}
    }
  },{
    "encoding": {
      "x": {"aggregate": "max", "field": "date", "type": "temporal"},
      "y": {"aggregate": {"argmax": "date"}, "field": "price", "type": "quantitative"}
    },
    "layer": [{
      "mark": {"type": "circle"}
    }, {
      "mark": {"type": "text", "align": "left", "dx": 4},
      "encoding": {"text": {"field":"symbol", "type": "nominal"}}
    }]
  }],
  "config": {"view": {"stroke": null}}
}
*/
