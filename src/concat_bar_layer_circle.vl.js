import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */


const vl = require('vega-lite-api');

function generateVegaLiteSpec() {
  return vl
    .data({ url: 'data/movies.json' })
    .vconcat(
      vl.layer(
        vl.markCircle({
          opacity: 0.4,
        })
        .encode(
          vl.x().bin({ maxbins: 10 }).field('IMDB Rating'),
          vl.y().bin({ maxbins: 10 }).field('Rotten Tomatoes Rating'),
          vl.size().aggregate('count').title('All Movies Count')
        ),
        vl.transform(
          vl.filter({ param: 'pts' })
        ),
        vl.markCircle()
        .encode(
          vl.x().bin({ maxbins: 10 }).field('IMDB Rating'),
          vl.y().bin({ maxbins: 10 }).field('Rotten Tomatoes Rating'),
          vl.size().aggregate('count').title('Selected Category Count')
        )
      )
      .resolve(vl.legend({ size: 'independent' })),
      vl.layer(
        vl.markBar({
          width: 330,
          height: 120,
        })
        .encode(
          vl.x().field('Major Genre').axis({ labelAngle: -40 }),
          vl.y().aggregate('count'),
          vl.color().condition(
            { param: 'pts', value: 'steelblue' },
            vl.value('grey')
          )
        )
      )
    )
    .toJSON();
}

const vegaLiteSpec = generateVegaLiteSpec();
console.log(JSON.stringify(vegaLiteSpec, null, 2));
