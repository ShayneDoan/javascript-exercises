const removeFromArray = function(arr, ...removed) {
    return arr.filter(val => !removed.includes(val));
};

// Do not edit below this line
module.exports = removeFromArray;
