const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function splittingIntoSubstrings(string, count) { // charArray = expr.match(/.{1,10}/g);
  const result = [];
  for (let i = 0; i < string.length; i += count) {
    result.push(string.substring(i, i + count));
  }
  return result;
}

function decode(expr) {
  const charArray = splittingIntoSubstrings(expr, 10);

  return charArray.map((char) => {
    if (char === '**********') return ' ';
    const morzeLetter = splittingIntoSubstrings(char, 2).map((number) => {
      if (number === '00') return '';
      if (number === '10') return '.';
      if (number === '11') return '-';
    }).join('');
    return MORSE_TABLE[morzeLetter];
  }).join('');
}

module.exports = {
  decode,
};
