const startTemp = Number(prompt("Enter starting temperature"));
const endTemp = Number(prompt("Enter ending temperature"));
const scale = prompt("Enter 'C' for Celcius or 'F' for Fahrenheit.");

function convertTemperatureRange(){
    let result = "";
    for(let i=startTemp; i<=endTemp; i++){

        if(scale.toUpperCase() == "C"){
            let Fahrenheit = (i * 9/5) + 32;
            result += `<p> ${i}°C= ${Fahrenheit}°F </p>`;
        }else if (scale.toUpperCase() == "F" ){
            let Celsius = ((i - 32) * 5/9).toFixed(0);
            result += `<p> ${i}°F = ${Celsius}°C </p>`;
        }
    }
    document.getElementById("temperature-conversions").innerHTML = result;
}

convertTemperatureRange();

