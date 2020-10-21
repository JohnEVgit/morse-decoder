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
    // write your solution here
    let arr = expr.match(/.{1,10}/g);
    let result = '';

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === '**********') {

            result += ' ';

        } else {

            let arrChar = arr[i].match(/.{1,2}/g);
            let charCode = '';

            for (let j = 0; j < arrChar.length; j++) {
                if (arrChar[j] === '10') {
                    charCode+= '.';
                } else if (arrChar[j] === '11') {
                    charCode+= '-';
                }
            }

            result += MORSE_TABLE[charCode];

        }

    }

    return result;

}

module.exports = {
    decode
};