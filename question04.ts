let weightQues:string = "Enter your weight in KG!"
let weight:number = 70
let heightQues: string = "Enter your height in feet!"
let height: number = 6 
let heightInMeter = height * 0.3048;
let bmi = weight/(heightInMeter*heightInMeter);
console.log(weightQues)
console.log(weight)
console.log(heightQues)
console.log(height)
console.log(`Your BMI is ${bmi}.`);

if(bmi < 18.5){
    console.log(`You are week!`)
}else if(bmi >= 18.5 && bmi < 25){
    console.log(`You are healthy!`)
}else if(bmi >= 25.0 && bmi < 30){
    console.log(`You are overweight!`)
}else if(bmi >= 30.0 && bmi < 35){
    console.log(`You are obese class 01!`)
}else if(bmi >= 35 && bmi < 40){
    console.log(`You are obese class 02!`)
}else if(bmi >= 40){
    console.log(`You are obese class 03 "severe" obesity!`)
}