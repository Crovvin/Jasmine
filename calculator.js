window.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById("calc-form");
    if (form) {
      setupIntialValues();
      form.addEventListener("submit", function(e) {
        e.preventDefault();
        update();
      });
    }
});
  
function getCurrentUIValues() {
    return {
      amount: +(document.getElementById("loan-amount").value),
      years: +(document.getElementById("loan-years").value),
      rate: +(document.getElementById("loan-rate").value),
    }
}
  
function setupIntialValues() {
    const values = { amount: 25000, years: 5, rate: 5.0};
    const amountNum = document.getElementById("loan-amount");
    const yearNum = document.getElementById("loan-years");
    const interestNum = document.getElementById("loan-rate");
    amountNum.value = values.amount;
    yearNum.value = values.years;
    interestNum.value = values.rate;
    update();
}
  
function update() {
    const uiValues = getCurrentUIValues();
    updateMonthly(calculateMonthlyPayment(uiValues));
}
  
function calculateMonthlyPayment(values) {
    const payments = Math.floor(values.years * 12);
    const mRate = (values.rate / 100) / 12;
    return ( (mRate * values.amount) / (1 - Math.pow((1 + mRate), -payments))).toFixed(2);
}
  
function updateMonthly(monthly) {
    const monthPayments = document.getElementById("monthly-payment");
    monthPayments.innerText = "$" + monthly;
}
  