module.exports = function toReadable (number) {

    let first_twenty = ["zero", "one", "two",
                    "three", "four", "five",
                    "six", "seven", "eight",
                    "nine", "ten", "eleven",
                    "twelve", "thirteen", "fourteen",
                    "fifteen", "sixteen", "seventeen",
                    "eighteen", "nineteen"];

    let tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

    if (number < 20) {
        return first_twenty[number];
    }

    while (number > 19 && number < 100) {
            let numTens = Math.floor(number / 10); 
            let firtsPart = tens[numTens];
            let secondPart = first_twenty[number % 10];

            if (secondPart === 'zero') {
                return firtsPart;
            } else {
                return firtsPart + " " + secondPart;
            }
    }

    while (number > 99) {

        let numTens = Math.floor(number / 100); // 7.84
        console.log(numTens); // 9

        let firtsPart = first_twenty[numTens]; 
        console.log(firtsPart); // 9

        let lastPart = number % 100;
        console.log(lastPart); // 0

        if (lastPart < 20 && lastPart !== 0) {
            lastPart = first_twenty[lastPart];
            return firtsPart + " " + "hundred" + " " + lastPart;
        } else if (lastPart === 0) {
            return firtsPart + " " + "hundred";
        }

        let lastPartOne = tens[Math.floor(lastPart / 10)];
        console.log(lastPartOne); // fifty

        let lastPartTwo = first_twenty[number % 10];
        console.log(lastPartTwo); // four

        if (lastPartTwo === 'zero') {
            return firtsPart + " " + "hundred" + " " + lastPartOne;
        } else {
            return firtsPart + " " + "hundred" + " " + lastPartOne + " " + lastPartTwo;
        }
}
  
}
