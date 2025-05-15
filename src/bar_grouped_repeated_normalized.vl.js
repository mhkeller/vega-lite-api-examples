import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
	const layer1 = vl
		.markBar()
		.name('child__layer_Worldwide_Gross')
		.encode(
			vl.x().fieldN('Major Genre'),
			vl
				.y()
				.aggregate('sum')
				.fieldQ('Worldwide Gross')
				.title('Total Gross'),
			vl
				.color()
				.datum('Worldwide Gross')
				.type('nominal')
				.title('Gross'),
			vl.xOffset().datum('Worldwide Gross').type('nominal')
		);

	const layer2 = vl
		.markBar()
		.name('child__layer_US_Gross')
		.encode(
			vl.x().fieldN('Major Genre'),
			vl
				.y()
				.aggregate('sum')
				.fieldQ('US Gross')
				.title('Total Gross'),
			vl
				.color()
				.datum('US Gross')
				.type('nominal')
				.title('Gross'),
			vl.xOffset().datum('US Gross').type('nominal')
		);
	/**
     *
     *  {
      "mark": "bar",
      "encoding": {
        "x": {"field": "Major Genre", "type": "nominal"},
        "y": {
          "aggregate": "sum",
          "field": "US Gross",
          "type": "quantitative",
          "title": "Total Gross"
        },
        "color": {"datum": "US Gross", "title": "Gross", "type": "nominal"},
        "xOffset": {"datum": "US Gross", "type": "nominal"}
      },
      "name": "child__layer_US_Gross"
    }
     */
	return vl
		.layer(layer1, layer2)
		.data('data/movies.json')
		.config({ mark: { invalid: null } })
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/movies.json"},
  "config": {"mark": {"invalid": null}},
  "layer": [
    {
      "mark": "bar",
      "encoding": {
        "x": {"field": "Major Genre", "type": "nominal"},
        "y": {
          "aggregate": "sum",
          "field": "Worldwide Gross",
          "type": "quantitative",
          "title": "Total Gross"
        },
        "color": {
          "datum": "Worldwide Gross",
          "title": "Gross",
          "type": "nominal"
        },
        "xOffset": {"datum": "Worldwide Gross", "type": "nominal"}
      },
      "name": "child__layer_Worldwide_Gross"
    },
    {
      "mark": "bar",
      "encoding": {
        "x": {"field": "Major Genre", "type": "nominal"},
        "y": {
          "aggregate": "sum",
          "field": "US Gross",
          "type": "quantitative",
          "title": "Total Gross"
        },
        "color": {"datum": "US Gross", "title": "Gross", "type": "nominal"},
        "xOffset": {"datum": "US Gross", "type": "nominal"}
      },
      "name": "child__layer_US_Gross"
    }
  ]
}
*/
