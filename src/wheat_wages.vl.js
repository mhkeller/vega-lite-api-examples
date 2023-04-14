import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 * The function should return the vega-lite-api object.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "width": 900,
  "height": 400,
  "data": { "url": "data/wheat.json"},
  "transform": [{"calculate": "+datum.year + 5", "as": "year_end"}],
  "encoding": {
    "y": {
      "type": "quantitative",
      "axis": { "zindex": 1 }
    },
    "x": {
      "type": "quantitative",
      "axis": {"tickCount": 5, "format": "d"}
    }
  },
  "layer": [
    {
      "mark": {"type": "bar", "fill": "#aaa", "stroke": "#999"},
      "encoding": {
        "x": {"field": "year", "bin":"binned"},
        "x2": {"field": "year_end"},
        "y": {"field": "wheat"}
      }
    },
    {
      "data": {
        "values": [
          { "year": "1600" },
          { "year": "1650" },
          { "year": "1700" },
          { "year": "1750" },
          { "year": "1800" }
        ]
      },
      "mark": {
        "type": "rule",
        "stroke": "#000",
        "strokeWidth": 0.6,
        "opacity": 0.5
      },
      "encoding": {
        "x": {"field": "year"}
      }
    },
    {
      "mark": {
        "type": "area",
        "color": "#a4cedb",
        "opacity": 0.7
      },
      "encoding": {
        "x": {"field": "year"},
        "y": {"field": "wages"}
      }
    },
    {
      "mark": {"type": "line", "color": "#000", "opacity": 0.7},
      "encoding": {
        "x": {"field": "year"},
        "y": {"field": "wages"}
      }
    },
    {
      "mark": {"type": "line", "yOffset": -2, "color": "#EE8182"},
      "encoding": {
        "x": {"field": "year"},
        "y": {"field": "wages"}
      }
    },
    {
      "data": {"url": "data/monarchs.json"},
      "transform": [
        { "calculate": "((!datum.commonwealth && datum.index % 2) ? -1: 1) * 2 + 95", "as": "offset" },
        { "calculate": "95", "as": "y" }
      ],
      "mark": {"type": "rect", "stroke": "#000"},
      "encoding": {
        "x": {"field": "start"},
        "x2": {"field": "end"},
        "y": {"field": "y"},
        "y2": { "field": "offset" },
        "fill": {
          "field": "commonwealth",
          "scale": { "range": ["black", "white"] },
          "legend": null
        }
      }
    },
    {
      "data": {"url": "data/monarchs.json"},
      "transform": [
        { "calculate": "((!datum.commonwealth && datum.index % 2) ? -1: 1) + 95", "as": "off2" },
        { "calculate": "+datum.start + (+datum.end - +datum.start)/2", "as": "x"}
      ],
      "mark": {
        "type": "text",
        "yOffset": 16,
        "fontSize": 9,
        "baseline": "bottom",
        "fontStyle": "italic"
      },
      "encoding": {
        "x": {"field": "x"},
        "y": {"field": "off2"},
        "text": {"field": "name"}
      }
    }
  ],
  "config": {
    "axis": {
      "title": null,
      "gridColor": "white",
      "gridOpacity": 0.25,
      "domain": false
    },
    "view": { "stroke": "transparent" }
  }
}
*/
