
// Challenge 1.1
// const age = 33
//
//
// if (age >= 18){
//     console.log("You can vote!")
// } else if (age < 18){
//     console.log("You can´t vote yet.")
// }
//
// // Challenge 1.2
// const temperature = 95
//
// if (temperature >= 100){
//     console.log("Water is not boiling!")
// } else if (temperature < 100){
//     console.log("Water is not boiling yet.")
// }
//
// // Challenge 1.3
// const password = "secret"
//
// if (password.length >= 8){
//     console.log("Password is strong enough ✅")
// } else if (password.length < 8){
//     console.log("Password is too short ❌")
// }

// Challenge 1.4
// const number = 24
//
// if (number % 2){
//     console.log(number + " is odd!")
// } else  {
//     console.log(number + " is even!")
// }
//
// // Challenge 2.1
// const score = 60;
//
// if (score >= 90){
//     console.log("A")
// } else if (score >= 80){
//     console.log("B")
// } else if (score >= 70){
//     console.log("C")
// } else if (score >= 60){
//     console.log("D")
// } else {
//     console.log("F")
// }

// Challenge 2.2
// const weight = 60;
// const height = 1.75;
//
// const bmi = weight / (height ** 2);
//
// // Advanced version - output once
// console.log("Your bmi is : " + bmi.toFixed(2));
// // Why? Don't repeat yourself (DRY principle)
//
// if (bmi >= 30){
//     // console.log("Your bmi is : " + bmi.toFixed(2))
//     console.log("Category :  Obese")
// } else if (bmi >= 25){
//    // console.log("Your bmi is : " + bmi.toFixed(2))
//     console.log("Category :  Overweight")
// } else if (bmi >= 18.5){
//    // console.log("Your bmi is : " + bmi.toFixed(2))
//     console.log("Category :  Normal weight")
// }  else  {
//    // console.log("Your bmi is : " + bmi.toFixed(2))
//     console.log("Category :  Underweight")
// }

// Challenge 2.3
//const dayNumber = 3;

//  🎓 The Lesson: ALWAYS Handle Edge Cases!
//
//     Edge Cases = Unexpected Inputs
//
// Valid Inputs (Expected):
// 1, 2, 3, 4, 5, 6, 7
//
// Edge Cases (Unexpected but Possible):
// 0, 8, 9, 10, 100, -5, -100
// "three", null, undefined, true, false
//
// Professional developers ALWAYS handle edge cases! 💎



// if (dayNumber === 1){
//     console.log("Today is Monday!")
// } else if (dayNumber === 2){
//     console.log("Today is Tuesday!")
// } else if (dayNumber === 3){
//     console.log("Today is Wednesday!")
// } else if (dayNumber === 4){
//     console.log("Today is Thursday!")
// } else if (dayNumber === 5){
//     console.log("Today is Friday!")
// } else if (dayNumber === 6){
//     console.log("Today is Saturday!")
// } else  if (dayNumber === 7){
//     console.log("Today is Sunday!")
// } else {
//     console.log("Invalid day number!")
// }

// Always ask yourself:
//     "What happens if the input is NOT what I expect?"
//
// Then add an else to handle it!
//
// // Pattern for validation
// if (valid_condition_1) {
//     // Handle case 1
// } else if (valid_condition_2) {
//     // Handle case 2
// } else {
//     // Handle ALL other cases (invalid input)
//     console.log("Error: Invalid input!");
// }
//
// This pattern is EVERYWHERE in professional code! 🎯


// Challenge 2.4
// const lightColor = "green";
//
// if (lightColor === "red"){
//     console.log("STOP! 🛑")
// } else if (lightColor === "yellow"){
//     console.log("SLOW DOWN! ⚠️")
// } else if (lightColor === "green"){
//     console.log("GO! ✅")
// } else {
//     console.log("Invalid color!")
// }

// const lightColor = "RED";
// // Output: "Invalid color!"
// // (JavaScript is case-sensitive! "RED" !== "red")
//
// const lightColor = "";
// // Output: "Invalid color!" ✅
//
// All handled correctly! 🎯
//
//   ---
//   🎓 Bonus Learning: Case-Insensitive Version
//
// What if user types "RED" or "Green"?
//
//     Advanced version (optional):
//
// const lightColor = "GREEN"; // uppercase
//
// // Convert to lowercase first!
// const normalizedColor = lightColor.toLowerCase();
//
// if (normalizedColor === "red"){
//     console.log("STOP! 🛑")
// } else if (normalizedColor === "yellow"){
//     console.log("SLOW DOWN! ⚠️")
// } else if (normalizedColor === "green"){
//     console.log("GO! ✅")
// } else {
//     console.log("Invalid color!")
// }
//
// // Now "green", "Green", "GREEN", "GrEeN" all work! ✅
//
// But for NOW, your solution is PERFECT as-is! ✅


// 🏋️ LEVEL 3: Advanced (Logical Operators)
// Challenge 3.1: Age and License Check

// There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!
//
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition, and print it to the console.
// Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).
//
// 3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a
// higher score than the other team, and the same time a score of at least 100 points.
//     HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
// 4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same
// score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.
//
//     TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
//
// GOOD LUCK 😀

//BONUS 2:
// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 106) / 3;
// const minimumScore = 100;
//
// if (scoreDolphins === scoreKoalas && scoreDolphins >= minimumScore && scoreKoalas >= minimumScore){
//     console.log("Both win the trophy!");
// } else if (scoreDolphins > scoreKoalas && scoreDolphins >= minimumScore) {
//     console.log("Dolphins win the trophy");
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= minimumScore)  {
//     console.log("Koalas win the trophy!");
// } else  {
//     console.log("No team wins the trophy");
// }


//MAIN
/*const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;


if (scoreDolphins > scoreKoalas){
    console.log("Dolphins win the trophy");
} else if (scoreKoalas > scoreDolphins) {
    console.log("Koalas win the trophy");
} else {
    console.log("Both win the trophy!");
}*/

//BONUS 1:
// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 123) / 3;
// const minimumScore = 100;
//
// if (scoreDolphins > scoreKoalas && scoreDolphins >= minimumScore){
//     console.log("Dolphins win the trophy");
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= minimumScore) {
//     console.log("Koalas win the trophy");
// } else {
//     console.log("Both win the trophy!");
// }

// Create an declarative function calcAverage to calculate the average of 3 scores.
// This function should have three parameters and return a single number (the average score).
function calcAverage(score1, score2, score3){
    return (score1 + score2 + score3) / 3;
}

// Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage
// function to them (you will need to call this function, and pass scores as arguments).
// TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.
//
// TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.
const avgDolphins = calcAverage(85, 54, 41);
const avgKoalas = calcAverage(23, 34, 27);

// Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas),
// and then logs the winner to the console, together with the victory points, according to the rule above. Example:
// Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).
// Ignore draws this time. Instead, log No team wins... to the console if there is no winner.
function checkWinner(avgDolphins, avgKoalas){
    if (avgDolphins >= 2 * avgKoalas){
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    }
    else if (avgKoalas >= 2 * avgDolphins){
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    }
    else {
        console.log("No team wins...");
    }
}


checkWinner(avgDolphins, avgKoalas);


// Let's go back to Mark and John comparing their BMIs!
//
// This time, let's use objects to implement the calculations! Remember: ' +
// 'BMI = mass / (height * height) (mass in kg and height in meters).
// For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith).
// Name these objects as mark and john, and their properties exactly as fullName, mass and height.
const mark = {

    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function () {

        this.bmi = this.mass / (this.height * this.height)
       // return  `Mark´s bmi is:  ${ this.bmi.toFixed(2) } `
      //  console.log(`BMI calculated: ${this.bmi.toFixed(2)}`);  // Debug output

        return this.bmi;

    }
};

const john = {

    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function () {

        this.bmi = this.mass / (this.height * this.height)
        // return  `John´s bmi is:  ${ this.bmi.toFixed(2) } `
        return this.bmi;

    }

};

const resultMark = mark.calcBMI()
const resultJohn = john.calcBMI()

console.log(resultJohn);
console.log(resultMark);

if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi.toFixed(1)}) is higher than ${mark.fullName}'s (${mark.bmi.toFixed(1)})!`);
} else {
    console.log(`${mark.fullName}'s BMI (${mark.bmi.toFixed(1)}) is higher than ${john.fullName}'s (${john.bmi.toFixed(1)})!`);
}


const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(bills[i] + tips[i]);
}

console.log(tips);
console.log(totals);

// Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
// an argument. This function calculates the average of all numbers in the given
// array. This is a difficult challenge (we haven't done this before)! Here is how to
// solve it:
// First, you will need to add up all values in the array. To do the addition,
//     start by creating a variable 'sum' that starts at 0. Then loop over the
// array using a for loop. In each iteration, add the current value to the
// 'sum' variable. This way, by the end of the loop, you have all values
// added together

// To calculate the average, divide the sum you calculated before by the
// length of the array (because that's the number of elements)

// Call the function with the 'totals' array

function calloutAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log(calloutAverage(totals));
























