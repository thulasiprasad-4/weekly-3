const expenses = [1000, 2000, 1500];

function analyze() {
  const total = expenses.reduce((a,b)=>a+b,0);
  document.getElementById("result").innerText =
    "Total Expense: ₹" + total;
}

