function calculateWindChill(temp, windSpeed){// the temp must to be in fahrenheit

    if (temp <= 10 && windSpeed > 4.8) {
        let t = temp;
        let v = windSpeed;
        let wind_chill_value = 35.74 + (0.6215 * t) - 35.75 * Math.pow (v, 0.16) + 0.4275 * t * Math.pow (v, 0.16);
        return wind_chill_value;
    }else{
        return "N/A";
    }
}

const celsius = 5;//Celcius degree
const windSpeed = 10;// km/h

const temp = (celsius * (9/5)) + 32;// covert to fahrenheit

const windChill= calculateWindChill(temp, windSpeed);
document.getElementById('wind-Chill').textContent = typeof windChill === 'number' ? windChill.toFixed(1) + "°C" : windChill;

//footer content
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last modified: " + document.lastModified;
