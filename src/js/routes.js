"use strict";

var angular = require('angular');

angular.module("app").config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(false);

    $routeProvider.when('/calculator', {
        templateUrl: 'templates/calculator/calculator.html',
        controller: 'CalculatorController'
    });

    $routeProvider.otherwise({ redirectTo: '/' });
});