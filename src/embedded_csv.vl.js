import * as vl from 'vega-lite-api';

const vl = require('vega-lite-api');

function generateVegaLiteSpec() {
  const spec = vl
    .data({ values: 'a\n1\n2\n3\n4', format: { type: 'csv' } })
    .mark('point')
    .encode(
      vl.y().field('a').type('quantitative')
    )
    .toJSON();

  return spec;
}

const vegaLiteSpec = generateVegaLiteSpec();
console.log(JSON.stringify(vegaLiteSpec, null, 2));
