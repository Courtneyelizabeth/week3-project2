// More Function Exercises!

// 1. Without using Math.min(), write a function called minimum() that takes two numbers
//    and outputs the smallest one to the console.
var min = function (number, number1){
	if (number > number1){
		return number1;
	}
	else{
		return number;
	}
};
console.log(min(-99, -4));
//-99
console.log(min(2109, 2));
//2
console.log(min(0, 10));
//  0
console.log(min(0, -10));
// -10
// 2. Create a new function called minimum3() to find the smallest of three numbers
function minimum3 (num, number, number1) {
	if (num < number && num < number1){
		return num;
	}else if (number < num && num < number1){
		return number;
	}else {
		return number1;
	}
};
 	
console.log(minimum3(-99, -4, 2));

console.log(minimum3(2109, 2, 0));

console.log(minimum3(0, 10, -1));

console.log(minimum3(0, -10, 12));

// 3. Declare a function called sum() that takes an array of numbers as an argument adds them.
//    i.e. sum([1, 2, 3, 4]) should return 10.
var array = [1, 2, 3, 4];
function sum(numbers){
	return array.reduce(function(a,b){
		return a + b;
	})
};
console.log("sum is: " + sum(array));
//10
//sum(array);
//10
//var sum = [1, 2, 3, 4].reduce(function(a, b){ 
	//return a + b; 
//});
      //.reduce : reduce’ method to goes throught the array one after another over each 
      //value of the original array (‘a’ is the current value, ‘b’ is the next value) 

// 4. Declare a function called multiply() that takes an array of numbers and multiplies them together.
//    i.e. multiply([1, 2, 3, 4]) should return 24.
var array = [1, 2, 3, 4];
function multiply (numbers){
	return array.reduce(function(a,b){
		return a * b;
	})
};
multiply(array);
//24

// 5. Write a function called filterSixPlus() that takes the following array and returns words
//    that are six characters or longer.

//filtered: array that only contains values that meet a specific condition
var words = ["window", "table", "barstool", "glass", "charger", "outlet"];

function filterSixPlus(words) {
	return words.filter(function(words){
		if(words.length >= 6){
			return words;
		}
	})
};
filterSixPlus(words);

//console.log("Words six characters or longer: " + filterSixPlus(words));

// 6. Use a function to ask a user for a temperature in Celsius and converts it to Fahrenheit.
var userInput = prompt ("Enter the temperature in Celsius.");


function fahrenheit(userInput) { /*convert to Fahrenheit*/

    var conversion;
    conversion = (userInput * 9/5 +32);

    return conversion;
};
 console.log(userInput + " Celcius is " + fahrenheit(userInput) + " Fahrenheit");
// 7. Adding to the code in #2, prompt the user a second time to determine whether they'd like to convert from Fahrenheit to Celsius
//    or from Celsius to Fahrenheit. To keep it simple, instruct them to use "F to C" or "C to F".
//    Alert them with an error if they do not follow the rules.
var userInput2 = prompt ("Would you like to convert the temperature from F' to C' or C' to F'?");
// 8. Write a function countBs() that takes a string as its only argument and returns
//    a number that indicates how many uppercase “B” characters are in the string.
//    HINT: Google charAt()

function countBs(string) {
	var count = 0; 
for (var i=0; i <string.length; i++){
	if(string.charAt(i)== "B")
	count +=1;
	return count;
	}	
};

console.log(countBs("Beach Blanket"));
console.log(countBs("Ivory"));
console.log(countBs("Bronco's Super Bowl"));


// 9. Write a function called countChars() that behaves like countBs(), except it takes a
//    second argument that indicates what character is to be counted.
function countChars(string, characters){
	var count = 0;
for(var i=0; i <string.length; i++)
	if(string.charAt(i) == characters)
	count +=1;
	return count; 	
};
console.log(countChars("Beach Blanket", "a"));
console.log(countChars("Keep close to natures heart", "t"));
console.log(countChars("123 123 313 123 123 A23", "3"));

// 10. Declare a function called ohZero() that replaces all of the o's in a string with 0's.
var res = string
var string = "Soon you will master functions!";

function ohZero(string) {
    var string = "Soon you will master functions!";
    var res = string.replace(/o/gi, "0");
    	return res;
}

ohZero(res);
//"S00n y0u will master functi0ns!"
ohZero(string);
//"S00n y0u will master functi0ns!"

// 11. Write function that translates a sentence into pig latin.
//     https://en.wikipedia.org/wiki/Pig_Latin
//     i.e. "look at my cool function" --> "ooklay atyay ymay oolcay unctionfay"
  
function pigLatinTranslate (string) {
	var string = "";
	var vowel = ["a", "e", "i", "o", "u"];

	for(i=0; i<string.length; i++);
	for(j=0; j<vowel.length; i++){
		if(string.length = vowel.length){
			.join("yay");

	} return ;
		}
}


// 12. Write a function that prints out the entire "99 Bottles of Beer on the Wall" song lyrics.

// 13. Create a 'Guessing Game'. The game starts by picking a random number.
//    It then prompts the user to guess the number. If the user's number is lower/higher,
//    it will prompt the user to enter another guess and tell the user if the guess was
//    too high or too low. This continues until the correct guess is entered.
//    When the correct guess is entered the user is given a success message with the correct number.


// 14. http://games.usvsth3m.com/javascript-under-pressure/
//     Have fun with these! Get as far as you can and record your progress and time. We'll try this again in a few weeks!
