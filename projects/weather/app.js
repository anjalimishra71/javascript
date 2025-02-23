
const apiKey="";
const form=document.querySelector("form");

form.addEventListener('submit',function(e){
   e.preventDefault();
   const cityName=document.getElementById('city-name').value;
   console.log(cityName);
   getWeatherData(cityName)
})

async function getWeatherData(cityname) {
   let url=`http://api.openweathermap.org/data/2.5/weather?q=${cityname},uk&APPID=${apiKey}`; 
//    console.log(url);
   
   const respons=await fetch(url);
   const data=await respons.json();
showWeatherInfo(data)
}

function showWeatherInfo(data){
  console.log(data);
  let imgIcon="http://openweathermap.org/img/w/"+data.weather[0].icon+".png";
  let weatherInfo=document.getElementById('weather-info');
  weatherInfo.innerHTML=`
  <h2>CounteryCode:${data.sys.country}</h2>
  <h3>cityName:${data.name}</h3>
<p>Temperature:${data.main.temp}F|${Math.round(data.main.temp-273.13)}</p>  
<p>Humidity:${data.main.humidity}%</p>
<p>Air Pressure:${data.main.pressure}hpa</p>
<p>Weather cloud:${data.weather[0].description}<img src=${imgIcon} height=25 width=50></p>
<p>Wind Speed:${data.wind.speed}m/s</p>
  `
}














