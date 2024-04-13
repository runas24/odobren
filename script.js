// Функция для добавления разделителя в числа для удобочитаемости
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Форматирование ввода суммы кредита
document.getElementById("loanAmount").addEventListener("input", function(event) {
    var loanAmount = event.target.value.replace(/\D/g, "");
    event.target.value = numberWithCommas(loanAmount);
});

// Форматирование ввода процентной ставки
document.getElementById("interestRate").addEventListener("input", function(event) {
    var interestRate = event.target.value.replace(/\D/g, "");
    event.target.value = numberWithCommas(interestRate);
});
