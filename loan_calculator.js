function loanCalculator() {
  function validAmount(num) {
    return typeof num === 'number' ? true : (Number.isNaN(Number(num.trim())) === false);
  }

  function validApr(num) {
    return Number.isNaN(parseFloat(Number(num))) === false ? parseFloat(num) : Number.isNaN(Number(num.toString().replace('%', ''))) === false;
  }

  const readline = require('readline-sync');

  let loanAmount = readline.question('Please enter the outstanding loan amount: ');

  while (!validAmount(loanAmount)) {
    loanAmount = readline.question('please enter a valid number: ');
  }

  let apr = parseFloat(readline.question('Please enter the loan APR in %s: ').replace('%', ''));

  while (validApr(apr) === false) {
    apr = readline.question('please enter a valid APR: ');
  }

  const tenure = readline.question("Please enter the laon duration in 'years months': ");

  const tenureYears = parseFloat(tenure.split(' ')[0]);
  let tenureMonths = parseFloat(tenure.split(' ')[1]);
  if (Number.isNaN(tenureMonths)) {
    tenureMonths = 0;
  }

  console.log(`the total loan amount is $${loanAmount} at ${apr}% for ${tenureYears} year(s) and ${tenureMonths} months`);

  const monthlyInterestRate = parseFloat(apr / 12 / 100);

  const loanDurationMonths = Number(tenureYears * 12 + tenureMonths);

  const monthlyPayment = loanAmount * (monthlyInterestRate / (1 - Math.pow((1 + monthlyInterestRate), (-1 * loanDurationMonths))));

  console.log(`Your total monthly payment is ${monthlyPayment.toFixed(2)}`);
}

loanCalculator();
// const readline = require('readline-sync');
// let tenure = readline.question("Please enter the laon duration in 'years months': ");

//   let tenureYears = parseFloat(tenure.split(' ')[0]);
//   let tenureMonths = parseFloat(tenure.split(' ')[1]);
//   if(Number.isNaN(tenureMonths)) {
//     tenureMonths = 0;
//   }
//   else {

//   }
//   console.log(tenureYears, tenureMonths)
