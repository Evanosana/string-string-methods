const sliceButton = document.getElementById("one");
const replaceButton = document.getElementById("two");
const replaceAllButton = document.getElementById("three");
const concatButton = document.getElementById("four");
const charAtButton = document.getElementById("five");
const numCheck = document.getElementById("numCheck");
const resetButton = document.getElementById("reset");

let input = document.getElementById("input");
let inputTwo = document.getElementById("inputTwo");
let string = 'nice string';
let secondString = 'even nicer string';
console.log(string);

numCheck.addEventListener("click", () => {
    console.log(string);
    console.log(input.value);
    console.log(inputTwo.value);
})
resetButton.addEventListener("click", () => {
    nums = [4, 3, 7, 10, 3];
    console.clear();
    console.log(nums);
})

sliceButton.addEventListener("click", () => {
    for(let i = 0; i < nums.length; i++){

    }
})
replaceButton.addEventListener("click", () => {
    for(let i = 0; i < string.length; i++){
        if (!input.value){
            console.log('please insert a value');
            return
        }
        console.log(string[i], input.value, inputTwo.value)
        if (string[i] === (input.value)){
            string[i] = (inputTwo.value)
            console.log(string)
            return
        }
    }
});
replaceAllButton.addEventListener("click", () => {
    for(let i = 0; i < string.length; i++){
        if (!input.value){
            console.log('please insert a value');
            return
        }
        if (string[i] === (input.value)){
            console.log(string[i])
            string[i] = (inputTwo.value)
        }
    }
    console.log(nums)
});




// concatButton.addEventListener("click", concatFunction);
// charAtButton.addEventListener("click", charAt);


