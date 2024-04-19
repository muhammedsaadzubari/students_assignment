let q1 : string = "Who is the first human landed on the moon?"
let ans1 : string = "Saad"
let orgAns1: string = "Neil Armstrong"
let result1: boolean = (ans1 === orgAns1)? true : false
console.log(`Question1 '${q1}'\n you answered '${ans1}'\n and the answer is '${orgAns1}'\n`);

let q2 : string = "Who is the founder of Pakistan?"
let ans2 : string = "Quaid-e-Azam"
let orgAns2: string = "Quaid-e-Azam"
let result2: boolean = (ans2 === orgAns2)? true : false
console.log(`Question2 '${q2}'\n you answered '${ans2}'\n and the answer is '${orgAns2}'\n`);

let q3 : string = "Is America is a non-muslim country?"
let ans3 : string = "No"
let orgAns3: string = "Yes"
let result3: boolean = (ans3 === orgAns3)? true : false
console.log(`Question3 '${q3}'\n you answered '${ans3}'\n and the answer is '${orgAns3}'\n`);

let q4 : string = "Who is the author of typescript?"
let ans4 : string = "Brendan Eich"
let orgAns4: string = "Anders Hejlsberg"
let result4: boolean = (ans4 === orgAns4)? true : false
console.log(`Question4 '${q4}'\n you answered '${ans4}'\n and the answer is '${orgAns4}'\n`);

if(result1 && result2 && result3 && result4){
    console.log('You are passed!');   
}else{
    console.log('You are fail!');
}