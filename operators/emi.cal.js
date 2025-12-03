var principal = 10000; // Loan amount
var annualRate = 10;   // Annual interest rate (in percent)
var months = 24;       // Loan tenure in months

var monthlyEMI = calculateEMI(principal, annualRate, months);
console.log("Monthly EMI is = " + monthlyEMI);

function calculateEMI(principal, annualRate, months) {
  // Convert annual rate to monthly rate and percentage to decimal
  var monthlyRate = (annualRate / 100) / 12;

  // Calculate the EMI using the formula
  var emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);

  // Return the result, rounded to two decimal places
  return emi.toFixed(2);
}



