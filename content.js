let isFormattingApplied = false;

function toggleFormatting() {
  const paragraphs = document.querySelectorAll('p');
  
  for (let i = 0; i < paragraphs.length; i++) {
    const words = paragraphs[i].innerText.split(' ');
    const formattedWords = words.map(word => {
      if (word.length < 6) {
        const formatted = `<span style="font-weight: bold; font-size: 120%;">${word.substr(0, 3)}</span>${word.substring(3)}`;
        return formatted;
      } else {
        const halfLength = Math.floor(word.length / 2);
        const formatted = `<span style="font-weight: bold; font-size: 120%;">${word.substr(0, halfLength)}</span>${word.substring(halfLength)}`;
        return formatted;
      }
    });
    paragraphs[i].innerHTML = formattedWords.join(' ');
  }

  isFormattingApplied = !isFormattingApplied;
}

toggleFormatting();  // call the function to apply formatting by default

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'toggleFormatting') {
    toggleFormatting();
    sendResponse({ isFormattingApplied });
  }
});

chrome.tabs.onActivated.addListener(activeInfo => {
  console.log(activeInfo.tabId);
  console.log(activeInfo.windowId);
});
