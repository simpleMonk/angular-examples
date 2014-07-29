"use strict";

var angular = require('angular');
var greetingsController = require('./controllers/greetings-controller.js'),
    helloDirective = require('./directives/greetings-hello.js'),
    addMessageDirective = require('./directives/add-greetings.js');

angular.module('greetings', [])
    .controller('GreetingsController', ['$scope', greetingsController])
    .directive('hello', helloDirective)
    .directive('addGreeting', addMessageDirective);
