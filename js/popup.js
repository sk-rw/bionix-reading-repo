document.addEventListener('DOMContentLoaded', function() {
    const boldButton = document.getElementById('bold-button');
  
    // Apply formatting when user clicks the button
    boldButton.addEventListener('click', function() {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
          tabs[0].id,
          {file: 'content.js'});
      });
    });
  
    // Apply formatting when user presses Ctrl+Shift+B (Windows/Linux) or Command+Shift+B (Mac)
    document.addEventListener('keydown', function(event) {
      if (event.ctrlKey && event.shiftKey && event.key === 'B') {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          chrome.tabs.executeScript(
            tabs[0].id,
            {file: 'content.js'});
        });
      }
    });
  });
  
  