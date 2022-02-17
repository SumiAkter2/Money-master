console.log('success');
// // // show input:
// function getInput(product){
//     const showInput=document.getElementById(product);
//     const ShowInputValue=parseInt(showInput.value);
    
//     console.log( ShowInputValue);
//      calculate();
//      return ShowInputValue;
   
//  }
//  document.getElementById('calc-btn').addEventListener('click',function(){
//    getInput('food-id');
//    getInput('rent-id');
//    getInput('cloth-id');
//  })

//   function calculate(){
    
//     const foodCost =getInput('food-id');
//     const rentCost =getInput('rent-id');
//     const clothCost=getInput('cloth-id')
//     const total = foodCost+rentCost+clothCost;
//     console.log(total);
 
//  document.getElementById('total-expenses').innerText=total;
//   };
document.getElementById('calc-btn').addEventListener('click', function(){
    const foodInput = document.getElementById('food-id');
    const foodCost =parseFloat (foodInput.value);
    console.log(foodCost)

    const rentInput = document.getElementById('rent-id');
    const rentCost =parseFloat (rentInput.value);
    console.log(rentCost)

    const clothInput = document.getElementById('cloth-id');
    const clothCost =parseFloat (clothInput.value);
    console.log(clothCost)

   
    let total = foodCost + rentCost + clothCost;
    console.log(total);
    const totalExpense= document.getElementById('total-expenses');
    const totalExpenseValue = totalExpense.innerText;
    totalExpense.innerText=total;
    console.log(total);
     
    const incomeInput =document.getElementById('income-id');
    const incomeValue= parseFloat (incomeInput.value);
    console.log(incomeValue)
    
    
});
