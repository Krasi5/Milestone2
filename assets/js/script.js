function bmiCalculation() {
    //get values 
    let userWeight = parseFloat(document.getElementById("weight").value);
    let userHeight = parseFloat(document.getElementById("height").value);
    //check correctness of the values and wrong entry message display 
    if (isNaN(userHeight) || isNaN(userWeight) || userHeight <= 0 || userWeight <= 0) {
        document.getElementById("result").innerHTML = "Please enter valid weight and height values.";
            return;
    }
    //calculation of the BMI
    let bmi = userWeight / (userHeight * userHeight);
    let bmiType = "";
    //set BMI categories 
    let underweightBox = document.getElementById("under");
    let normalWeightBox = document.getElementById("normal");
    let overweightBox = document.getElementById("over");
    let obesityBox = document.getElementById("obese");
    //categories range and colour coding
    if (bmi < 18.5){
        bmiType = "Underweight"
        underweightBox.style.backgroundColor = "lightblue"
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        bmiType = "Normal"
        normalWeightBox.style.backgroundColor = "lightgreen"
    } else if (bmi >= 25 && bmi <= 29.9) {
        bmiType = "Overweight"
        overweightBox.style.backgroundColor = "orange"
    } else if (bmi >= 30){
        bmiType = "Obesity";
        obesityBox.style.backgroundColor = "red"
    }
    //get result and display result message
    document.getElementById("result").innerHTML = 
            "Your BMI is " + bmi.toFixed(1) + "<br>" +"Your BMI category is " + bmiType
        }

    
