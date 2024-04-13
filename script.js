// Форматирование ввода суммы кредита
document.getElementById("loanAmount").addEventListener("input", function(event) {
    var loanAmount = event.target.value.replace(/[^\d.]/g, ""); // Убираем все символы кроме цифр и точки
    event.target.value = numberWithCommas(loanAmount);
});

// Форматирование ввода процентной ставки
document.getElementById("interestRate").addEventListener("input", function(event) {
    var interestRate = event.target.value.replace(/[^\d.]/g, ""); // Убираем все символы кроме цифр и точки
    event.target.value = interestRate;
});
