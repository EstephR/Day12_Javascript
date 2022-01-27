function ageCalculator(birthYear) {
    var year1 = new Date().getFullYear();
    var year2 = birthYear;
    var result = year1 - year2;
    var arr = [result, result - 1]
    return `You are either ${arr[0]} or ${arr[1]}`;
};
// var year1 = new Date().getFullYear();
// console.log(year1);
console.log(ageCalculator(1999));