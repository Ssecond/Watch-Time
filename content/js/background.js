chrome.runtime.onInstalled.addListener(() => {
    let url = chrome.runtime.getURL('content/html/welcome.html');
    chrome.tabs.create({ url });
})