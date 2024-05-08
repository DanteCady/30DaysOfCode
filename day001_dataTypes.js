// Task
// 1. Declare  variables: one of type int, one of type double, and one of type String.
// 2. Read  lines of input from stdin (according to the sequence given in the Input Format section below) and initialize your  variables.
// Use the  operator to perform the following operations:
// 3. Use the + operator to perform the following operations:
// Print the sum of  plus your int variable on a new line.
// Print the sum of  plus your double variable to a scale of one decimal place on a new line.
// Concatenate  with the string you read as input and print the result on a new line.


// Declare second integer, double, and String variables.
let i2 = 4
let d2 = 4.0
let s2  = "is the best place to learn and practice coding!"
    
// Read and save an integer, double, and String to your variables.
    i2 = parseInt(readLine());
    d2 = parseFloat(readLine());
    s2 = readLine();

// Print the sum of both integer variables on a new line.
  let newInt = i + i2;
console.log(newInt);

    // Print the sum of the double variables on a new line.
    let newDouble = d + d2;
console.log(newDouble.toFixed(1));

// Concatenate and print the String variables on a new line
// The 's' variable above should be printed first.

let newString = s.concat(s2);
console.log(newString);
