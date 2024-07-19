const userInput = document.getElementById("user-input"); 
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const result = document.getElementById("results-div"); 

const num1 = /1\s555\-555\-5555/; 

const isNumValid = (num) => num.match(num1)



checkBtn.addEventListener("click", () => {
  if(userInput.value === ""){
    alert("Please provide a phone number"); 
    return; 
  }

  result.textContent = isNumValid(userInput.value) ? `Valid US number: ${userInput.value}` : `Valid US number: ${userInput.value}`   
})

clearBtn.addEventListener("click", ()=>{
  result.textContent = ""; 
})