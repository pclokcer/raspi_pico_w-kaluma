const ssid = 'test'
const pwd = 'testtest'
const addr = '192.168.1.10'
const port = 80

const { WiFi } = require('wifi')
const wifi = new WiFi()

wifi._dev.ap_mode({
  ssid: ssid,
  password: pwd,
}, (a) => {
  if (a === 0) {
    console.log('access point Başladı')

    wifi.connect((err, info) => {
      if (err) {
        console.error(err)
      } else {
        require('./http')()
      }
    })
  } else {
    console.log('access point açılamadı')
  }
})