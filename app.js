//?1. Write a custom function power ( a, b ), to calculate the value of a raised to b.

/*function power(a, b) {
    let result = 1;
    for (let i = 0; i < b; i++) {
        result = a;
    }
    return result;
}

// Example usage:
const base = 4;
const exponent = 3;
const result = power(base, exponent);
console.log(`${base} raised to the power of ${exponent} is ${result}`);*/


//? 2. Any year is entered through the keyboard. Write a function to determine whether the year is a leap year or not.
//? Leap years ..., 2012, 2016, 2020, …

/*function isLeapYear(year) {
    // Check if the year is divisible by 4
    if (year % 4 === 0) {
        // If it's divisible by 100, it should also be divisible by 400 to be a leap year
        if (year % 100 === 0) {
            return year % 400 === 0;
        } else {
            return true;
        }
    } else {
        return false;
    }
}

// Example usage:
const yearToCheck = 2020;
if (isLeapYear(yearToCheck)) {
    console.log(`${yearToCheck} is a leap year.`);
} else {
    console.log(`${yearToCheck} is not a leap year.`);
}*/

// ? 3. If the lengths of the sides of a triangle are denoted by a, b, and c, then area of triangle is given by area = S(S − a)(S − b)(S − c)
/* where, S = ( a + b + c ) / 2
Calculate area of triangle using 2 functions*/

// Function to calculate the semi-perimeter
/*function calculateSemiPerimeter(a, b, c) {
    return (a + b + c) / 2;
}

// Function to calculate the area of the triangle
function calculateTriangleArea(a, b, c) {
    const S = calculateSemiPerimeter(a, b, c);
    const area = Math.sqrt(S * (S - a) * (S - b) * (S - c));
    return area;
}

// Example usage:
const sideA = 3;
const sideB = 4;
const sideC = 5;

const triangleArea = calculateTriangleArea(sideA, sideB, sideC);
console.log(`The area of the triangle with sides ${sideA}, ${sideB}, and ${sideC} is ${triangleArea}`);*/



// ? 4. Write a function that receives marks received by a student in 3 subjects and returns the average and percentage of these marks. there should be 3 functions one is the mainFunction and other are for average and percentage. Call those functions from mainFunction and display result in mainFunction.

// Function to calculate the average of marks
/*function calculateAverage(subject1, subject2, subject3) {
    return (subject1 + subject2 + subject3) / 3;
}

// Function to calculate the percentage
function calculatePercentage(subject1, subject2, subject3, totalMarks) {
    const totalObtainedMarks = subject1 + subject2 + subject3;
    return (totalObtainedMarks / totalMarks) * 100;
}

// Main function to call the other functions and display results
function mainFunction() {
    const subject1Marks = 85;
    const subject2Marks = 92;
    const subject3Marks = 78;
    const totalMarks = 300; // Total marks for all three subjects

    const average = calculateAverage(subject1Marks, subject2Marks, subject3Marks);
    const percentage = calculatePercentage(subject1Marks, subject2Marks, subject3Marks, totalMarks);

    console.log(`Average Marks: ${average}`);
    console.log(`Percentage: ${percentage}%`);
}

// Call the main function to calculate and display results
mainFunction();
*/

// ? 5. You have learned the function indexOf. Code your own custom function that will perform the same functionality. You can code for single character as of now

/*function customIndexOf(inputString, searchChar) {
    for (let i = 0; i < inputString.length; i++) {
        if (inputString[i] === searchChar) {
            return i; // Return the index of the first occurrence of the searchChar
        }
    }
    return -1; // Return -1 if the searchChar is not found in the inputString
}

// Example usage:
const inputString = "Hello, world!";
const searchChar = "o";

const indexOfResult = customIndexOf(inputString, searchChar);

if (indexOfResult !== -1) {
    console.log(`The first occurrence of "${searchChar}" is at index ${indexOfResult}`);
} else {
    console.log(`"${searchChar}" was not found in the string.`);
}
*/

//? 6. Write a function to delete all vowels from a sentence. Assume that the sentence is not more than 25 characters long


// ? 7. Write a function with switch statement to count the number of occurrences of any two vowels in succession in a line of text. For example, in the sentence
// ? “Pleases read this application and give me gratuity” Such occurrences are ea, ea, ui


// ? 8. The distance between two cities (in km.) is input through the keyboard. Write four functions to convert and print this distance in meters, feet, inches and centimeters.


// ? 9. Write a program to calculate overtime pay of employees. Overtime is paid at the rate of Rs. 12.00 per hour for every hou worked above 40 hours. Assume that employees do not work for fractional part of an hour

/*function calculateOvertimePay(hoursWorked) {
    const regularHours = 40;
    const overtimeRate = 12.00;

    if (hoursWorked <= regularHours) {
        return 0; // No overtime pay if the hours worked are less than or equal to 40.
    } else {
        
        const overtimeHours = hoursWorked - regularHours;
        const overtimePay = overtimeHours * overtimeRate;
        return overtimePay;
    }
}

// Example usage:
const hoursWorked = 45; // Adjust this value based on the actual hours worked

const overtimePay = calculateOvertimePay(hoursWorked);
console.log(`Overtime Pay: Rs. ${overtimePay}`);
*/

































