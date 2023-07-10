let Weather_Key = {
    "apiKey" : "6b52e6b52208d46b42664316525e7ebc",

    // to fetch weather 

    fetchWeather : function (city){
        fetch(
           "https://api.openweathermap.org/data/2.5/weather?q="+ city +"&units:metric&appid=" +this.apiKey
        ).then((response)=>response.json()).then((data)=> this.displayWeather(data));
    },

    displayWeather : function (data){
        const {name} = data ;
        const {icon , description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        // console.log(name , icon , description , temp , humidity , speed)
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText =
      "Wind speed: " + speed + " km/h";
      document.querySelector(".weather").classList.remove("loading");
        
    },
    search : function(){
        this.fetchWeather(document.querySelector(".search_bar").value);
    },
};

document.querySelector(".search button").addEventListener("click", function () {
    Weather_Key.search();
  });

  document.querySelector(".search_bar").addEventListener("keyup" ,function(event){
    if (event.key == "Enter"){
        Weather_Key.search();
    }

  });

  Weather_Key.fetchWeather("egypt");