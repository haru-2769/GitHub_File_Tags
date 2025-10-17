console.log('Service Worker: GitHub File Tags Background Service is Running.');

chrome.runtime.onInstalled.addListener(() => {
  console.log(
    'Service Worker: Extension installed successfully. Version 0.1.0.',
  );
});
