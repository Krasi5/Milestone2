function bmiCalculation() {
    let userWeight = parseFloat(document.getElementById("weight").value);
    let userHeight = parseFloat(document.getElementById("height").value);
    
    
    if (isNaN(userHeight) || isNaN(userWeight) || userHeight <= 0 || userWeight <= 0) {
        document.getElementById("result").innerHTML = "Please enter valid weight and height values.";
            return;
    }
    let bmi = userWeight / (userHeight * userHeight);
    let bmiType = "";
    if (bmi < 18.5){
        bmiType = "Underweight"
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        bmiType = "Normal Weight"
    } else if (bmi >= 25 && bmi <= 29.9) {
        bmiType = "Overweight"
    } else if (bmi >= 30){
        bmiType = "Obesity"
    }
    
    document.getElementById("result").innerHTML = 
            "Your BMI is " + bmi.toFixed(1) + "<br>" +"You are " + bmiType
        }
     