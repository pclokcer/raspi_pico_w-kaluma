/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

"use strict";
module.exports = require("wifi");

/***/ }),
/* 2 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const http = __webpack_require__(3)

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
      __webpack_require__(4)()
    })
  } catch (error) {
    console.log('http ->', error)
  }
}

/***/ }),
/* 3 */
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),
/* 4 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const { PicoCYW43 } = __webpack_require__(5)
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

/***/ }),
/* 5 */
/***/ ((module) => {

"use strict";
module.exports = require("pico_cyw43");

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
const ssid = 'test'
const pwd = 'testtest'
const addr = '192.168.1.10'
const port = 80

const { WiFi } = __webpack_require__(1)
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
        __webpack_require__(2)()
      }
    })
  } else {
    console.log('access point açılamadı')
  }
})
})();

/******/ })()
;