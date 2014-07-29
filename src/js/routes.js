"use strict";

var angular = require('angular');

angular.module("app").config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(false);

    $routeProvider.when('/calculator', {
        templateUrl: 'templates/calculator/calculator.html',
        controller: 'CalculatorController'
    });

    $routeProvider.when('/greetings', {
        templateUrl: 'templates/greetings/greetings.html',
        controller: 'GreetingsController'
    });

    $routeProvider.otherwise({ redirectTo: '/' });
});