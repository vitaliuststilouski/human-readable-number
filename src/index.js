module.exports = function toReadable(number) {
// function toReadable(number) {
    numberToString = number.toString();
    const onesDigits = {
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four',
        '5': 'five',
        '6': 'six',
        '7': 'seven',
        '8': 'eight',
        '9': 'nine',
        '0': 'zero'
    }

    const tensDigits = {
        '10': 'ten',
        '11': 'eleven',
        '12': 'twelve',
        '13': 'thirteen',
        '14': 'fourteen',
        '15': 'fifteen',
        '16': 'sixteen',
        '17': 'seventeen',
        '18': 'eighteen',
        '19': 'nineteen',
        '20': 'twenty',
        '30': 'thirty',
        '40': 'forty',
        '50': 'fifty',
        '60': 'sixty',
        '70': 'seventy',
        '80': 'eighty',
        '90': 'ninety'
    };

    const hundred = 'hundred';

    if (numberToString.length === 1) {
        for (NumeralByWord in onesDigits) {
            if (numberToString === NumeralByWord) {
                return onesDigits[NumeralByWord];
            }
        }
    }

    if (numberToString.length === 2 && numberToString[0] === '1') {
        let tensDigitsNum = numberToString[0] + numberToString[1];
        for (NumeralByWord in tensDigits) {
            if (tensDigitsNum === NumeralByWord) {
                return tensDigits[NumeralByWord];
            }
        }
    }

    if (numberToString.length === 2) {
        for (NumeralByWord in tensDigits) {
            if (numberToString === NumeralByWord && numberToString[1] === '0') {
                return tensDigits[NumeralByWord];
            }
            if (numberToString[1] !== '0') {
                let onesWord;
                let tensWord;
                for (NumeralByWord in tensDigits) {
                    if (NumeralByWord[0] === numberToString[0]) {
                        tensWord = tensDigits[NumeralByWord];
                    }
                    for (numberToString[1] in onesDigits) {
                        if (NumeralByWord[1] === numberToString[1]) {
                            onesWord = onesDigits[NumeralByWord[1]];
                        }
                    }
                }
                return `${tensWord} ${onesWord}`;
            }
        }
    }

    if (numberToString.length === 3) {
        if (numberToString[1] === '0' && numberToString[2] === '0') {
            for (numberToString[0] in onesDigits) {
                return `${onesDigits[numberToString[0]]} ${hundred}`;
            }
        }

        if (numberToString[1] === '0' && numberToString[2] !== '0') {
            let onesWord;
            let hundredsWord;
            for (numberToString[0] in onesDigits) {
                hundredsWord = onesDigits[numberToString[0]]
                for (numberToString[2] in onesDigits) {
                    onesWord = onesDigits[numberToString[2]];
                }
                return `${hundredsWord} ${hundred} ${onesWord}`;
            }
        }

        if (numberToString[1] !== '0' && numberToString[2] === '0') {
            let hundredsWord;
            let tensWord;
            let tensWordUnit = numberToString[1] + numberToString[2];
            for (numberToString[0] in onesDigits) {
                hundredsWord = onesDigits[numberToString[0]];
                for (prop in tensDigits) {
                    if (prop === tensWordUnit) {
                        tensWord = tensDigits[tensWordUnit];
                    }
                }
                return `${hundredsWord} ${hundred} ${tensWord}`;
            }
        }

        if (+numberToString[1] >= 2  && numberToString[2] !== '0') {
            let hundredsWord;
            let tensWord;
            let onesWord;
            for (numberToString[0] in onesDigits) {
                hundredsWord = onesDigits[numberToString[0]];
                for (prop in tensDigits) {
                    console.log(numberToString[1])
                    numberToString[1]

                    value = numberToString[1] + 0;
                    tensWord = tensDigits[value];


                    for (numberToString[2] in onesDigits) {
                        onesWord = onesDigits[numberToString[2]];
                    }
                }
                return `${hundredsWord} ${hundred} ${tensWord} ${onesWord}`;
            }
        }

        if (numberToString[1] === '1' && numberToString[2] !== '0') {
            let hundredsWord;
            let tensWordTiilTwenty;
            let tensWord;
            let onesWord;
            for (numberToString[0] in onesDigits) {
                hundredsWord = onesDigits[numberToString[0]];
                for (prop in tensDigits) {
                    if (prop === (numberToString[1] + numberToString[2])) {
                        tensWordTiilTwenty = tensDigits[prop]
                    }
                }
                return `${hundredsWord} ${hundred} ${tensWordTiilTwenty}`;
            }
        }

    }
}
