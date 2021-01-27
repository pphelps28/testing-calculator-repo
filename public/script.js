/* 1/26 KNOWN BUGS TO ADDRESS FOR TESTING
/////////////////////////////////////////////
Multiple operators in a row will cause the history string to break; \
  Example: "1+2+++10"
/////////////////////////////////////////////
"Infinity" displays after a certain point; Should it display somethinge else?
//////////////////////////////////////////////
clicking numbers after clicking enter on a computation will concatenate strings; should wipe previous answer.
*/

// Declarations
let output = document.getElementById("output")
let numButtons = document.querySelectorAll(".number")
let operatorButtons = document.querySelectorAll(".operator")

let clearButton = document.querySelector("#clear")
let enterButton = document.querySelector("#enter")
let history = ""

// Function Definitions
function numberClick(e) {
  let val = e.target.textContent
  if (output.textContent) {
    output.textContent += val
    history += val
  } else {
    output.textContent = val
    history = val
  }
}

function operatorClick(e) {
  let val = e.target.textContent
  switch (val) {
    case "÷":
      output.textContent += "÷"
      history += "/"
      break;
    case "x":
      output.textContent += "x"
      history += "*"
      break;
    case "√x":
      output.textContent = Math.sqrt(eval(history))
      history = output.textContent;
      break;
    case "x²":
      output.textContent = Math.pow(+output.textContent, 2)
      history = output.textContent;
      break;
    default:
      output.textContent += val
      history += val
  }
}

function clearCalc() {
  output.textContent = ""
  history = ""
}

function calcAnswer() {
  output.textContent = eval(history)
}
// Event Listeners
numButtons.forEach(button => {
  button.addEventListener("click", numberClick)
})

operatorButtons.forEach(button => {
  button.addEventListener("click", operatorClick)
})
clearButton.addEventListener("click", clearCalc)
enterButton.addEventListener("click", calcAnswer)


