import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

/*
{
  "data": {"url": "data/penguins.json"},
  "align": "all",
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "columns": 4,
  "concat": [
    {
      "width": 150,
      "height": 150,
      "mark": "point",
      "encoding": {
        "x": {
          "field": "Body Mass (g)",
          "type": "quantitative",
          "scale": {"zero": false}
        },
        "y": {
          "field": "Beak Length (mm)",
          "type": "quantitative",
          "scale": {"zero": false}
        },
        "color": {"field": "Species", "type": "nominal"}
      },
      "name": "child__row_Beak_Length__mm_column_Body_Mass__g_"
    },
    {
      "width": 150,
      "height": 150,
      "mark": "point",
      "encoding": {
        "x": {
          "field": "Flipper Length (mm)",
          "type": "quantitative",
          "scale": {"zero": false}
        },
        "y": {
          "field": "Beak Length (mm)",
          "type": "quantitative",
          "scale": {"zero": false}
        },
        "color": {"field": "Species", "type": "nominal"}
      },
      "name": "child__row_Beak_Length__mm_column_Flipper_Length__mm_"
    },
    {
      "width": 150,
      "height": 150,
      "mark": "point",
      "encoding": {
        "x": {
          "field": "Beak Depth (mm)",
          "type": "quantitative",
          "scale": {"zero": false}
        },
        "y": {
          "field": "Beak Length (mm)",
          "type": "quantitative",
          "scale": {"zero": false}
        },
        "color": {"field": "Species", "type": "nominal"}
      },
      "name": "child__row_Beak_Length__mm_column_Beak_Depth__mm_"
    },
    {
      "width": 150,
      "height": 150,
      "mark": "point",
      "encoding": {
        "x": {
          "field": "Beak Length (mm)",
          "type": "quantitative",
          "scale": {"zero": false}
        },
        "y": {
          "field": "Beak Length (mm)",
          "type": "quantitative",
          "scale": {"zero": false}
        },
        "color": {"field": "Species", "type": "nominal"}
      },
      "name": "child__row_Beak_Length__mm_column_Beak_Length__mm_"
    },
    {
      "width": 150,
      "height": 150,
      "mark": "point",
      "encoding": {
        "x": {
          "field": "Body Mass (g)",
          "type": "quantitative",
          "scale": {"zero": false}
        },
        "y": {
          "field": "Beak Depth (mm)",
          "type": "quantitative",
          "scale": {"zero": false}
        },
        "color": {"field": "Species", "type": "nominal"}
      },
      "name": "child__row_Beak_Depth__mm_column_Body_Mass__g_"
    },
    {
      "width": 150,
      "height": 150,
      "mark": "point",
      "encoding": {
        "x": {
          "field": "Flipper Length (mm)",
          "type": "quantitative",
          "scale": {"zero": false}
        },
        "y": {
          "field": "Beak Depth (mm)",
          "type": "quantitative",
          "scale": {"zero": false}
        },
        "color": {"field": "Species", "type": "nominal"}
      },
      "name": "child__row_Beak_Depth__mm_column_Flipper_Length__mm_"
    },
    {
      "width": 150,
      "height": 150,
      "mark": "point",
      "encoding": {
        "x": {
          "field": "Beak Depth (mm)",
          "type": "quantitative",
          "scale": {"zero": false}
        },
        "y": {
          "field": "Beak Depth (mm)",
          "type": "quantitative",
          "scale": {"zero": false}
        },
        "color": {"field": "Species", "type": "nominal"}
      },
      "name": "child__row_Beak_Depth__mm_column_Beak_Depth__mm_"
    },
    {
      "width": 150,
      "height": 150,
      "mark": "point",
      "encoding": {
        "x": {
          "field": "Beak Length (mm)",
          "type": "quantitative",
          "scale": {"zero": false}
        },
        "y": {
          "field": "Beak Depth (mm)",
          "type": "quantitative",
          "scale": {"zero": false}
        },
        "color": {"field": "Species", "type": "nominal"}
      },
      "name": "child__row_Beak_Depth__mm_column_Beak_Length__mm_"
    },
    {
      "width": 150,
      "height": 150,
      "mark": "point",
      "encoding": {
        "x": {
          "field": "Body Mass (g)",
          "type": "quantitative",
          "scale": {"zero": false}
        },
        "y": {
          "field": "Flipper Length (mm)",
          "type": "quantitative",
          "scale": {"zero": false}
        },
        "color": {"field": "Species", "type": "nominal"}
      },
      "name": "child__row_Flipper_Length__mm_column_Body_Mass__g_"
    },
    {
      "width": 150,
      "height": 150,
      "mark": "point",
      "encoding": {
        "x": {
          "field": "Flipper Length (mm)",
          "type": "quantitative",
          "scale": {"zero": false}
        },
        "y": {
          "field": "Flipper Length (mm)",
          "type": "quantitative",
          "scale": {"zero": false}
        },
        "color": {"field": "Species", "type": "nominal"}
      },
      "name": "child__row_Flipper_Length__mm_column_Flipper_Length__mm_"
    },
    {
      "width": 150,
      "height": 150,
      "mark": "point",
      "encoding": {
        "x": {
          "field": "Beak Depth (mm)",
          "type": "quantitative",
          "scale": {"zero": false}
        },
        "y": {
          "field": "Flipper Length (mm)",
          "type": "quantitative",
          "scale": {"zero": false}
        },
        "color": {"field": "Species", "type": "nominal"}
      },
      "name": "child__row_Flipper_Length__mm_column_Beak_Depth__mm_"
    },
    {
      "width": 150,
      "height": 150,
      "mark": "point",
      "encoding": {
        "x": {
          "field": "Beak Length (mm)",
          "type": "quantitative",
          "scale": {"zero": false}
        },
        "y": {
          "field": "Flipper Length (mm)",
          "type": "quantitative",
          "scale": {"zero": false}
        },
        "color": {"field": "Species", "type": "nominal"}
      },
      "name": "child__row_Flipper_Length__mm_column_Beak_Length__mm_"
    },
    {
      "width": 150,
      "height": 150,
      "mark": "point",
      "encoding": {
        "x": {
          "field": "Body Mass (g)",
          "type": "quantitative",
          "scale": {"zero": false}
        },
        "y": {
          "field": "Body Mass (g)",
          "type": "quantitative",
          "scale": {"zero": false}
        },
        "color": {"field": "Species", "type": "nominal"}
      },
      "name": "child__row_Body_Mass__g_column_Body_Mass__g_"
    },
    {
      "width": 150,
      "height": 150,
      "mark": "point",
      "encoding": {
        "x": {
          "field": "Flipper Length (mm)",
          "type": "quantitative",
          "scale": {"zero": false}
        },
        "y": {
          "field": "Body Mass (g)",
          "type": "quantitative",
          "scale": {"zero": false}
        },
        "color": {"field": "Species", "type": "nominal"}
      },
      "name": "child__row_Body_Mass__g_column_Flipper_Length__mm_"
    },
    {
      "width": 150,
      "height": 150,
      "mark": "point",
      "encoding": {
        "x": {
          "field": "Beak Depth (mm)",
          "type": "quantitative",
          "scale": {"zero": false}
        },
        "y": {
          "field": "Body Mass (g)",
          "type": "quantitative",
          "scale": {"zero": false}
        },
        "color": {"field": "Species", "type": "nominal"}
      },
      "name": "child__row_Body_Mass__g_column_Beak_Depth__mm_"
    },
    {
      "width": 150,
      "height": 150,
      "mark": "point",
      "encoding": {
        "x": {
          "field": "Beak Length (mm)",
          "type": "quantitative",
          "scale": {"zero": false}
        },
        "y": {
          "field": "Body Mass (g)",
          "type": "quantitative",
          "scale": {"zero": false}
        },
        "color": {"field": "Species", "type": "nominal"}
      },
      "name": "child__row_Body_Mass__g_column_Beak_Length__mm_"
    }
  ]
}
*/
