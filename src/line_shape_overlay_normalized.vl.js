import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
  return vl
    .layer(
      vl
        .markLine()
        .encode(
          vl.x().fieldT('date'),
          vl.y().fieldQ('price')
        ),
      vl
        .markPoint({ opacity: 1, filled: true })
        .encode(
          vl.x().fieldT('date'),
          vl.y().fieldQ('price'),
          vl.shape().value('square')
        )
    )
    .description("Google's stock price over time.")
    .data('data/stocks.csv')
    .transform({ filter: "datum.symbol==='GOOG'" })
    .toSpec();
}
