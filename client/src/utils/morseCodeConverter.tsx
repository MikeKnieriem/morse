const morseToText = (morse: string) => {
  let result = '';
  const tokens = morse.split(' ');

  tokens.forEach((token) => {
    switch(token) {
      case '.-': result += "A"; break;
      case '-...': result += "B"; break;
      case '-.-.': result += "C"; break;
      case '.': result += "E"; break;
      case '..-.': result += "F"; break;
      case '--.': result += "G"; break;
      case '....': result += "H"; break;
      case '..': result += "I"; break;
      case '.---': result += "J"; break;
      case '-.-': result += "K"; break;
      case '.-..': result += "L"; break;
      case '--': result += "M"; break;
      case '-.': result += "N"; break;
      case '---': result += "O"; break;
      case '.--.': result += "P"; break;
      case '--.-': result += "Q"; break;
      case '.-.': result += "R"; break;
      case '...': result += "S"; break;
      case '-': result += "T"; break;
      case '..-': result += "U"; break;
      case '...-': result += "V"; break;
      case '.--': result += "W"; break;
      case '-..-': result += "X"; break;
      case '-.--': result += "Y"; break;
      case '--..': result += "Z"; break;
      case '.----': result += "1"; break;
      case '..---': result += "2"; break;
      case '...--': result += "3"; break;
      case '....-': result += "4"; break;
      case '.....': result += "5"; break;
      case '-....': result += "6"; break;
      case '--...': result += "7"; break;
      case '---..': result += "8"; break;
      case '----.': result += "9"; break;
      case '-----': result += "0"; break;
      default:
        break;
    }
  });

  return result;
};

export { morseToText };