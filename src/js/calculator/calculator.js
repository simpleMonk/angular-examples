"use strict";

var angular = require('angular');
var calculatorController = require('./controllers/calculator-controller.js'),
    calculatorDirective = require('./directives/calculator-directive.js');


angular.module('calculator', [])
    .controller('CalculatorController', ['$scope', calculatorController])
    .directive('calci', calculatorDirective);





