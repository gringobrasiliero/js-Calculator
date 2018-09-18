$(document).ready(function(){ // on document ready
let operator = document.querySelectorAll("#op")
let y = document.querySelectorAll("#num")
let field = 1
let newCalc = "yes"
let equal = document.getElementById("eq")
let inputOne = "";
let inputTwo = ""
screen = document.getElementById("dis")

operator.forEach( opbutton => opbutton.addEventListener("click", event => {
  screen.innerHTML = ""
  oper = event.target.value
  field = 2

}))

y.forEach( bn => bn.addEventListener("click", event => {
  if(newCalc === "yes"){
    inputOne = "";
    inputTwo = "";
    screen.innerHTML = ""
    field = 1
  }
  if (field === 1){
  inputOne = inputOne + event.target.value
  screen.innerHTML = inputOne
  }else{
    inputTwo = inputTwo + event.target.value
  screen.innerHTML = inputTwo
  }
newCalc = "no"
}))


equal.addEventListener("click", event => {
  screen.innerHTML = "";
  let total = eval(`${inputOne} ${oper} ${inputTwo}`)
  screen.innerHTML = total
  inputOne=""
  inputTwo=""
  newCalc = "yes"
})




});
