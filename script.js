document.getElementById("loanForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var loanAmount = parseFloat(document.getElementById("loanAmount").value);
    var loanTerm = parseInt(document.getElementById("loanTerm").value);
    var interestRate = parseFloat(document.getElementById("interestRate").value);

    var monthlyInterestRate = (interestRate / 100) / 12;
    var loanTermMonths = loanTerm * 12;
    var numerator = loanAmount * monthlyInterestRate;
    var denominator = 1 - Math.pow(1 + monthlyInterestRate, -loanTermMonths);
    var monthlyPayment = numerator / denominator;

    document.getElementById("monthlyPayment").innerText = "Ежемесячный платеж: " + monthlyPayment.toFixed(2) + " тенге";
});
