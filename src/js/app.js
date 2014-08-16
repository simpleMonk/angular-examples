"use strict";

var angular = require('angular');

angular.module('app', ['ngResource', 'ngRoute', 'todo']).run(function ($rootScope) {
    $rootScope.log = function (thing) {
        console.log(thing);
    };

});

