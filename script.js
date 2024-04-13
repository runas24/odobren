// Форматирование ввода суммы кредита
document.getElementById("loanAmount").addEventListener("input", function(event) {
    var loanAmount = event.target.value.replace(/\D/g, ""); // Убираем все символы кроме цифр
    event.target.value = numberWithCommas(loanAmount);
});

// Форматирование ввода процентной ставки
document.getElementById("interestRate").addEventListener("input", function(event) {
    // Оставляем процентную ставку без форматирования
});
