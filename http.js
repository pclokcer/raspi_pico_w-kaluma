const http = require('http')

module.exports = () => {
  var message = '<h1>Hello</h1>'
  var port = 80

  var server = http.createServer((req, res) => {
    console.log('Request path: ' + req.url)
    res.writeHead(200, 'OK', {
      'Content-Type': 'text/html',
      'Content-Length': message.length,
    })
    res.write(message)
    res.end()
  })

  try {
    server.listen(port, function () {
      console.log('HTTP server listening on port: ' + port)
      require('./led')()
    })
  } catch (error) {
    console.log('http ->', error)
  }
}