
var assert = require('assert')

var Influx = require('..')

var influx = Influx()

after(function (done) {
  setTimeout(done, 100)
})

it('should write a single document', function () {
  influx.write('lol', {
    'a': 1
  })
})

it('should write multiple documents', function () {
  influx.write('lol', [
    {
      'a': 2
    }, {
      'a': 3
    }
  ])
})
