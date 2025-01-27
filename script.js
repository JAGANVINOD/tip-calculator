
function calculate() {
   
    const bill = parseFloat(document.getElementById('bill').value);
    const tipPercentage = parseFloat(document.getElementById('tip').value);

    
    if (isNaN(bill) || bill < 0) {
        alert("Please enter a valid bill amount.");
        return;
    }
    if (isNaN(tipPercentage) || tipPercentage < 0) {
        alert("Please enter a valid tip percentage.");
        return;
    }

   
    const tipAmount = (bill * tipPercentage) / 100;
    const totalAmount = bill + tipAmount;


    
    document.getElementById('totalAmount').textContent = totalAmount.toFixed(2);
    document.getElementById("result").textContent = tipAmount.toFixed(2);
}
function reset() {
    document.getElementById('bill').value = '';
    document.getElementById('tip').value = '';
    document.getElementById('result').textContent = '0.00';
    document.getElementById('totalAmount').textContent = '0.00';
}

