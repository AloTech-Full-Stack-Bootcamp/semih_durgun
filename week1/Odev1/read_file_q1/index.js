const fs = require("fs");
const {
  AbortController,
} = require("abortcontroller-polyfill/dist/cjs-ponyfill");

const controller = new AbortController();
const signal = controller.signal;
fs.readFile("readme.json", { signal: signal }, (err, buf) => {
  console.log(`Dosya okunuyor...`);
});

// Dosya okumayı iptal etme
controller.abort();
console.log("Dosya okuma iptal edildi!");
