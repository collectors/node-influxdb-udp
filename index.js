
var assert = require('assert')
var dgram = require('dgram')

module.exports = InfluxDBUDP

function InfluxDBUDP(options) {
  if (!(this instanceof InfluxDBUDP)) return new InfluxDBUDP(options)

  options = options || {}
  this.host = options.host || '127.0.0.1'
  this.port = options.port || 4444
  this.socket = dgram.createSocket('udp4')
}

InfluxDBUDP.prototype.write = function (name, data) {
  assert(typeof name === 'string')
  assert(typeof data === 'object')

  var result = {
    name: name,
  }

  var columns = result.columns = []
  var points = result.points = []

  // object, so only one point
  if (!Array.isArray(data)) {
    columns = result.columns = Object.keys(data)
    var point = new Array(columns.length)
    points.push(point)
    for (var i = 0; i < columns.length; i++) point[i] = data[columns[i]]
    this._write(result)
    return
  }

  // get all the columns
  columns = result.columns = getColumns(data)

  // set all the points
  for (var i = 0; i < data.length; i++) {
    var point = []
    points.push(point)
    for (var j = 0; j < columns.length; j++) {
      point.push(data[i][columns[j]])
    }
  }

  // write to db
  this._write(result)
}

InfluxDBUDP.prototype._write = function (result) {
  // messages must be wrapped in arrays
  // TODO: batch them, maybe. does it matter?
  var message = new Buffer(JSON.stringify([result]))
  this.socket.send(message, 0, message.length, this.port, this.host)
}

function getColumns(data) {
  var columns = Object.create(null)
  for (var i = 0; i < data.length; i++) {
    var keys = Object.keys(data[i])
    for (var j = 0; j < keys.length; j++) {
      columns[keys[j]] = true
    }
  }
  return Object.keys(columns)
}
