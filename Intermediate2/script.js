function grades(Math, Physics, English) {
    var sum = Math + Physics + English;
    var av = sum / 3;
    return `Sum: ${sum} <br> Average: ${av}`
}

document.write(grades(1, 2, 3));