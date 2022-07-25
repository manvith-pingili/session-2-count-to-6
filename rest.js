//Using rest parameters instead of the .forEach method to find the sum of an array
module.exports = (...args) => {
    let sum = args.reduce((a1, a2) => a1 + a2);
    return sum / args.length;
}
