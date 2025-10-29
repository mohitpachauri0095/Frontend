
window.addEventListener('DOMContentLoaded' ,function() {

        displayData("Delhi")
})


const apikey = `48cad99c4e507899f7ec149ff1962fd9`


const input  = document.querySelector(".search").addEventListener("keydown" , function(event){
    if(event.key === "Enter"){
        displayData()
    }
})



const displayData = (city)=>{
let search = document.querySelector(".search");

search_value = city  || search.value.trim();



search.value = "";

const api= `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${search_value}`

 weatherData(api)
}





async function weatherData(api){

    const response = await fetch (api + `&appid=${apikey}`)

    if(response.ok){
        let data = await response.json();
    

    document.querySelector(".temperature").innerText = data.main.temp + " " + "celcius";
    document.querySelector(".city-name").innerHTML = data.name;

    }else{

        document.querySelector(".temperature").innerText = "----";
        document.querySelector(".city-name").innerHTML = "City not found ";


    }

}


