// Buttons to access functions
const sliceButton = document.getElementById("one");
const replaceButton = document.getElementById("two");
const replaceAllButton = document.getElementById("three");
const concatButton = document.getElementById("four");
const charAtButton = document.getElementById("five");
const numCheck = document.getElementById("numCheck");
const resetButton = document.getElementById("reset");
const insertNew = document.getElementById("insert");

// Variable inputs and default starting string
let input = document.getElementById("input");
let inputTwo = document.getElementById("inputTwo");
let inputNew = document.getElementById("inputNew");
let string = 'Javascript';

// Prints string to the console (useful when you changed the string and you lost what it currently is)
numCheck.addEventListener("click", () => {
    console.log(`'${string}'`);
    console.log(input.value);
    console.log(inputTwo.value);
})
// Resets the first string back to the default value
resetButton.addEventListener("click", () => {
    string = 'Javascript';
    console.clear();
    console.log(`reset to '${string}'`);
})
// Takes the value from the 3rd input element and sets that as the new string (this is not a new default and when you reset the string will be default again)
insertNew.addEventListener("click", () => {
    string = inputNew.value;
    console.clear();
    console.log(`innitial string = '${string}'`);
})


// All 5 functions for the assignment
sliceButton.addEventListener("click", () => {
    let newString = ''; // Create a variable for this loop
    if(!input.value || !input.value){ // If there is no value, Return
        console.log('input the starting indecy and the ending indecy');
        return;
    }
    if(parseInt(input.value) > parseInt(inputTwo.value)){ // If the slice is invalid, Return
        console.log('invalid slice\nyou cannot start at an indecy after the ending');
        return;
    } if (parseInt(input.value) === parseInt(inputTwo.value)){ // If the slice is invalid, Return
        console.log('invalid slice\nboth numbers need to be different');
        return;
    }
    for(let i = input.value; i < inputTwo.value; i++){ // I starts at the first value you gave it, and the loop ends at the second value you gave it
        newString += string[i]; // Adding the requested piece of string to newString
    }
    string = newString; // Set string equal to newString
    console.log(`'${string}'`);
})
replaceButton.addEventListener("click", () => {
    let newString = ''; // Create a variable for this loop
    let ifCheck = false; // Boolean for if replace is complete
    if (!input.value){ // If there is no input value, Return
        console.log('please insert a value');
        return;
    }
    for(let i = 0; i < string.length; i++){
        if(!ifCheck){
            if (string[i] === (input.value)){
                newString += (inputTwo.value);
                i++; // Avoid placing the character you are replacing along with the replaced character
                ifCheck = true; // Dont allow the loop to continue replacing
            }
        }
        newString += string[i]; // Rewriting the string in newString with replacement
    }
    string = newString; // Set string equal to newString
    console.log(`new = ${string}`);
});
replaceAllButton.addEventListener("click", () => {
    let newString = ''; // Create a variable for this loop
    for(let i = 0; i < string.length; i++){
        if (!input.value){ // If there is no input value, Return
            console.log('please insert a value');
            return;
        }
        if (string[i] === (input.value)){
            newString += (inputTwo.value);
            i++; // Avoid placing the character you are replacing along with the replaced character
        }
        newString += string[i]; // Rewriting the string in newString with replacements
    }
    string = newString; // Set string equal to newString
    console.log(`'${string}'`);
});
concatButton.addEventListener("click", () => {
    let newString = ''; // Create a variable for this loop
    for(let i = 0; i < string.length; i++){
        newString += string[i]; // Add the first string to newString
    }
    for(let i = 0; i < input.value.length; i++){
        newString += input.value[i]; // Add the second string to newString
    }
    string = newString; // Set string equal to newString
    console.log(`'${string}'`);
});
charAtButton.addEventListener("click", () => {
    let selectedIndex = parseInt(input.value); // Create a variable to hold the requested index
    if(selectedIndex >= string.length){ // If the index that was input is invalid, Return
        console.log('not an available index');
        return;
    }
    for(let i = 0; i < string.length; i++){
        if(i === selectedIndex){ // If we are at the index that we want, Print it
            console.log(`charAt: '${string[i]}'`);
        }
    }
});
console.log(`innitial string = '${string}'`);
alert(`INSTRUCTIONS\n\n-input the string or number which that the function requires-\n\nslice requires the starting indecy and the ending indecy\nreplace and replaceAll require the target character and the character you will replace with\nconcat requires 1 string\ncharAt requires one indecy\n\nif you would like to change the starting word/phrase then type inside of the 3rd input and click the button labeled insert new\n\nstrCheck button prints what primary string is currently equal to\nreset button resets the string to its default value of 'Javascript'`)
alert('open console to begin!')