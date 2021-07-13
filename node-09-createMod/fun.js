const add = (a, b) => {
    return a + b;
}

const sub = (a, b) => {
    return a - b;
}

const mul = (a, b) => {
    return a * b;
}
//  for single function we used\
// module.exports = add;

//  for multiple we used 

// module.exports.add = add;
// module.exports.sub = sub;
// module.exports.mul = mul;

module.exports = { add, sub, mul };