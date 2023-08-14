const { WiFi } = require('wifi')
const wifi = new WiFi()

wifi.connect({ ssid: 'test', password: 'testtest' }, (err) => {
  if (err) {
    console.error(err)
  } else {
    require('./led')()
  }
})