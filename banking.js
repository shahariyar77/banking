function getInput(inputId) {
    const inputField = document.getElementById(inputId);
    const inputText = inputField.value;
    const inputAmmount = parseFloat(inputText);

    //clear
    inputField.value = '';
    return inputAmmount;
}

function updateTotal(updateId, newdepositAmmount) {
    const depositTotal = document.getElementById(updateId);
    const priviousDepositText = depositTotal.innerText;
    const priviousDepositAmmont = parseFloat(priviousDepositText)
    // privious ammount + new input ammount add
    depositTotal.innerText = priviousDepositAmmont + newdepositAmmount;

}

function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-input');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmmount = parseFloat(balanceTotalText)
    return balanceTotalAmmount;
}


function updateBalance(ammount, isAdd) {
    const balanceTotal = document.getElementById('balance-input');
    const balanceTotalAmmount = getCurrentBalance()
    if (isAdd == true) {
        balanceTotal.innerText = balanceTotalAmmount + ammount;
    } else {
        balanceTotal.innerText = balanceTotalAmmount - ammount;
    }
}

document.getElementById('diposit-btn').addEventListener('click', function () {
    const newdepositAmmount = getInput('diposit-input')
    if (newdepositAmmount > 0) {
        updateTotal('diposit-total', newdepositAmmount);
        updateBalance(newdepositAmmount, true)
    }

});

document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawInputAmmount = getInput('withdraw-input')
    const currentBalance = getCurrentBalance()
    if (withdrawInputAmmount > 0 && withdrawInputAmmount < currentBalance) {
        updateTotal('withdraw-total', withdrawInputAmmount);
        updateBalance(withdrawInputAmmount, false)
    }
    if (withdrawInputAmmount > currentBalance) {
        const error = document.getElementById('error');
        error.innerText = 'Sorry!!! you don,t have enough balance'
    }


});

