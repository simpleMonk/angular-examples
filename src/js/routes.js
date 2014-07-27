var angular = require('angular');

angular.module("app").config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(false);

    $routeProvider.when('/scopes', {
        templateUrl: 'templates/example/main.html',
        controller:"ExampleController"
    });

    $routeProvider.otherwise({ redirectTo: '/' });
});