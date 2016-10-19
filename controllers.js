weatherApp.controller('mainController', ['$scope', 'forecastService', '$location', function($scope, forecastService, $location){
  $scope.city = forecastService.city;

  $scope.$watch('city', function(){
    forecastService.city = $scope.city;
  })

  $scope.submit = function(){
    $location.path("/forecast")
  }
}])

.controller('forecastController', ['$scope', 'forecastService', 'weatherService', '$routeParams', function($scope, forecastService, weatherService, $routeParams){
  $scope.days = $routeParams.days || 2
  $scope.city = forecastService.city
  $scope.weatherResult = weatherService.getWeather($scope.city, $scope.days);

  $scope.convertToFahrenheit = function(degK){
    return Math.round((1.8*(degK - 273)) + 32)
  }

  $scope.convertToDate = function(date){
    return new Date(date*1000).toLocaleDateString();
  };
}]);
