async function fetchData(cityName){
    const response=await fetch("https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid=df8f0bfa45fef6f9476d82c46e4fac12&units=metric");
    var data=await response.json();
    console.log(data);
    if(response.status==404){
        document.querySelector('.cityName').innerHTML="Not Found";
        document.querySelector('.temp').innerHTML="--";
       document.querySelector('.humidity-value p').innerHTML="--";
       document.querySelector('.wind-value p').innerHTML="--";
       document.querySelector('.weather-details').style.display="block"

    }else{
    document.querySelector('.cityName').innerHTML=data.name;
    document.querySelector('.temp').innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector('.humidity-value p').innerHTML=data.main.humidity +"%";
    document.querySelector('.wind-value p').innerHTML=data.wind.speed +"km/h";
    document.querySelector('.weather-details').style.display="block"
    }
    if(data.weather[0].main=="Haze"){
        document.querySelector('.middle-part img').src="clear.png";
    }else if(data.weather[0].main=="Clouds"){
        document.querySelector('.middle-part img').src="clouds.png";   
    }else if(data.weather[0].main=="Rain"){
        document.querySelector('.middle-part img').src="rain.png";   
    }else if(data.weather[0].main=="Drizzle"){
        document.querySelector('.middle-part img').src="drizzle.png";   
    }else if(data.weather[0].main=="Snow"){
        document.querySelector('.middle-part img').src="snow.png";   
    }else if(data.weather[0].main=="Mist"){
        document.querySelector('.middle-part img').src="mist.png";   
    }
    

}
const clickIcon=document.querySelector('.searchIcon');
clickIcon.addEventListener('click',()=>{
    let inputValue=document.querySelector('input');
    cityName=inputValue.value;
    fetchData(cityName)
})