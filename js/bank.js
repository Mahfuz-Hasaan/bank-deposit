document.getElementById("deposit-btn").addEventListener("click", function () {
  const newDeposit = document.getElementById("deposit-input").value;
  const pastDeposit = document.getElementById("past-deposit").innerText;
  const totalDeposit = parseFloat(newDeposit) + parseFloat(pastDeposit);
  document.getElementById("past-deposit").innerText = totalDeposit;
  document.getElementById("deposit-input").value = "";

  // balance-board

  const lastBalance = document.getElementById("balance").innerText;
  const totalBalance = parseFloat(lastBalance) + parseFloat(newDeposit);
  document.getElementById("balance").innerText = totalBalance;
});

document.getElementById("withdraw-btn").addEventListener("click", function () {
  const newWithdraw = document.getElementById("withdraw-input").value;
  const lastBalance = document.getElementById("balance").innerText;
  if (lastBalance >= newWithdraw) {
    const pastWithdraw = document.getElementById("withdraw").innerText;
    const totalWithdraw = parseFloat(newWithdraw) + parseFloat(pastWithdraw);
    document.getElementById("withdraw").innerText = totalWithdraw;
    document.getElementById("withdraw-input").value = "";

    // balance-board

    const latestBalance = parseFloat(lastBalance) - parseFloat(newWithdraw);
    document.getElementById("balance").innerText = latestBalance;
  } else {
    alert("insufficient ammount!!");
  }
});
