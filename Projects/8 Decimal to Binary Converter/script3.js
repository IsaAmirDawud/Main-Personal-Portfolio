const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

/* This function converts (the number the user inputs) into a binary number. */
const decimalToBinary = (input) => {
    if (input === 0 || input === 1) {
        return String(input);
      } else {
        return decimalToBinary(Math.floor(input / 2)) + (input % 2);
      }
};

// This function is to check if the user has inputed an invalid value. 
const checkUserInput = () => {


  /* The first part of the if statement expression is looking for a falsy value. Therefore, if an empty string is returned (meaning the user did not input a number) the if statment will run. The parseInt function will
  rerturn a whole number (if the user inputs a number) or "NaN" ("If the user inputs a string that is not a number"). The isNaN function returns true if the argument is "NaN" or false if the argument is a number. 
  Therefore, isNaN will evaluate to true if the user inputs a string that is not a number. */
  if (!numberInput.value || isNaN(parseInt(numberInput.value))) {
    alert("Please provide a decimal number"); 
    return; 

  }
};



convertBtn.addEventListener("click", checkUserInput);

numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});