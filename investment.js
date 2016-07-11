// JavaScript source code
function display() {
    var initialInvestment = parseInt((document.getElementById("initialInvestment")).value);
    var monthlyDeposit = parseInt((document.getElementById("monthlyDeposit")).value);
    var interestRate = parseInt((document.getElementById("interestRate")).value);
    var months = parseInt((document.getElementById("months")).value);
    var growthTable = document.getElementById("growthTable");

    var prevValue = initialInvestment;
    var value, row, cell1, cell2;


    for (var i = 1; i <= months ; i++) {
        value = prevValue + prevValue * interestRate / 100 / 12 + monthlyDeposit;
        row = growthTable.insertRow(growthTable.rows.length);
        cell1 = row.insertCell(0);
        cell2 = row.insertCell(1);
        cell1.innerHTML = i;
        cell2.innerHTML = value;
        prevValue = value;
    }
    growthTable.hidden = false;
}
function disbaleButton() {
    document.getElementById("Display").disabled = true;
}
function enableButton() {
    document.getElementById("Display").disabled = false;
    document.getElementById("growthTable").hidden = true;
}
