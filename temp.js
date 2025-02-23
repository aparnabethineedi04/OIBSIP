function convertTemperature() {
    let inputTemp = parseFloat(document.getElementById("inputTemp").value);
    let inputUnit = document.getElementById("inputUnit").value;
    let outputUnit = document.getElementById("outputUnit").value;
    let result = document.getElementById("result");
    let thermometerFill = document.getElementById("thermometerFill");
    
    if (isNaN(inputTemp)) {
        result.innerHTML = "Please enter a valid number.";
        return;
    }
    
    let convertedTemp;
    
    if (inputUnit === outputUnit) {
        convertedTemp = inputTemp;
    } else if (inputUnit === "Celsius" && outputUnit === "Fahrenheit") {
        convertedTemp = (inputTemp * 9/5) + 32;
    } else if (inputUnit === "Celsius" && outputUnit === "Kelvin") {
        convertedTemp = inputTemp + 273.15;
    } else if (inputUnit === "Fahrenheit" && outputUnit === "Celsius") {
        convertedTemp = (inputTemp - 32) * 5/9;
    } else if (inputUnit === "Fahrenheit" && outputUnit === "Kelvin") {
        convertedTemp = (inputTemp - 32) * 5/9 + 273.15;
    } else if (inputUnit === "Kelvin" && outputUnit === "Celsius") {
        convertedTemp = inputTemp - 273.15;
    } else if (inputUnit === "Kelvin" && outputUnit === "Fahrenheit") {
        convertedTemp = (inputTemp - 273.15) * 9/5 + 32;
    }
    
    result.innerHTML = `${convertedTemp.toFixed(2)} °${outputUnit.charAt(0)}`;
    
    let fillPercentage = 0;
    if (outputUnit === "Celsius") {
        fillPercentage = Math.min(Math.max((convertedTemp + 50) / 100, 0), 1) * 100;
    } else if (outputUnit === "Fahrenheit") {
        fillPercentage = Math.min(Math.max((convertedTemp + 58) / 116, 0), 1) * 100;
    } else if (outputUnit === "Kelvin") {
        fillPercentage = Math.min(Math.max((convertedTemp - 173) / 227, 0), 1) * 100;
    }
    
    thermometerFill.style.height = `${fillPercentage}%`;
}