
// Background Service Worker for ChaosUI: Page Escape

chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === 'install') {
    console.log('[ChaosUI] Extension installed successfully.');
  }
});

// Relay messages if needed between popup and active tab
chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  if (message.type === 'PING') {
    sendResponse({ status: 'alive' });
  }
  return true;
});

export {};
