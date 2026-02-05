//  grabbing all the required elements//
const amountInput = document.getElementById("amount");
const descInput = document.getElementById("description");
const categoryInput = document.getElementById("category");
const addBtn = document.getElementById("addBtn");
const expenseList = document.getElementById("expenseList");

//get expenses from the localStorage//
function getExpenses(){
    return JSON.parse(localStorage.getItem('expenses',)) || [];
}
//save expenses to the localStorage//
function saveExpenses(expenses){
    localStorage.saveItem('expenses',JSON.stringify(expenses))
}

addBtn.addEventListener('click',function(){
    const amount = amountInput.value;
    const description = descInput.value;
    const category = categoryInput.value;

    if(!amount || !description){
        alert('Please fill all fields')
        return;
    }

    const expenses = getExpenses()
})