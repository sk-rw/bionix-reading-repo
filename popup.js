document.addEventListener('DOMContentLoaded', function() {
  const boldButton = document.getElementById('bold-button');

  boldButton.addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'toggleFormatting' }, function(response) {
        if (response && response.isFormattingApplied) {
          boldButton.innerText = 'Disable Formatting';
        } else {
          boldButton.innerText = 'Enable Formatting';
        }
      });
    });
  });
});
