//Setting up route
window.app.config(function($routeProvider, $locationProvider) {
  // $locationProvider.html5Mode(true);
  $routeProvider
  .when('/', { templateUrl: 'views/index.html' })
  .when('/nfl', { templateUrl: 'views/nfl.html' })
  .otherwise({redirectTo: '/'});
});

//Removing tomcat unspported headers
window.app.config(['$httpProvider', function($httpProvider, Configuration) {
    //delete $httpProvider.defaults.headers.common["X-Requested-With"];
}]);

//Setting HTML5 Location Mode
window.app.config(['$locationProvider', function($locationProvider) {
    //$locationProvider.html5Mode(true);
    $locationProvider.hashPrefix("!");
}]);
