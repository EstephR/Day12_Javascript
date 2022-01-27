function crystalGazer(jobTitle, location, partnersName, numberChildren) {
    var text = `You will be a ${jobTitle} in ${location} and married to ${partnersName} with ${numberChildren} Children`;
    return text;
};

document.write(crystalGazer("Web Developer", "Vienna", "Diana", 3));