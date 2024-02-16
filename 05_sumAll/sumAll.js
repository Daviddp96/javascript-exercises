const sumAll = function(startNumber, endNumber) {
    if (startNumber < 0 || endNumber < 0) {
        return "ERROR";
    }

    if (typeof startNumber !== "number" || typeof endNumber !== "number") {
        return "ERROR";
    }

    let sum = 0;

    if (endNumber < startNumber) {
        let aux = startNumber;
        startNumber = endNumber;
        endNumber = aux;
    }

    for (let i = startNumber; i <= endNumber; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
