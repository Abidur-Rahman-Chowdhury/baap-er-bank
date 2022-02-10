// handel deposit btn event

const depositBtn = document.getElementById("deposit-btn");
depositBtn.addEventListener("click", function () {
  // get the amount deposited
  const depositInput = document.getElementById("deposit-amount");
  const newDepositAmount = depositInput.value;

  const depositTotal = document.getElementById("deposit-total");

  const previousDepositAmount = depositTotal.innerText;
  const newDepositTotal =
    parseFloat(previousDepositAmount) + parseFloat(newDepositAmount);
  depositTotal.innerText = newDepositTotal;
  // clear input field
  depositInput.value = "";

  // update account balance
  const balanceTotal = document.getElementById("balance-total");

  const balanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalText);

  const newBalanceTotal = previousBalanceTotal + parseFloat(newDepositAmount);
  console.log(newBalanceTotal);
  balanceTotal.innerText = parseFloat(newBalanceTotal);
});

// handel withdraw event
document.getElementById("withdraw-btn").addEventListener("click", function () {
  const withdrawInput = document.getElementById("withdraw-amount");
  const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    console.log(newWithdrawAmount);


    // set withdraw total
    const withdrawTotal = document.getElementById('withdraw-text');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    withdrawInput.value = '';
    
    // update-balance 
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawTotal;
    balanceTotal.innerText = newBalanceTotal;


});
