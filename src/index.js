module.exports = function toReadable (number) {
    let result = '';
    const humanReadable = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
    };
    if (number in humanReadable) {return humanReadable[number]}
    if (Math.floor(number / 100)) {
        result = result + humanReadable[Math.floor(number/100)] + ' hundred';
        if (number % 100 === 0) {
            return result
        } else {
            number = number % 100
            return result + ' ' + toReadable(number)
        }
    }
    if (Math.floor(number / 10)) {
        result = result + humanReadable[(Math.floor(number/10)) * 10];
        if (number % 10 === 0) {
            return result
        } else {
            number = number % 10
            return result + ' ' + toReadable(number) 
        }
    }
}
