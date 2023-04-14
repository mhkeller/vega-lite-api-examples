import * as vl from 'vega-lite-api';

// Write a Node.JS function that uses the vega-lite-api library to generate the vega-lite JSON spec below. The function should return the vega-lite-api object. Call the function `chart` and export as the es6 module default export.

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Likert Scale Ratings Distributions and Medians. (Figure 9 from @jhoffswell and @zcliu's ['Interactive Repair of Tables Extracted from PDF Documents on Mobile Devices'](https://idl.cs.washington.edu/files/2019-InteractiveTableRepair-CHI.pdf))",
  "datasets": {
    "medians": [
      {
        "name": "Identify Errors:",
        "median": 1.999976,
        "lo": "Easy",
        "hi": "Hard"
      },
      {"name": "Fix Errors:", "median": 2, "lo": "Easy", "hi": "Hard"},
      {
        "name": "Easier to Fix:",
        "median": 1.999969,
        "lo": "Toolbar",
        "hi": "Gesture"
      },
      {
        "name": "Faster to Fix:",
        "median": 2.500045,
        "lo": "Toolbar",
        "hi": "Gesture"
      },
      {
        "name": "Easier on Phone:",
        "median": 1.500022,
        "lo": "Toolbar",
        "hi": "Gesture"
      },
      {
        "name": "Easier on Tablet:",
        "median": 2.99998,
        "lo": "Toolbar",
        "hi": "Gesture"
      },
      {
        "name": "Device Preference:",
        "median": 4.500007,
        "lo": "Phone",
        "hi": "Tablet"
      }
    ],
    "values": [
      {"value": "P1", "name": "Participant ID", "id": "P1"},
      {"value": 2, "name": "Identify Errors:", "id": "P1"},
      {"value": 2, "name": "Fix Errors:", "id": "P1"},
      {"value": 3, "name": "Easier to Fix:", "id": "P1"},
      {"value": 4, "name": "Faster to Fix:", "id": "P1"},
      {"value": 2, "name": "Easier on Phone:", "id": "P1"},
      {"value": 5, "name": "Easier on Tablet:", "id": "P1"},
      {"value": 5, "name": "Device Preference:", "id": "P1"},
      {"value": 1, "name": "Tablet_First", "id": "P1"},
      {"value": 1, "name": "Toolbar_First", "id": "P1"},
      {"value": "P2", "name": "Participant ID", "id": "P2"},
      {"value": 2, "name": "Identify Errors:", "id": "P2"},
      {"value": 3, "name": "Fix Errors:", "id": "P2"},
      {"value": 4, "name": "Easier to Fix:", "id": "P2"},
      {"value": 5, "name": "Faster to Fix:", "id": "P2"},
      {"value": 5, "name": "Easier on Phone:", "id": "P2"},
      {"value": 5, "name": "Easier on Tablet:", "id": "P2"},
      {"value": 5, "name": "Device Preference:", "id": "P2"},
      {"value": 1, "name": "Tablet_First", "id": "P2"},
      {"value": 1, "name": "Toolbar_First", "id": "P2"},
      {"value": "P3", "name": "Participant ID", "id": "P3"},
      {"value": 2, "name": "Identify Errors:", "id": "P3"},
      {"value": 2, "name": "Fix Errors:", "id": "P3"},
      {"value": 2, "name": "Easier to Fix:", "id": "P3"},
      {"value": 1, "name": "Faster to Fix:", "id": "P3"},
      {"value": 2, "name": "Easier on Phone:", "id": "P3"},
      {"value": 1, "name": "Easier on Tablet:", "id": "P3"},
      {"value": 5, "name": "Device Preference:", "id": "P3"},
      {"value": 1, "name": "Tablet_First", "id": "P3"},
      {"value": 0, "name": "Toolbar_First", "id": "P3"},
      {"value": "P4", "name": "Participant ID", "id": "P4"},
      {"value": 3, "name": "Identify Errors:", "id": "P4"},
      {"value": 3, "name": "Fix Errors:", "id": "P4"},
      {"value": 2, "name": "Easier to Fix:", "id": "P4"},
      {"value": 2, "name": "Faster to Fix:", "id": "P4"},
      {"value": 4, "name": "Easier on Phone:", "id": "P4"},
      {"value": 1, "name": "Easier on Tablet:", "id": "P4"},
      {"value": 5, "name": "Device Preference:", "id": "P4"},
      {"value": 1, "name": "Tablet_First", "id": "P4"},
      {"value": 0, "name": "Toolbar_First", "id": "P4"},
      {"value": "P5", "name": "Participant ID", "id": "P5"},
      {"value": 2, "name": "Identify Errors:", "id": "P5"},
      {"value": 2, "name": "Fix Errors:", "id": "P5"},
      {"value": 4, "name": "Easier to Fix:", "id": "P5"},
      {"value": 4, "name": "Faster to Fix:", "id": "P5"},
      {"value": 4, "name": "Easier on Phone:", "id": "P5"},
      {"value": 5, "name": "Easier on Tablet:", "id": "P5"},
      {"value": 5, "name": "Device Preference:", "id": "P5"},
      {"value": 0, "name": "Tablet_First", "id": "P5"},
      {"value": 1, "name": "Toolbar_First", "id": "P5"},
      {"value": "P6", "name": "Participant ID", "id": "P6"},
      {"value": 1, "name": "Identify Errors:", "id": "P6"},
      {"value": 3, "name": "Fix Errors:", "id": "P6"},
      {"value": 3, "name": "Easier to Fix:", "id": "P6"},
      {"value": 4, "name": "Faster to Fix:", "id": "P6"},
      {"value": 4, "name": "Easier on Phone:", "id": "P6"},
      {"value": 4, "name": "Easier on Tablet:", "id": "P6"},
      {"value": 4, "name": "Device Preference:", "id": "P6"},
      {"value": 0, "name": "Tablet_First", "id": "P6"},
      {"value": 1, "name": "Toolbar_First", "id": "P6"},
      {"value": "P7", "name": "Participant ID", "id": "P7"},
      {"value": 2, "name": "Identify Errors:", "id": "P7"},
      {"value": 3, "name": "Fix Errors:", "id": "P7"},
      {"value": 4, "name": "Easier to Fix:", "id": "P7"},
      {"value": 5, "name": "Faster to Fix:", "id": "P7"},
      {"value": 3, "name": "Easier on Phone:", "id": "P7"},
      {"value": 2, "name": "Easier on Tablet:", "id": "P7"},
      {"value": 4, "name": "Device Preference:", "id": "P7"},
      {"value": 0, "name": "Tablet_First", "id": "P7"},
      {"value": 0, "name": "Toolbar_First", "id": "P7"},
      {"value": "P8", "name": "Participant ID", "id": "P8"},
      {"value": 3, "name": "Identify Errors:", "id": "P8"},
      {"value": 1, "name": "Fix Errors:", "id": "P8"},
      {"value": 2, "name": "Easier to Fix:", "id": "P8"},
      {"value": 4, "name": "Faster to Fix:", "id": "P8"},
      {"value": 2, "name": "Easier on Phone:", "id": "P8"},
      {"value": 5, "name": "Easier on Tablet:", "id": "P8"},
      {"value": 5, "name": "Device Preference:", "id": "P8"},
      {"value": 0, "name": "Tablet_First", "id": "P8"},
      {"value": 0, "name": "Toolbar_First", "id": "P8"},
      {"value": "P9", "name": "Participant ID", "id": "P9"},
      {"value": 2, "name": "Identify Errors:", "id": "P9"},
      {"value": 3, "name": "Fix Errors:", "id": "P9"},
      {"value": 2, "name": "Easier to Fix:", "id": "P9"},
      {"value": 4, "name": "Faster to Fix:", "id": "P9"},
      {"value": 1, "name": "Easier on Phone:", "id": "P9"},
      {"value": 4, "name": "Easier on Tablet:", "id": "P9"},
      {"value": 4, "name": "Device Preference:", "id": "P9"},
      {"value": 1, "name": "Tablet_First", "id": "P9"},
      {"value": 1, "name": "Toolbar_First", "id": "P9"},
      {"value": "P10", "name": "Participant ID", "id": "P10"},
      {"value": 2, "name": "Identify Errors:", "id": "P10"},
      {"value": 2, "name": "Fix Errors:", "id": "P10"},
      {"value": 1, "name": "Easier to Fix:", "id": "P10"},
      {"value": 1, "name": "Faster to Fix:", "id": "P10"},
      {"value": 1, "name": "Easier on Phone:", "id": "P10"},
      {"value": 1, "name": "Easier on Tablet:", "id": "P10"},
      {"value": 5, "name": "Device Preference:", "id": "P10"},
      {"value": 1, "name": "Tablet_First", "id": "P10"},
      {"value": 1, "name": "Toolbar_First", "id": "P10"},
      {"value": "P11", "name": "Participant ID", "id": "P11"},
      {"value": 2, "name": "Identify Errors:", "id": "P11"},
      {"value": 2, "name": "Fix Errors:", "id": "P11"},
      {"value": 1, "name": "Easier to Fix:", "id": "P11"},
      {"value": 1, "name": "Faster to Fix:", "id": "P11"},
      {"value": 1, "name": "Easier on Phone:", "id": "P11"},
      {"value": 1, "name": "Easier on Tablet:", "id": "P11"},
      {"value": 4, "name": "Device Preference:", "id": "P11"},
      {"value": 1, "name": "Tablet_First", "id": "P11"},
      {"value": 0, "name": "Toolbar_First", "id": "P11"},
      {"value": "P12", "name": "Participant ID", "id": "P12"},
      {"value": 1, "name": "Identify Errors:", "id": "P12"},
      {"value": 3, "name": "Fix Errors:", "id": "P12"},
      {"value": 2, "name": "Easier to Fix:", "id": "P12"},
      {"value": 3, "name": "Faster to Fix:", "id": "P12"},
      {"value": 1, "name": "Easier on Phone:", "id": "P12"},
      {"value": 3, "name": "Easier on Tablet:", "id": "P12"},
      {"value": 3, "name": "Device Preference:", "id": "P12"},
      {"value": 0, "name": "Tablet_First", "id": "P12"},
      {"value": 1, "name": "Toolbar_First", "id": "P12"},
      {"value": "P13", "name": "Participant ID", "id": "P13"},
      {"value": 2, "name": "Identify Errors:", "id": "P13"},
      {"value": 2, "name": "Fix Errors:", "id": "P13"},
      {"value": 1, "name": "Easier to Fix:", "id": "P13"},
      {"value": 1, "name": "Faster to Fix:", "id": "P13"},
      {"value": 1, "name": "Easier on Phone:", "id": "P13"},
      {"value": 1, "name": "Easier on Tablet:", "id": "P13"},
      {"value": 5, "name": "Device Preference:", "id": "P13"},
      {"value": 0, "name": "Tablet_First", "id": "P13"},
      {"value": 0, "name": "Toolbar_First", "id": "P13"},
      {"value": "P14", "name": "Participant ID", "id": "P14"},
      {"value": 3, "name": "Identify Errors:", "id": "P14"},
      {"value": 3, "name": "Fix Errors:", "id": "P14"},
      {"value": 2, "name": "Easier to Fix:", "id": "P14"},
      {"value": 2, "name": "Faster to Fix:", "id": "P14"},
      {"value": 1, "name": "Easier on Phone:", "id": "P14"},
      {"value": 1, "name": "Easier on Tablet:", "id": "P14"},
      {"value": 1, "name": "Device Preference:", "id": "P14"},
      {"value": 1, "name": "Tablet_First", "id": "P14"},
      {"value": 1, "name": "Toolbar_First", "id": "P14"},
      {"value": "P15", "name": "Participant ID", "id": "P15"},
      {"value": 4, "name": "Identify Errors:", "id": "P15"},
      {"value": 5, "name": "Fix Errors:", "id": "P15"},
      {"value": 1, "name": "Easier to Fix:", "id": "P15"},
      {"value": 1, "name": "Faster to Fix:", "id": "P15"},
      {"value": 1, "name": "Easier on Phone:", "id": "P15"},
      {"value": 1, "name": "Easier on Tablet:", "id": "P15"},
      {"value": 5, "name": "Device Preference:", "id": "P15"},
      {"value": 1, "name": "Tablet_First", "id": "P15"},
      {"value": 0, "name": "Toolbar_First", "id": "P15"},
      {"value": "P16", "name": "Participant ID", "id": "P16"},
      {"value": 1, "name": "Identify Errors:", "id": "P16"},
      {"value": 3, "name": "Fix Errors:", "id": "P16"},
      {"value": 2, "name": "Easier to Fix:", "id": "P16"},
      {"value": 2, "name": "Faster to Fix:", "id": "P16"},
      {"value": 1, "name": "Easier on Phone:", "id": "P16"},
      {"value": 4, "name": "Easier on Tablet:", "id": "P16"},
      {"value": 5, "name": "Device Preference:", "id": "P16"},
      {"value": 0, "name": "Tablet_First", "id": "P16"},
      {"value": 1, "name": "Toolbar_First", "id": "P16"},
      {"value": "P17", "name": "Participant ID", "id": "P17"},
      {"value": 3, "name": "Identify Errors:", "id": "P17"},
      {"value": 2, "name": "Fix Errors:", "id": "P17"},
      {"value": 2, "name": "Easier to Fix:", "id": "P17"},
      {"value": 2, "name": "Faster to Fix:", "id": "P17"},
      {"value": 1, "name": "Easier on Phone:", "id": "P17"},
      {"value": 3, "name": "Easier on Tablet:", "id": "P17"},
      {"value": 2, "name": "Device Preference:", "id": "P17"},
      {"value": 0, "name": "Tablet_First", "id": "P17"},
      {"value": 0, "name": "Toolbar_First", "id": "P17"}
    ]
  },
  "data": {"name": "medians"},
  "title": "Questionnaire Ratings",
  "width": 250,
  "height": 175,
  "view": {"stroke": null},
  "layer": [
    {
      "mark": "circle",
      "data": {"name": "values"},
      "encoding": {
        "y": {
          "field": "name",
          "type": "nominal",
          "sort": null,
          "axis": {
            "domain": false,
            "offset": 50,
            "labelFontWeight": "bold",
            "ticks": false,
            "grid": true,
            "title": null
          }
        },
        "x": {
          "type": "quantitative",
          "scale": {"domain": [0, 6]},
          "axis": {"grid": false, "values": [1, 2, 3, 4, 5], "title": null},
          "field": "value"
        },
        "size": {
          "aggregate": "count",
          "type": "quantitative",
          "title": "Number of Ratings",
          "legend": {"offset": 75}
        },
        "color": {"value": "#6EB4FD"}
      },
      "transform": [
        {"filter": "datum.name != 'Toolbar_First'"},
        {"filter": "datum.name != 'Tablet_First'"},
        {"filter": "datum.name != 'Participant ID'"}
      ]
    },
    {
      "mark": "tick",
      "encoding": {
        "y": {
          "field": "name",
          "type": "nominal",
          "sort": null,
          "axis": {
            "domain": false,
            "offset": 50,
            "labelFontWeight": "bold",
            "ticks": false,
            "grid": true,
            "title": null
          }
        },
        "x": {
          "type": "quantitative",
          "scale": {"domain": [0, 6]},
          "axis": {"grid": false, "values": [1, 2, 3, 4, 5], "title": null},
          "field": "median"
        },
        "color": {"value": "black"}
      }
    },
    {
      "mark": {"type": "text", "x": -5, "align": "right"},
      "encoding": {
        "y": {
          "field": "name",
          "type": "nominal",
          "sort": null,
          "axis": {
            "domain": false,
            "offset": 50,
            "labelFontWeight": "bold",
            "ticks": false,
            "grid": true,
            "title": null
          }
        },
        "text": {"field": "lo"}
      }
    },
    {
      "mark": {"type": "text", "x": 255, "align": "left"},
      "encoding": {
        "y": {
          "field": "name",
          "type": "nominal",
          "sort": null,
          "axis": {
            "domain": false,
            "offset": 50,
            "labelFontWeight": "bold",
            "ticks": false,
            "grid": true,
            "title": null
          }
        },
        "text": {"field": "hi"}
      }
    }
  ]
}
*/
