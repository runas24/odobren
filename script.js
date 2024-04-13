// Форматирование ввода суммы кредита
document.getElementById("loanAmount").addEventListener("input", function(event) {
    var loanAmount = event.target.value.replace(/[^\d]/g, ""); // Убираем все символы кроме цифр
    event.target.value = numberWithCommas(loanAmount);
});

// Не меняем обработку ввода процентной ставки
