
// ----- We are creating a push able button that will change the color of the background and color of the text of the HEX colors.
// ----- The HEX colors will be random generated with numbers and certain alphabets.
// ----- The random HEX numbers that will be generated will replace the HEX colors on the Front-end by the push of the button.
//
// -----   Remember to complete these in steps. You got this!



// #1 --The first thing I have to complete is to create a variable for the button and color class.
//      This is going to allow us to grab these items, and make them usable here in the JS file.

const btn = document.getElementById("btn");
const color = document.querySelector(".color");


// #2 -- Secondly, we are going to create a variable for our numbers and alphabet to generate a random HEX color.
//       Hex colors only go to a-f and 0-9
//      The first two letters/numbers refer to red, the next two refer to green, and the last two refer to blue.
//      The color values are defined in values between 00 and FF

//      we are creating constant variables because they will never change through the program.
const hexNumbers = '0123456789';
const hexAlphabets = "abcdef";

//      Creating a function to generate a single number everytime it is called.
function getRandomNumber() {
    return hexNumbers[Math.floor(Math.random() * hexNumbers.length)]
}

//      Creating a function to generate a single character everytime it is called. (a-f)
function getRandomAlphabets() {
    return hexAlphabets[Math.floor(Math.random() * hexAlphabets.length)]
}


// #3 -- Third, we are now creating a function to have a place to create an array.
//       this will allow us to  place these random characters and numbers inside the array.
//       However It is only gonna contain one character/number
//       create an empty array, then push the random numbers, followed by the characters, return the array.

//      This function is gonna combine the set numbers and characters.
//      It should only produce one number or letter
function getRandom(){
    var arr = [];
    arr.push(getRandomNumber());
    arr.push(getRandomAlphabets());
    return arr[Math.floor(Math.random() * arr.length)]
}


//  #4 -- Fourth, create an onclick event listener to create a loop to produce a 6 character hex color.
//        It should run 6 times, because Hex colors have 6 characters
//        it should call for function getRandom(); and result in a random Hex color everytime that button is pushed.
//        Inside the eventListener (because we are active on click) I want it to change the background to the Front-end
//        as well with the Hex numbers that are visible.

btn.addEventListener("click", () => {
    var hex = "#";
    for (var replaceI = 0; replaceI < 6; replaceI++){
      hex = hex + getRandom();   // I understand the easier way to do it is: hex += getRandom();
    };
        document.body.style.backgroundColor = hex;
        color.textContent = hex;
});