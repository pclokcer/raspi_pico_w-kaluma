const net = require('net')

module.exports = () => {
  var server = net.createServer((c) => {
    // 'connection' listener.
    console.log('client connected')
    c.on('end', () => {
      console.log('client disconnected')
    })
    c.write('hello, world\r\n')
    c.end()
  })

  server.on('error', (err) => {
    throw err
  })
  try {
    server.listen(80, () => {
      console.log('server bound')
    })
  } catch (error) {
    console.log('tcp ->', error)
  }
}