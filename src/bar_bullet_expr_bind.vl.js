import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate the vega-lite JSON spec below.
 * The function should return the vega-lite-api object.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {
    "values": [
      {"title":"Revenue", "subtitle":"US$, in thousands", "ranges":[150,225,300],"measures":[220,270],"markers":[250]}
    ]
  },
  "params": [{
    "name": "height",
    "value": 20,
    "bind": {"input": "range", "min": 1, "max": 100, "step": 1}
  },{
    "name": "innerBarSize",
    "expr": "height/2"
  }],
  "encoding": {
    "x": {
      "type": "quantitative",
      "scale": {"nice": false},
      "title": null
    }
  },
  "layer": [{
    "mark": {"type": "bar", "color": "#eee", "size": {"expr": "height"}},
    "encoding": {"x": {"field": "ranges[2]"}}
  },{
    "mark": {"type": "bar", "color": "#ddd", "size": {"expr": "height"}},
    "encoding": {"x": {"field": "ranges[1]"}}
  },{
    "mark": {"type": "bar", "color": "#ccc", "size": {"expr": "height"}},
    "encoding": {"x": {"field": "ranges[0]"}}
  },{
    "mark": {"type": "bar", "color": "lightsteelblue", "size": {"expr": "innerBarSize"}},
    "encoding": {"x": {"field": "measures[1]"}}
  },{
    "mark": {"type": "bar", "color": "steelblue", "size": {"expr": "innerBarSize"}},
    "encoding": {"x": {"field": "measures[0]"}}
  },{
    "mark": {"type": "tick", "color": "black", "size": {"expr": "height"}},
    "encoding": {"x": {"field": "markers[0]"}}
  }],
  "config": {"tick": {"thickness": 2}}
}
*/
