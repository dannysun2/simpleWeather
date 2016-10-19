weatherApp.service('forecastService', function(){
  this.city = 'New York, NY'
})

.service('weatherService', ['$resource', function($resource){
  this.getWeather = function(city, days){
    var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", { callback: "JSON_CALLBACK" }, { get: { method: "JSONP" } });
    return weatherAPI.get( { q: city, cnt: days, appid: '1c6f44a72d608410c35d41f59ea3eb18' } )
  }
}]);
