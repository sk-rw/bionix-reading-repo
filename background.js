chrome.runtime.onInstalled.addListener(function() {
  chrome.commands.onCommand.addListener(function (command) {
    if (command === "toggle-bionix") {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'toggleFormatting' });
      });
    }
  }); 
});
