console.log('success');

// document.getElementById('calc-btn').addEventListener('click', function(){
//     const foodInput = document.getElementById('food-id');
//     const foodCost =parseFloat (foodInput.value);
//     console.log(foodCost)

//     const rentInput = document.getElementById('rent-id');
//     const rentCost =parseFloat (rentInput.value);
//     console.log(rentCost)

//     const clothInput = document.getElementById('cloth-id');
//     const clothCost =parseFloat (clothInput.value);
//     console.log(clothCost)

   
//     let total = foodCost + rentCost + clothCost;
//     console.log(total);

//  const totalExpense= document.getElementById('total-expenses');
//  const totalExpenseValue = totalExpense.innerText;
//  totalExpense.innerText=total;
//  console.log(total);
//  const incomeInput =document.getElementById('income-id');
//  const incomeValue= parseFloat (incomeInput.value);
//  console.log(incomeValue)
//    const balance = document.getElementById('balance');
//    const balanceValue = balance.innerText;
//   const totalBalance = incomeValue - total;
//   balance.innerText = totalBalance;
//   console.log(totalBalance);        

// getSavings ('total-expenses', 'balance');
// });
// function getInputValue(totalId,amount){
//     const totalExpense= document.getElementById(totalId);
//     const totalExpenseValue = totalExpense.innerText;
//     totalExpense.innerText=total;

//     const incomeInput =document.getElementById('income-id');
//     const incomeValue= parseFloat (incomeInput.value);
//     console.log(incomeValue);
    
//     const balance = document.getElementById(amount);
//     const balanceValue = balance.innerText;
//    const totalBalance = incomeValue - total;
//    balance.innerText = totalBalance;
//    console.log(totalBalance);
// }
   


// function getSavings(saving){
//     const saveAmountInput= document.getElementById(saving);
//     const saveAmountValue = parseFloat(saveAmountInput.value);
//     console.log(saveAmountValue);

   
// }
// document.getElementById('save-btn').addEventListener('click', function(){
    
//    getSavings('save-id')
// })

function calcBtn( saving, saveAmount , remainBalance){
    let foodInput = document.getElementById('food-id').value;
    console.log(foodInput);
    let rentInput = document.getElementById('rent-id').value;
    console.log(rentInput);
    let clothInput = document.getElementById('cloth-id').value;
    console.log(clothInput);
    //  if(foodInput>0 && rentInput >0 && clothInput>0){
    let totalInput = parseInt(foodInput)+parseInt(rentInput)+parseInt(clothInput);
//     console.log(totalInput);
//  }
//  else{
//      console.log('sorry')
//  }
const totalExpense = document.getElementById('total-expenses');
const totalExpenseValue = totalExpense.innerText;
totalExpense.innerText = totalInput;
console.log(totalInput);

const incomeInput = document.getElementById('income-id').value;

const balance = document.getElementById('balance');
const balanceValue=balance.innerText;
const totalBalance = parseInt(incomeInput)-totalInput;
 balance.innerText = totalBalance;
 console.log(totalBalance);

 const savingInput = document.getElementById(saving);
 const savingValue = savingInput.value;
console.log(savingValue);
const saveAmountValue = document.getElementById(saveAmount);
const saveAmountInput = saveAmountValue.innerText;
const savingCost = totalBalance/savingValue;
saveAmountValue.innerText = savingCost;
console.log(savingCost);

const remainingInput = document.getElementById(remainBalance);
const remainingInputValue = remainingInput.innerText;
const remainingBalance = totalBalance- savingCost;
remainingInput.innerText = remainingBalance;
console.log(remainingBalance);

}
document.getElementById('save-btn').addEventListener('click', function(){
calcBtn('save-id','saving-amount', 'remaining-balance')
})