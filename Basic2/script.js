function ageCalculator(birthYear, currentYear) {
    var year1 = currentYear;
    var year2 = birthYear;
    var result = year1 - year2;
    var arr = [result, result - 1]
    return `You are either ${arr[0]} or ${arr[1]}`;
}

console.log(ageCalculator(1988, 2022));