// javascript
let input = document.getElementById("inputnumber") // takes input from the user

let meterFeet = document.getElementById("meter-feet") //used to access element of html in Javascript
let litergallon = document.getElementById("liter-gallon")
let kilogrampound = document.getElementById("kilogram-pound")


function metertofeet() {
    let meter = input.value + " meter" + " = " + (input.value * 3.28084).toFixed(3) + " feet" // need .value to get the number otherwise will get this error [object HTMLInputElement]
   
    let feet = input.value + " feet" + " = " + (input.value / 3.28084).toFixed(3) + " meter" // .tofixed to round off the value
    
    let result = meter + " | " + feet
    
    meterFeet.textContent = result  //to print result in the meter-feet class which will display result
}


function litertogallon() {
     let liter = input.value + " liter" + " = " + (input.value * 0.264172).toFixed(3) + " gallon"
  
    let gallon = input.value + " gallon" + " = " + (input.value / 0.264172).toFixed(3) + " liter"
    
    let result = liter + " | " + gallon
    
    litergallon.textContent = result 
}


function kilogramtopound() {
    let kilogram = input.value + " kilogram" + " = " + (input.value * 2.20462).toFixed(3) + " pound"
  
    let pound = input.value + " pound" + " = " + (input.value / 2.20462).toFixed(3) + " kilogram"
    
    let result = kilogram + " | " + pound
    
    console.log(kilogrampound.textContent = result)
}
kilogramtopound()