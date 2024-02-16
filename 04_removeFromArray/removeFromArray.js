const removeFromArray = function(arr, ...items) {
    return arr.filter((item) => !items.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
