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
          vl.x().fieldT('date').timeUnit({ unit: 'year' }),
          vl.y().aggregate('mean').fieldQ('price'),
          vl.color().fieldN('symbol')
        ),
      vl
        .markPoint({ opacity: 1, filled: true })
        .encode(
          vl.x().fieldT('date').timeUnit({ unit: 'year' }),
          vl.y().aggregate('mean').fieldQ('price'),
          vl.color().fieldN('symbol')
        )
    )
    .data('data/stocks.csv')
    .description('Stock prices of 5 Tech Companies over Time.')
    .toSpec();
}
