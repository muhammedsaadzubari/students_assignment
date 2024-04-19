"use strict";
let score = 60;
if (score > 100) {
    console.log("Enter a valid score!");
}
else if (score >= 80 && score <= 100) {
    console.log("Your grade is A!");
    if (score >= 90 && score <= 100) {
        console.log("And you are rewarded by a trophy!");
    }
}
else if (score >= 70 && score <= 80) {
    console.log("Your grade is B!");
}
else if (score >= 60 && score <= 70) {
    console.log("Your grade is C!");
}
else if (score >= 50 && score <= 60) {
    console.log("Your grade is D!");
}
else {
    console.log("You are fail!");
}
