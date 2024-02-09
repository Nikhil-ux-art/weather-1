var inputvalue = document.querySelector('#cityinput')
var btn = document.querySelector('#add');
var city= document.querySelector('#cityoutput')
var temp = document.querySelector('#temp')
var description = document.querySelector('#description')
var wind = document.querySelector('#wind')

apik="d69072ef233c9fbef93552fff28a1c3b"

function convertion(val)
{
    return (val-273).toFixed(3)
}

btn.addEventListener('click',function()
{   

    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid='+apik)
    .then(res => res.json())
    
    .then(data =>
     {
       var nameval= data['name']
       var descrip = data['weather']['0']['descrition']
       var temprature = data['main']['temp']
       var windspeed= data['wind']['speed']
      // console.log(data)
     city.innerHTML =`Weather of <span>${nameval}<span>`
     temp.innerHTML =`Temprature: <span>${ convertion(temprature)} C</span>`
     description.innerHTML = `Sky Conditions: <span>${descrip}<span>`
     wind.innerHTML = `Wind Speed: <span>${windspeed} km/h<span>`

    })
    .catch(err => alert('You entered Wrong city name'))
    })





