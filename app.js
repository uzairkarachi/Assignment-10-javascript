// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.
var firstname=prompt("please enter your first name");
var lastname=prompt("please enter your last name");
var fullname=firstname+" "+lastname;
// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser
var favoritePhone = prompt("Enter your favorite mobile phone model:");
var lengthOfstring = favoritePhone.length;
alert("The length of the string is: " + lengthOfstring);
// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .
var word = "Pakistani";
var indexofn = word.indexOf("n");
alert("The index of 'n' in the word 'Pakistani' is: " + indexofn);
// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

var word1 = "Hello World";
var lastindexofl = word1.lastIndexOf("l");
alert("The last index of 'l' in the word 'Hello World' is: " + lastindexofl);

// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.
var word2 = "Pakistani";
var charAtIndex3 = word2.charAt(3);
alert("The character at index 3 in the word 'Pakistani' is: " + charAtIndex3);

// 6. Repeat Q1 using string concat() method.
var firstName1 = prompt("Enter your first name:");
var lastName1 = prompt("Enter your last name:");
var fullName1 = "".concat(firstName1, " ", lastName1);
alert("Hello, " + fullName1 + "!");

// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.
var originalString = "Hello World";
var replacedString = originalString.replace("Hello", "Welcome");
alert("The replaced string is: " + replacedString);

// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;
var message = "Ali and Sami are best friends. They play cricket and football together.";
var replacedMessage = message.replace(/and/g, "&");
alert("The replaced message is: " + replacedMessage);

// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.
var stringNumber1 = "472";
console.log(stringNumber1)
var number1 = parseInt(stringNumber1);
console.log(number1);
alert("The number is: " + number1);
// 10. Write a program that takes user input. Convert and
// show the input in capital letters.
var userInput = prompt("Enter some text:");
var uppercaseInput = userInput.toUpperCase();
alert("The input in uppercase is: " + uppercaseInput);

// 11. Write a program that takes user input. Convert and
// show the input in title case.
var userInput1 = prompt("Enter some text:");
var words = userInput1.split(" ");
var titleCaseInput = "";
for (var i = 0; i < words.length; i++) {
    titleCaseInput += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
}
titleCaseInput = titleCaseInput.trim();
alert("The input in title case is: " + titleCaseInput);

// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.
var num = 35.36;
var numAsString = num.toString();
console.log(numAsString);

// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .
var username = prompt("Enter your username:");
var specialChars = "[@ . , !]";
for (var i = 0; i < username.length; i++) {
    if (specialChars.indexOf(username.charAt(i)) != -1) {
        username = prompt("Enter a valid username:");
    }
}
alert("Your username is: " + username);

// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64

// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput2 = prompt("Enter an item to search:");
var found = false;
for (var i = 0; i < A.length; i++) {
    if (A[i].toLowerCase() === userInput2.toLowerCase()) {
        found = true;
        break;
    }
}
if (found) {
    alert(userInput2 + " is available in the list");
} else {
    alert(userInput2 + " is not available in the list");
}
// 15. Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.
var password = prompt("Enter a password:");
var isValidPassword = true;
if (password.length < 6) {
    isValidPassword = false;
} else if (isNaN(parseInt(password.charAt(0))) === false) {
    isValidPassword = false;
} else {
    for (var i = 0; i < password.length; i++) {
        var charCode = password.charCodeAt(i);
        if ((charCode < 48 || charCode > 57) && (charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122)) {
            isValidPassword = false;
            break;
        }
    }
}
if (isValidPassword) {
    alert("Valid password");
} else {
    alert("Invalid password. Please enter a password that meets the requirements.");
}

// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.
var university = "University of Karachi";
var splitUniversity = university.split("");
var newUniversity = "";
for (var i = 0; i < splitUniversity.length; i++) {
    newUniversity += splitUniversity[i] + "\n";
}
alert(newUniversity);

// 17. Write a program to display the last character of a user
// input.
var userInput3 = prompt("Enter a character:");
var lastChar = userInput3.charAt(userInput3.length - 1);
alert("The last character is: " + lastChar);

// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.
var string1 = "The quick brown fox jumps over the lazy dog";
var string2 = "edabit is awesome";
var length1 = string1.length;
var length2 = string2.length;
if (length1 > length2) {
    alert("The string 'The quick brown fox jumps over the lazy dog' is longer.");
} else if (length1 < length2) {
    alert("The string 'edabit is awesome' is longer.");
} else {
    alert("Both strings have the same length.");
}