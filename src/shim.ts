import browser from "webextension-polyfill";

// IIFE to load an ESModule
(async () => {
  console.log("HII")
  const src = browser.runtime.getURL("src/content_module.js")
  await import(src)
})()
