# Question 01:

\*\*Even-Odd Number Checker:
Create a variabe and store a number in it. Using the if-else statement, check if the number is even or odd by using the modulus operator %. If the remainder is equal to 0, log the message 'It is an even number!' using console.log. Otherwise, log the message 'It is an odd number!'. Remember, an even number is divisible by 2 without a remainder, while an odd number has a remainder when divided by 2."

# Question 02:

\*\*Grading System:
Start by declaring a variable named score and assign it a number value, for example: let score: number = 60;.
Use an if-else if-else statement to evaluate the value of score and determine the appropriate message to log:
If score is greater than 100, log the message "Enter a valid score!" using console.log.
Else if score is between 80 and 100 (inclusive), log the message "Your grade is A!" using console.log. Additionally, check if score is between 90 and 100 (inclusive), and if so, log the message "And you are rewarded by a trophy!" using console.log.
Else if score is between 70 and 80 (inclusive), log the message "Your grade is B!" using console.log.
Else if score is between 60 and 70 (inclusive), log the message "Your grade is C!" using console.log.
Else if score is between 50 and 60 (inclusive), log the message "Your grade is D!" using console.log.
Else (if none of the above conditions are met), log the message "You are fail!" using console.log.

# Question 03:

\*\*Vowel or Consonant Checker:
Declare a variable named alphabet and assign it a value, for example: let alphabet = "b";.
Use an if-else statement to check if alphabet is a vowel:
Convert alphabet to lowercase to handle both uppercase and lowercase inputs.
Use the logical OR (||) operator to check if alphabet is equal to any of the vowel characters ("a", "e", "i", "o", "u").
Log the appropriate message using console.log based on whether alphabet is a vowel or not.

# Question 04:

\*\*Body Mass Index (BMI) Calculator and Health Status Checker:
1: Declare Variables and Messages:
Declare a variable weightQues and assign it the message "Enter your weight in KG!".
Log weightQues using console.log.
Declare a variable weight and assign it a numeric value representing the weight in kilograms (e.g., 70).
Log weight using console.log.
Declare a variable heightQues and assign it the message "Enter your height in feet!".
Log heightQues using console.log.
Declare a variable height and assign it a numeric value representing the height in feet (e.g., 6).
Log height using console.log.
2: Calculate BMI:
Calculate heightInMeter by multiplying height with the conversion factor 0.3048 (1 foot = 0.3048 meters).
Calculate bmi using the formula weight / (heightInMeter \* heightInMeter).
Log the calculated BMI using template literals in the format console.log(Your BMI is ${bmi}.).
3: Check BMI Category and Output Health Status:
Use an if-else if-else statement to check the BMI category based on the calculated BMI value.
If bmi is less than 18.5, log "You are weak!" using console.log.
Else if bmi is between 18.5 and 24.9 (inclusive), log "You are healthy!" using console.log.
Else if bmi is between 25.0 and 29.9 (inclusive), log "You are overweight!" using console.log.
Else if bmi is between 30.0 and 34.9 (inclusive), log "You are obese class 01!" using console.log.
Else if bmi is between 35 and 39.9 (inclusive), log "You are obese class 02!" using console.log.
Else (if bmi is 40 or greater), log "You are obese class 03 'severe' obesity!" using console.log.

# Question 05:

\*_Temperature converter:
1: Start by store a temperature in a variable to convert the temperature from Fahrenheit to Celsius. You can use a console.log statement to display this temperature.
2: Convert Fahrenheit to Celsius:
Declare a variable tempFahrenheit and assign it the value of the temperature in Fahrenheit (for example, 93°F).
Use the formula (tempFahrenheit - 32) _ 5 / 9 to convert Fahrenheit to Celsius. Store the result in a variable like tempConvertInCelsius.
3: Display Converted Temperature:
Use a console.log statement with a template literal to display the converted temperature. For example, console.log(${tempFahrenheit}°F is ${tempConvertInCelsius}°C);
4: Prompt for Celsius to Fahrenheit Conversion:
Next, prompt the user to convert the given temperature from Celsius to Fahrenheit. Again, use a console.log statement to display this prompt.
5: Convert Celsius to Fahrenheit:
Declare a variable tempCelsius and assign it the value of the temperature in Celsius (for example, 34°C).
Use the formula (tempCelsius * 9 / 5) + 32 to convert Celsius to Fahrenheit. Store the result in a variable like tempConvertInFahrenheit.
6: Display Converted Temperature:
Use another console.log statement with a template literal to display the converted temperature. For example, console.log(${tempCelsius}°C is ${tempConvertInFahrenheit}°F);

# Question 06:

\*\*Prayer Information Lookup:
1: Prompt for Prayer Name:
Start by prompting the user to enter the name of a prayer. You can display a message like "Enter prayer name!" using console.log().
2: Declare Prayer Information:
Declare variables to store information about each prayer. For example:
Fajr: "Total: 4 rakats (2 Sunnat Mokadda and 2 Fard)"
Zuhr: "Total: 12 rakats (4 Sunnat Mokadda, 4 Fard, 2 Sunnat Mokadda and 2 Nafl)"
Asr: "Total: 8 rakats (4 Sunnat Ghair Mokadda and 4 Fard)"
Maghrib: "Total: 7 rakats (3 Fard, 2 Sunnat Mokadda and 2 Nafl)"
Isha: "Total: 17 rakats (4 Sunnat Mokadda, 4 Fard, 2 Sunnat Mokadda, 2 Nafl, 3 Witr, 2 Nafl)"
3: Check User Input:
Use an if-else if ladder to check the user's input against each prayer name.
If the input matches a prayer name, display the corresponding information about that prayer.
If the input doesn't match any prayer name, display a message indicating that the user should enter the correct prayer name.
4: Display Result:
After checking the user input, display the information about the prayer using console.log().
5: Handle Incorrect Input:
If the user enters a prayer name that doesn't match any predefined names, handle this case by displaying a message to enter the correct prayer name.

# Question 07:

\*\*Quiz:

1: Define Questions and Answers:
Write down a set of questions, along with their correct answers.
Optionally, you can also include multiple-choice options if your quiz format includes them.
2: Create Variables for Questions, User Answers, and Correct Answers:
For each question, create variables to store the question itself (q1, q2, etc.), the user's answer (ans1, ans2, etc.), and the correct answer (orgAns1, orgAns2, etc.).
3: Check User's Answers:
Compare the user's answers with the correct answers and determine if they are correct or not.
You can use a simple comparison like === to check if the answers match.
4: Display Results:
After checking all questions, display the questions, the user's answers, the correct answers, and whether the user passed or failed the quiz.

# Question 08:

\*\*Medical Advice System: Personalized Dosage Recommendations:
1: Define Variables:
problem: Represents the health issue (e.g., "cough and cold").
age: Represents the age of the patient.
2: Check the Health Problem:
If the problem is "cough and cold," the program recommends using "coldrex" and provides dosage instructions based on the age.
If the problem is "Headache and Fever," the program recommends using "Panadol" and provides dosage instructions based on the age.
If the problem is neither of these two, it prompts the user to enter the correct problem.
3: Dosage Instructions:
The program provides different dosage instructions based on the age range for each medication.
It checks the age range and prints the appropriate dosage information for each case.
4: Consultation Reminder:
If the age is under 2 years, the program advises consulting with a physician, emphasizing the importance of professional advice for young children.
5: Output:
The program uses console.log statements to output the recommended medication, dosage instructions, and reminders for consultation if needed.
