const sumAll = function(firstNumber, secondNumber) {
    if (firstNumber < 0 || secondNumber < 0) {
        return "ERROR";
    }
    if (typeof firstNumber != "number" || typeof secondNumber != "number") {
        return "ERROR";
    }
    let sum = 0;
    if (firstNumber > secondNumber) {
        let temp = firstNumber;
        firstNumber = secondNumber;
        secondNumber = temp;
    }
    for (let i = firstNumber; i <= secondNumber; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
