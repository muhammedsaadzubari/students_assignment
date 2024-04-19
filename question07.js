"use strict";
let q1 = "Who is the first human landed on the moon?";
let ans1 = "Saad";
let orgAns1 = "Neil Armstrong";
let result1 = (ans1 === orgAns1) ? true : false;
console.log(`Question1 '${q1}'\n you answered '${ans1}'\n and the answer is '${orgAns1}'\n`);
let q2 = "Who is the founder of Pakistan?";
let ans2 = "Quaid-e-Azam";
let orgAns2 = "Quaid-e-Azam";
let result2 = (ans2 === orgAns2) ? true : false;
console.log(`Question2 '${q2}'\n you answered '${ans2}'\n and the answer is '${orgAns2}'\n`);
let q3 = "Is America is a non-muslim country?";
let ans3 = "No";
let orgAns3 = "Yes";
let result3 = (ans3 === orgAns3) ? true : false;
console.log(`Question3 '${q3}'\n you answered '${ans3}'\n and the answer is '${orgAns3}'\n`);
let q4 = "Who is the author of typescript?";
let ans4 = "Brendan Eich";
let orgAns4 = "Anders Hejlsberg";
let result4 = (ans4 === orgAns4) ? true : false;
console.log(`Question4 '${q4}'\n you answered '${ans4}'\n and the answer is '${orgAns4}'\n`);
if (result1 && result2 && result3 && result4) {
    console.log('You are passed!');
}
else {
    console.log('You are fail!');
}
