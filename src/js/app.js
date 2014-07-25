var angular = require('angular');

angular.module('app', ['ngResource', 'ngRoute', 'todo', 'lodash']).run(function ($rootScope) {
    $rootScope.log = function (thing) {
        console.log(thing);
    };

    $rootScope.alert = function (thing) {
        alert(thing);
    };
});

