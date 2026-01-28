import * as vl from 'vega-lite-api';



/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
   "view": {"stroke": null},
  "description": "A simple chart with an image tooltip.",
  "data": {
    "values": [
      {"image": "data/ffox.png"},
      {"image": "data/gimp.png"},
      {"image": "data/7zip.png"}
    ]
  },
  "mark": "text",
  "encoding": {
    "text": {"field": "image"},
    "y": {"field": "image", "axis": null},
    "tooltip": [{"field": "image"}]
  }
}
*/

export default function chart() {
	const data = [
		{ image: 'data/ffox.png' },
		{ image: 'data/gimp.png' },
		{ image: 'data/7zip.png' }
	];

	return vl
		.markText()
		.view({ stroke: null })
		.description('A simple chart with an image tooltip.')
		.data({ values: data })
		.encode(
			vl.text().field('image'),
			vl.y().field('image').axis(null),
			vl.tooltip([{ field: 'image' }])
		)
		.toSpec();
}
