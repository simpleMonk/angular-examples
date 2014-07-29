"use strict";

var angular = require('angular');

angular.module('app', ['ngResource', 'ngRoute', 'calculator','greetings']).run(function ($rootScope) {
    $rootScope.log = function (thing) {
        console.log(thing);
    };
});

