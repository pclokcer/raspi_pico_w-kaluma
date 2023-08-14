const { PicoCYW43 } = require('pico_cyw43')
const pico_cyw43 = new PicoCYW43()

module.exports = () => {
  // Blink on-board LED
  setInterval(() => {
    if (pico_cyw43.getGpio(0)) {
      pico_cyw43.putGpio(0, false) // turn-off LED
    } else {
      pico_cyw43.putGpio(0, true) // turn-on LED
    }
  }, 1000)
}