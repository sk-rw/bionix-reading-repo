function boldify(element) {
  if (!element.hasChildNodes() || element.tagName === 'SCRIPT' || element.tagName === 'STYLE') {
    return;
  }

  const children = element.childNodes;

  for (let i = 0; i < children.length; i++) {
    const child = children[i];

    if (child.nodeType === 3) {
      const words = child.textContent.split(' ');
      const regex = new RegExp('^[a-zA-Z\']+');
      const boldedWords = words.map(word => {
        const match = regex.exec(word);
        if (match) {
          const bolded = `<span style="font-weight: bold; font-size: 120%;">${match[0]}</span>${word.substring(match[0].length)}`;
          return bolded;
        } else {
          return word;
        }
      });

      const newContent = boldedWords.join(' ');
      const newElement = document.createElement('span');
      newElement.innerHTML = newContent;
      element.replaceChild(newElement, child);
    } else {
      boldify(child);
    }
  }
}

boldify(document.body);
