// Select only <p> elements on the page
const paragraphs = document.querySelectorAll('p');

// Loop through each <p> element and embolden the first three letters of each word
for (let i = 0; i < paragraphs.length; i++) {
  const words = paragraphs[i].innerText.split(' ');
  const boldedWords = words.map(word => {
    if (word.length >= 3) {
      const bolded = `<span style="font-weight: bold; font-size: 120%;">${word.substr(0, 3)}</span>${word.substring(3)}`;
      return bolded;
    } else {
      return word;
    }
  });
  paragraphs[i].innerHTML = boldedWords.join(' ');
}
