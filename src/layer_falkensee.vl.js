import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 * The function should return the vega-lite-api object.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "The population of the German city of Falkensee over time",
  "width": 500,
  "data": {
    "values": [
      {"year": "1875", "population": 1309},
      {"year": "1890", "population": 1558},
      {"year": "1910", "population": 4512},
      {"year": "1925", "population": 8180},
      {"year": "1933", "population": 15915},
      {"year": "1939", "population": 24824},
      {"year": "1946", "population": 28275},
      {"year": "1950", "population": 29189},
      {"year": "1964", "population": 29881},
      {"year": "1971", "population": 26007},
      {"year": "1981", "population": 24029},
      {"year": "1985", "population": 23340},
      {"year": "1989", "population": 22307},
      {"year": "1990", "population": 22087},
      {"year": "1991", "population": 22139},
      {"year": "1992", "population": 22105},
      {"year": "1993", "population": 22242},
      {"year": "1994", "population": 22801},
      {"year": "1995", "population": 24273},
      {"year": "1996", "population": 25640},
      {"year": "1997", "population": 27393},
      {"year": "1998", "population": 29505},
      {"year": "1999", "population": 32124},
      {"year": "2000", "population": 33791},
      {"year": "2001", "population": 35297},
      {"year": "2002", "population": 36179},
      {"year": "2003", "population": 36829},
      {"year": "2004", "population": 37493},
      {"year": "2005", "population": 38376},
      {"year": "2006", "population": 39008},
      {"year": "2007", "population": 39366},
      {"year": "2008", "population": 39821},
      {"year": "2009", "population": 40179},
      {"year": "2010", "population": 40511},
      {"year": "2011", "population": 40465},
      {"year": "2012", "population": 40905},
      {"year": "2013", "population": 41258},
      {"year": "2014", "population": 41777}
    ],
    "format": {
      "parse": {"year": "date:'%Y'"}
    }
  },
  "layer": [
    {
      "mark": "rect",
      "data": {
        "values": [
          {
            "start": "1933",
            "end": "1945",
            "event": "Nazi Rule"
          },
          {
            "start": "1948",
            "end": "1989",
            "event": "GDR (East Germany)"
          }
        ],
        "format": {
          "parse": {"start": "date:'%Y'", "end": "date:'%Y'"}
        }
      },
      "encoding": {
        "x": {
          "field": "start",
          "timeUnit": "year"
        },
        "x2": {
          "field": "end",
          "timeUnit": "year"
        },
        "color": {"field": "event", "type": "nominal"}
      }
    },
    {
      "mark": "line",
      "encoding": {
        "x": {
          "field": "year",
          "timeUnit": "year",
          "title": "year (year)"
        },
        "y": {"field": "population", "type": "quantitative"},
        "color": {"value": "#333"}
      }
    },
    {
      "mark": "point",
      "encoding": {
        "x": {
          "field": "year",
          "timeUnit": "year"
        },
        "y": {"field": "population", "type": "quantitative"},
        "color": {"value": "#333"}
      }
    }
  ]
}
*/
