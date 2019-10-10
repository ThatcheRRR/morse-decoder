const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let decodedLetter = '';
    for (let i = 0; i < expr.length; i += 10) {
        if (expr[i] == '*') {
            decodedLetter += ' ';
        }
        else {
            let morseCode = '';
            for (let j = i; j < i + 10; j += 2) {
                if (expr[j] == '1' && expr[j + 1] == '0') {
                    morseCode += '.';
                }
                if (expr[j] == '1' && expr[j + 1] == '1') {
                    morseCode += '-';
                }
            }
            decodedLetter += MORSE_TABLE[morseCode];
        }
    }
    return decodedLetter;
}
module.exports = {
    decode
}