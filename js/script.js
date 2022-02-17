console.log('success');


function calculation( saving, saveAmount, remainBalance){
    // food, rent , cloth cost:
    let foodInput = document.getElementById('food-id').value;
    console.log(foodInput);
    let rentInput = document.getElementById('rent-id').value;
    console.log(rentInput);
    let clothInput = document.getElementById('cloth-id').value;
    console.log(clothInput);
    //  if(foodInput>0 && rentInput >0 && clothInput>0){
    let totalInput = parseInt(foodInput)+parseInt(rentInput)+parseInt(clothInput);
//     console.log(totalInput);

//  ----------total expenses:------
const totalExpense = document.getElementById('total-expenses');
const totalExpenseValue = totalExpense.innerText;
totalExpense.innerText = "00";

console.log(totalInput);

if(foodInput<0 || rentInput<0 || clothInput<0){
    document.getElementById('expenses-hide').style.display='block';
} 
//  else{
//      document.getElementById('expenses-hide').style.display='none';
//      totalExpense.innerText = totalInput;
//  }
// -----------income input show----------
const incomeInput = document.getElementById('income-id').value;

   if(incomeInput<foodInput || incomeInput<rentInput || incomeInput<clothInput) {
     document.getElementById('expenses-hide').style.display='block';
 }
  else{
     document.getElementById('expenses-hide').style.display='none';
      totalExpense.innerText = totalInput;
  }
// ------------total balance show -----

const balance = document.getElementById('balance');
const balanceValue=balance.innerText;
const totalBalance = parseInt(incomeInput)-totalInput;
balance.innerText = "00";
 if(incomeInput<foodInput || incomeInput<rentInput || incomeInput<clothInput){
    document.getElementById('expenses-hide').style.display='block';
 }
else if(foodInput<0 || rentInput<0 || clothInput<0){
    document.getElementById('expenses-hide').style.display='block';
} 
else{
    document.getElementById('expenses-hide').style.display='none';
    balance.innerText = totalBalance;
}

//  balance.innerText = totalBalance;
 console.log(totalBalance);

 //---------saving section------

 const savingInput = document.getElementById(saving);
 const savingValue = savingInput.value;

const saveAmountValue = document.getElementById(saveAmount);
const saveAmountInput = saveAmountValue.innerText;
saveAmountValue.innerText =" 00";
 const savingCost = totalBalance/savingValue;
//  saveAmountValue.innerText = savingCost;
//------------------error handle--------------
if( totalBalance< savingValue){
    
     document.getElementById('hide-cuppon').style.display='block';
 }
  else if(savingValue<0){
      document.getElementById('hide-cuppon').style.display='block';
    }
else {
     saveAmountValue.innerText = savingCost;
     document.getElementById('hide-cuppon').style.display='none';
 }



//--------after saving remaining balance section---------
const remainingInput = document.getElementById(remainBalance);
const remainingInputValue = remainingInput.innerText;
 const remainingBalance = totalBalance- savingCost;
//  remainingInput.innerText = remainingBalance;
remainingInput.innerText =" 00";
//----------------error handle------------------
  if( totalBalance < savingValue){
    
     document.getElementById('hide-cuppon').style.display='block';
  }

   else if(savingValue<0){
       document.getElementById('hide-cuppon').style.display='block';
    }

 else{
   
     remainingInput.innerText = remainingBalance;
     document.getElementById('hide-cuppon').style.display='none';
     }

console.log(remainingBalance);
}
// calculation
document.getElementById('calc-btn').addEventListener('click', function(){
    calculation();
});
//saving
document.getElementById('save-btn').addEventListener('click', function(){
calculation('save-id','saving-amount', 'remaining-balance');
});