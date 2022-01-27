function timeConverter(minutes) {
    var minutes = minutes;
    var hours = Math.floor(minutes / 60);
    var remainingMinutes = minutes % 60;

    return `${minutes} = ${hours} hour(s) and ${remainingMinutes} minutes`

}

console.log(timeConverter(280));