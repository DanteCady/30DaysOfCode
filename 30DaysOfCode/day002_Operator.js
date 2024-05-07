//Global
// Meal Cost Variabke
let mealCost = 100
// Tip Percentage Variable
let tipPercentage = 15
// Tax Percentage Variable
let taxPercentage = 8

// Function to solve total cost of meal
solve = (mealCost, tipPercentage, taxPercentage) => {
    let tipAmount = mealCost * (tipPercentage / 100) // Calculate tip amount
    let taxAmount = mealCost * (taxPercentage / 100) // Calculate tax amount
    let totalBill = mealCost + tipAmount + taxAmount // Calculate total cost of meal
     console.log(totalBill);
    return
}

solve(mealCost,tipPercentage,taxPercentage);