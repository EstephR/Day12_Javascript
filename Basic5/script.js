function boxCalculation(width, height, depth) {
    var width = width;
    var height = height;
    var depth = depth;

    var area = width * height;
    var volume = width * height * depth;

    var arr = [area, volume];

    return `The are of the box is: ${area} <br> The volume of the box is: ${volume}`
}

document.write(boxCalculation(20, 30, 40));