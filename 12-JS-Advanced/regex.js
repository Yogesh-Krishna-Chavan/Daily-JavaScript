//email validation using regex
//regex is a sequence of characters that define a search pattern
//regex is used to search, match, replace, split, and extract text
//regex is used to validate email, password, phone number, etc.
//regex is used to extract information from any text by searching for one or more matches of a specific search pattern
//regex is used to find and replace text in a string by searching for one or more matches of a specific search pattern
//regex is used to split a string into an array of substrings by searching for one or more matches of a specific search pattern

const emailRegex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,}$/;

function validateEmail(email) {
  return emailRegex.test(email);
}

let email1 = "yogeshchavan113@gmail.com";

let email2 = "yogeshChavan@sunbeamInfo.in";

console.log(validateEmail(email1));
console.log(validateEmail(email2));
