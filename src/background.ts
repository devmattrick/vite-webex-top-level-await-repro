import browser from "webextension-polyfill";

await fetch("https://example.com");

console.log("Hello from the background!");

browser.runtime.onInstalled.addListener((details) => {
  console.log("Extension installed:", details);
});
