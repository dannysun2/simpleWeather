weatherApp.directive('forecastDay', function(){
  return {
    templateUrl: 'directives/day.html',
    replace: true,
    scope: {
      forecastObject: '=',
      convertToDate: '&',
      convertToFahrenheit: '&'
    }
  }
});
