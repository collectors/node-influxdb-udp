
# node-influxdb-udp

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Dependency Status][david-image]][david-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]
[![Gittip][gittip-image]][gittip-url]

UDP-based InfluxDB writing utility similar to [influx-udp](https://www.npmjs.com/package/influx-udp),
but with a slightly different API.

## API

### var influx = new Influx(options)

```js
var Influx = require('influxdb-udp');
var influx = new Influx({

})
```

Options:

- `port`
- `host`

### influx.write(name, data)

Write to a series with a `name` with `data`.
`data` can either be a single hash object or an array of them.

```js
influx.write('my_logs', {
  count: 1
})

influx.write('my_logs', [
  {
    count: 1
  },
  {
    count: 2
  }
])
```

Note that when writing multiple data points,
an intersection of all the columns will be used.

[gitter-image]: https://badges.gitter.im/jonathanong/node-influxdb-udp.png
[gitter-url]: https://gitter.im/jonathanong/node-influxdb-udp
[npm-image]: https://img.shields.io/npm/v/node-influxdb-udp.svg?style=flat-square
[npm-url]: https://npmjs.org/package/node-influxdb-udp
[github-tag]: http://img.shields.io/github/tag/jonathanong/node-influxdb-udp.svg?style=flat-square
[github-url]: https://github.com/jonathanong/node-influxdb-udp/tags
[travis-image]: https://img.shields.io/travis/jonathanong/node-influxdb-udp.svg?style=flat-square
[travis-url]: https://travis-ci.org/jonathanong/node-influxdb-udp
[coveralls-image]: https://img.shields.io/coveralls/jonathanong/node-influxdb-udp.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/jonathanong/node-influxdb-udp
[david-image]: http://img.shields.io/david/jonathanong/node-influxdb-udp.svg?style=flat-square
[david-url]: https://david-dm.org/jonathanong/node-influxdb-udp
[license-image]: http://img.shields.io/npm/l/node-influxdb-udp.svg?style=flat-square
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/node-influxdb-udp.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/node-influxdb-udp
[gittip-image]: https://img.shields.io/gratipay/jonathanong.svg?style=flat-square
[gittip-url]: https://gratipay.com/jonathanong/
