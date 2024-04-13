// Форматирование ввода суммы кредита
document.getElementById("loanAmount").addEventListener("input", function(event) {
    var loanAmount = parseFloat(event.target.value.replace(/[^\d.]/g, "")); // Преобразуем ввод в число
    event.target.value = numberWithCommas(loanAmount);
});

// Форматирование ввода процентной ставки
document.getElementById("interestRate").addEventListener("input", function(event) {
    var interestRate = parseFloat(event.target.value.replace(/[^\d.]/g, "")); // Преобразуем ввод в число
    event.target.value = interestRate;
});
