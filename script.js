function convertTemperature() {
    let temp = document.getElementById('tempInput').value;
    let fromUnit = document.getElementById('fromUnit').value;
    let toUnit = document.getElementById('toUnit').value;
    let result = 0;

    if (temp !== '') {
        temp = parseFloat(temp);

        switch (fromUnit + ' to ' + toUnit) {
            case 'Celsius to Fahrenheit':
                result = (temp * 9/5) + 32;
                break;
            case 'Celsius to Kelvin':
                result = temp + 273.15;
                break;
            case 'Fahrenheit to Celsius':
                result = (temp - 32) * 5/9;
                break;
            case 'Fahrenheit to Kelvin':
                result = (temp - 32) * 5/9 + 273.15;
                break;
            case 'Kelvin to Celsius':
                result = temp - 273.15;
                break;
            case 'Kelvin to Fahrenheit':
                result = (temp - 273.15) * 9/5 + 32;
                break;
            default:
                result = 'Conversion not valid.';
        }

        document.getElementById('result').innerText = `Result: ${result.toFixed(2)} ${toUnit}`;
    } else {
        document.getElementById('result').innerText = 'Please enter a valid temperature.';
    }
}