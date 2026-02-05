//  grabbing all the required elements//
const amountInput = document.getElementById("amount");
const descInput = document.getElementById("description");
const categoryInput = document.getElementById("category");
const addBtn = document.getElementById("addBtn");
const expenseList = document.getElementById("expenseList");

//get expenses from the localStorage//
function getExpenses() {
  return JSON.parse(localStorage.getItem("expenses")) || [];
}
//save expenses to the localStorage//
function saveExpenses(expenses) {
  localStorage.setItem("expenses", JSON.stringify(expenses));
}

// add expense
addBtn.addEventListener("click", function () {
  const amount = amountInput.value;
  const description = descInput.value;
  const category = categoryInput.value;

  if (!amount || !description) {
    alert("Please fill all fields");
    return;
  }

  const expenses = getExpenses();
  expenses.push({ amount, description, category });
  saveExpenses(expenses);
  renderExpenses();
  clearInputs();
});

//delete expense//
function deleteExpense(index) {
  const expenses = getExpenses();
  expenses.splice(index, 1);
  saveExpenses(expenses);
  renderExpenses();
}

//edit expense//
function editExpense(index) {
  const expenses = getExpenses();
  const expense = expenses[index];

  amountInput.value = expense.amount;
  descInput.value = expense.description;
  categoryInput.value = expense.category;
  deleteExpense(index);
}

//clear input fields//
function clearInputs() {
  amountInput.value = "";
  descInput.value = "";
  categoryInput.value = "";
}
// render expenses//
function renderExpenses() {
  const expenses = getExpenses();
  expenseList.innerHTML = "";

  expenses.forEach((expense, index) => {
    const li = document.createElement("li");

    //template literal to display expense details//

    li.innerHTML = `
      <strong>Amount:</strong> ${expense.amount} <br>
      <strong>Description:</strong> ${expense.description} <br>
      <strong>Category:</strong> ${expense.category} <br>
      <button onclick="editExpense(${index})">Edit</button>
      <button onclick="deleteExpense(${index})">Delete</button>
    `;
    expenseList.appendChild(li);
  });
}
//page load render expenses//
window.onload = renderExpenses;
