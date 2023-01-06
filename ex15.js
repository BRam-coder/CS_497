//https://www.w3schools.com/js/js_function_definition.asp



function handleClickNumber(){
    let x = document.getElementById("input").value;
    document.getElementById("btn1").innerHTML = x;
  //  console.log (x);
}

function handleCheckWeather(){
    let weather = document.getElementById("temp").value;
    
    console.log(weather);
    document.getElementById("weather").innerText = "weather";
    if (weather < 32){
        document.getElementById("weather").innerText = "Freezing weather"
    }else if (weather <= 41){
        document.getElementById("weather").innerText = "Very Cold weather"
    }else if (weather <=52){
        document.getElementById("weather").innerText = "Cold weather"
    }else if (weather <=61){
        document.getElementById("weather").innerText = "It’s nice today!"
    }else {
        document.getElementById("weather").innerText = "It’s warm today!"
    }
}