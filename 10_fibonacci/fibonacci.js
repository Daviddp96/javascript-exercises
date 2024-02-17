const fibonacci = function(n) {
    const parsedN = parseInt(n);

    if (parsedN < 0) {
        return "OOPS";
    }
    if (parsedN == 0) {
        return 0;
    }
    if (parsedN <= 2) {
        return 1;
    }

    let lastToPrev = 1;
    let prev = 1;
    let current = 0;
    for (let i = 2; i < parsedN; i++) {
        current = lastToPrev + prev;
        lastToPrev = prev;
        prev = current;
    }
    return current;
};

// Do not edit below this line
module.exports = fibonacci;
