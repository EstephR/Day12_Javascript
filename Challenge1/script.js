function atm() {
    var amount = parseInt(document.getElementById("input-el").value);
    console.log(amount)
    var hundred = Math.floor(amount / 100);
    var rest = amount % 100;
    var fifty = Math.floor(rest / 50);
    rest %= 50; // rest = rest % 50;
    var twenty = Math.floor(rest / 20);
    rest %= 20;
    var ten = Math.floor(rest / 10);
    rest %= 10;
    return `You are getting ${hundred} hundred note(s), ${fifty} fifty note(s),${twenty} twenty note(s), ${ten} ten note(s)`;
}

function printResult() {
    var result = document.getElementById("result-el");
    result.textContent = atm();
}
document.getElementById("btn").addEventListener("click", printResult)

console.log(atm());