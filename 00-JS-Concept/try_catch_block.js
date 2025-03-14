//try, catch, finally block
// try block is used to enclose the code that might throw an exception
// catch block is used to handle the exception
// finally block is used to execute the code after try and catch blocks regardless of the result

function divide(a, b) {
  try {
    if (b === 0) {
      throw new Error("Divide by zero is not possible");
    } else {
      console.log(`a / b = ${a / b}`);
    }
  } catch (error) {
    console.log(error.message);
  }
}
divide(10, 0);
divide(10, 2);
