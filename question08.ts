let problem : string = "cough and cold"
let age : number = 14

if(problem === "cough and cold"){
    console.log('Should use coldrex');
    if(age >= 2 && age <= 5){
        console.log('1 teaspoon \n after every four to six hours.But not morethan 4 teaspoon in 24 hours.');
    }
    else if(age >= 6 && age <= 12){
        console.log('1 - 1½ teaspoon \n after every four to six hours. But not morethan 9 teaspoon in 24 hours.');
    }
    if(age >= 13){
        console.log('1 tablespoon \n after every four to six hours. But not morethan 8 tablespoon in 24 hours.');
    }
    else{
        console.log('For age of under 2 years consult with physician');
    }
}else if(problem === "Headache and Fever"){
    console.log('Should use Panadol');
    if(age >= 2 && age <= 5){
        console.log('1 teaspoon \n after every four to six hours.But not morethan 4 teaspoon in 24 hours.');
    }
    else if(age >= 6 && age <= 12){
        console.log('1 - 1½ teaspoon \n after every four to six hours. But not morethan 9 teaspoon in 24 hours.');
    }
    if(age >= 13){
        console.log('1 tablespoon \n after every four to six hours. But not morethan 8 tablespoon in 24 hours.');
    }
    else{
        console.log('For age of under 2 years consult with physician');
    }
}else{
    console.log('Enter correct problem!');
}