// Life-in-Weeks-Coding-Exercise
// In this challenge, you are going to create a function that tells us how many days, weeks and months we have left if we live until 120 years old.

// It will take your current age as the input and console.logs a message with our time left in this format:

// You have x days, y weeks, and z months left.

// Where x, y and z are replaced with the actual calculated numbers.

// For this challenge assume that:

//     1 year = 365 days
//     1 year = 52 weeks
//     1 year = 12 months

// IMPORTANT your console.log output should match the example output format exactly, even the positions of the commas and full stops.

// Example Input
// e.g. If you are 56 years old:
//       1| lifeInWeeks(56)

// Example Output
//       1| You have 12410 days, 1768 weeks, and 408 months left.`
// Hint

// Try using this Repl.it playground to test your code and see if the output is what you exepect it to be.
// Make sure your console.log output matches the example output precisely. The same capitalisation, the same spaces, commas and full stops.

function lifeInWeeks(age) {
    var yearsReamaining =90-age;
    var  days =yearsReamaining* 365;
    var weeks = yearsReamaining*52;
    var months = yearsReamaining*12;
    console.log("You have "+days+" days "+weeks+" weeks "+months+" months left ");
}

    lifeInWeeks(12);
