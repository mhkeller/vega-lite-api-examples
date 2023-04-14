import * as vl from 'vega-lite-api';

// Write a Node.JS function that uses the vega-lite-api library to generate the vega-lite JSON spec below. The function should return the vega-lite-api object. Call the function `chart` and export as the es6 module default export.

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "width": 400,
  "height": 200,
  "layer": [
    {
      "data": {"name": "falcon"},
      "mark": "line",
      "transform": [
        {"window": [{"op": "row_number", "as": "row"}]},
        {"calculate": "1000/datum.data", "as": "fps"},
        {"calculate": "'Falcon'", "as": "system"}
      ],
      "encoding": {
        "x": {
          "field": "row",
          "type": "quantitative",
          "title": "Trial",
          "scale": {"nice": false},
          "axis": {"grid": false}
        },
        "y": {
          "field": "fps",
          "title": "Frames Per Second (fps)",
          "axis": {"grid": false},
          "scale": {"type": "log"}
        },
        "color": {
          "field": "system",
          "type": "nominal",
          "title": "System",
          "legend": {"orient": "bottom-right"}
        },
        "size": {"value": 1}
      }
    },
    {
      "data": {"name": "square"},
      "mark": "line",
      "transform": [
        {"window": [{"op": "row_number", "as": "row"}]},
        {"calculate": "1000/datum.data", "as": "fps"},
        {"calculate": "'Square Crossfilter (3M)'", "as": "system"}
      ],
      "encoding": {
        "x": {
          "field": "row",
          "type": "quantitative",
          "title": "Trial",
          "scale": {"nice": false},
          "axis": {"grid": false}
        },
        "y": {
          "field": "fps",
          "title": "Frames Per Second (fps)",
          "axis": {"grid": false},
          "scale": {"type": "log"}
        },
        "color": {
          "field": "system",
          "type": "nominal",
          "title": "System",
          "legend": {"orient": "bottom-right"}
        },
        "size": {"value": 1}
      }
    }
  ],
  "datasets": {
    "falcon": [
      16.81999969482422,
      19.759998321533203,
      16.079999923706055,
      19.579999923706055,
      16.420000076293945,
      16.200000762939453,
      16.020000457763672,
      15.9399995803833,
      16.280000686645508,
      16.119998931884766,
      16.15999984741211,
      16.119998931884766,
      16.139999389648438,
      16.100000381469727,
      16.200000762939453,
      16.260000228881836,
      19.35999870300293,
      19.700000762939453,
      15.9399995803833,
      19.139999389648438,
      16.200000762939453,
      16.119998931884766,
      19.520000457763672,
      19.700000762939453,
      16.200000762939453,
      20.979999542236328,
      16.299999237060547,
      16.420000076293945,
      16.81999969482422,
      16.5,
      16.560001373291016,
      16.18000030517578,
      16.079999923706055,
      16.239999771118164,
      16.040000915527344,
      16.299999237060547,
      19.399999618530273,
      15.699999809265137,
      16.239999771118164,
      15.920000076293945,
      16.259998321533203,
      16.219999313354492,
      16.520000457763672,
      16.459999084472656,
      16.360000610351562,
      15.719999313354492,
      16.060001373291016,
      15.960000991821289,
      16.479999542236328,
      16.600000381469727,
      16.240001678466797,
      16.940000534057617,
      16.220001220703125,
      15.959999084472656,
      15.899999618530273,
      16.479999542236328,
      16.31999969482422,
      15.75999927520752,
      15.999998092651367,
      16.18000030517578,
      16.219999313354492,
      15.800000190734863,
      16.139999389648438,
      16.299999237060547,
      16.360000610351562,
      16.260000228881836,
      15.959999084472656,
      15.9399995803833,
      16.53999900817871,
      16.139999389648438,
      16.259998321533203,
      16.200000762939453,
      15.899999618530273,
      16.079999923706055,
      16.079999923706055,
      15.699999809265137,
      15.660000801086426,
      16.139999389648438,
      23.100000381469727,
      16.600000381469727,
      16.420000076293945,
      16.020000457763672,
      15.619999885559082,
      16.35999870300293,
      15.719999313354492,
      15.920001029968262,
      15.5600004196167,
      16.34000015258789,
      22.82000160217285,
      15.660000801086426,
      15.5600004196167,
      16,
      16,
      15.819999694824219,
      16.399999618530273,
      16.46000099182129,
      16.059999465942383,
      16.239999771118164,
      15.800000190734863,
      16.15999984741211,
      16.360000610351562,
      19.700000762939453,
      16.10000228881836,
      16.139999389648438,
      15.819999694824219,
      16.439998626708984,
      16.139999389648438,
      16.020000457763672,
      15.860000610351562,
      16.059999465942383,
      16.020000457763672,
      15.920000076293945,
      15.819999694824219,
      16.579999923706055,
      15.880000114440918,
      16.579999923706055,
      15.699999809265137,
      19.380001068115234,
      19.239999771118164,
      16,
      15.980000495910645,
      15.959999084472656,
      16.200000762939453,
      15.980000495910645,
      16.34000015258789,
      16.31999969482422,
      16.260000228881836,
      15.920000076293945,
      15.540000915527344,
      16.139999389648438,
      16.459999084472656,
      16.34000015258789,
      15.819999694824219,
      19.719999313354492,
      15.75999927520752,
      16.499998092651367,
      15.719999313354492,
      16.079999923706055,
      16.439998626708984,
      16.200000762939453,
      15.959999084472656,
      16,
      16.100000381469727,
      19.31999969482422,
      16.100000381469727,
      16.18000030517578,
      15.959999084472656,
      22.639999389648438,
      15.899999618530273,
      16.279998779296875,
      16.100000381469727,
      15.920000076293945,
      16.079999923706055,
      16.260000228881836,
      15.899999618530273,
      15.820001602172852,
      15.699999809265137,
      15.979998588562012,
      16.380001068115234,
      16.040000915527344,
      19.420000076293945,
      15.9399995803833,
      16.15999984741211,
      15.960000991821289,
      16.259998321533203,
      15.780000686645508,
      15.880000114440918,
      15.980000495910645,
      16.060001373291016,
      16.119998931884766,
      23.020000457763672,
      15.619999885559082,
      15.920000076293945,
      16.060001373291016,
      14.780000686645508,
      16.260000228881836,
      19.520000457763672,
      16.31999969482422,
      16.600000381469727,
      16.219999313354492,
      19.740001678466797,
      19.46000099182129,
      15.940000534057617,
      15.839999198913574,
      16.100000381469727,
      16.46000099182129,
      16.17999839782715,
      16.100000381469727,
      15.9399995803833,
      16.060001373291016,
      15.860000610351562,
      15.819999694824219,
      16.03999900817871,
      16.17999839782715,
      15.819999694824219,
      17.299999237060547,
      15.9399995803833,
      15.739999771118164,
      15.719999313354492,
      15.679998397827148,
      15.619999885559082,
      15.600000381469727,
      16.03999900817871,
      15.5,
      15.600001335144043,
      19.439998626708984,
      15.960000991821289,
      16.239999771118164,
      16.040000915527344,
      16.239999771118164
    ],
    "square": [
      24.200000762939453,
      17.899999618530273,
      15.800000190734863,
      58.400001525878906,
      151,
      2523.10009765625,
      245.3000030517578,
      136,
      72.30000305175781,
      55.70000076293945,
      42.400001525878906,
      37.70000076293945,
      30.100000381469727,
      30.100000381469727,
      21.799999237060547,
      20.600000381469727,
      21.799999237060547,
      17.600000381469727,
      18.200000762939453,
      21,
      941.7000122070312,
      177.39999389648438,
      2821.800048828125,
      359.20001220703125,
      318,
      217.10000610351562,
      126,
      69,
      57.79999923706055,
      45.29999923706055,
      35.599998474121094,
      29.100000381469727,
      23.799999237060547,
      44.20000076293945,
      17.700000762939453,
      17.700000762939453,
      15.699999809265137,
      27.799999237060547,
      22.799999237060547,
      3853.60009765625,
      91.5999984741211,
      181.39999389648438,
      476.29998779296875,
      265.8999938964844,
      254.60000610351562,
      2583.199951171875,
      124.80000305175781,
      73.19999694824219,
      56.400001525878906,
      48.70000076293945,
      41.599998474121094,
      21.100000381469727,
      20.299999237060547,
      21.299999237060547,
      18.299999237060547,
      17.100000381469727,
      19.5,
      828.2000122070312,
      162.1999969482422,
      217.89999389648438,
      205.5,
      197.60000610351562,
      2249.800048828125,
      103.0999984741211,
      71.69999694824219,
      57.599998474121094,
      41.400001525878906,
      34.5,
      22,
      20.5,
      21.700000762939453,
      18.299999237060547,
      17.299999237060547,
      19.399999618530273,
      666.7999877929688,
      214.89999389648438,
      212.3000030517578,
      125.80000305175781,
      67.69999694824219,
      56.099998474121094,
      45.79999923706055,
      38.29999923706055,
      33,
      35.400001525878906,
      22.700000762939453,
      19.399999618530273,
      19.899999618530273,
      24.100000381469727,
      19.299999237060547,
      21.299999237060547,
      3508.699951171875,
      204.10000610351562,
      125.4000015258789,
      65.30000305175781,
      60.79999923706055,
      44.099998474121094,
      36.29999923706055,
      30.5,
      28.600000381469727,
      16.5,
      18.600000381469727,
      23.700000762939453,
      22.299999237060547,
      17.600000381469727,
      19.200000762939453,
      448.79998779296875,
      124.4000015258789,
      66.5999984741211,
      53.5,
      51,
      45.20000076293945,
      28.399999618530273,
      29.200000762939453,
      26.700000762939453,
      25.899999618530273,
      18.100000381469727,
      17.600000381469727,
      20.100000381469727,
      25.200000762939453,
      3332,
      67.5,
      53.599998474121094,
      56.599998474121094,
      39.900001525878906,
      27.600000381469727,
      29.600000381469727,
      33.5,
      17.200000762939453,
      18.799999237060547,
      25.200000762939453,
      16.700000762939453,
      16.899999618530273,
      240.1999969482422,
      52.400001525878906,
      42.099998474121094,
      33.900001525878906,
      28,
      28.600000381469727,
      17.299999237060547,
      20,
      21,
      22.799999237060547,
      16.700000762939453,
      19.200000762939453,
      175.39999389648438,
      43.5,
      34.70000076293945,
      29.700000762939453,
      34.900001525878906,
      25.799999237060547,
      17.299999237060547,
      22.600000381469727,
      17.600000381469727,
      17.200000762939453,
      19.200000762939453,
      111.80000305175781,
      35.400001525878906,
      27.600000381469727,
      25.399999618530273,
      21.899999618530273,
      18.600000381469727,
      18.100000381469727,
      21.200000762939453,
      17.899999618530273,
      17,
      80.5999984741211,
      29.799999237060547,
      30.100000381469727,
      16,
      26.799999237060547,
      17.5,
      22.299999237060547,
      16.799999237060547,
      22.399999618530273,
      77.4000015258789,
      31,
      29.700000762939453,
      28.700000762939453,
      26,
      16.899999618530273,
      15.800000190734863,
      19,
      52.599998474121094,
      25.200000762939453,
      16.700000762939453,
      17.899999618530273,
      21,
      19.799999237060547,
      18.799999237060547,
      46.5,
      17.5,
      16.799999237060547,
      18.299999237060547,
      18.299999237060547,
      14.899999618530273,
      41,
      18.299999237060547,
      17.299999237060547,
      17,
      17.5,
      32.29999923706055,
      22.600000381469727,
      16.600000381469727,
      17.899999618530273,
      25.600000381469727,
      17.5,
      20.299999237060547,
      25.200000762939453,
      18.600000381469727,
      17.700000762939453
    ]
  }
}
*/
