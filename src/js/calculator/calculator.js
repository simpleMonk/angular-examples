"use strict";

var angular = require('angular');
var calculatorController = require('./controllers/calculator-controller.js');

angular.module('calculator', [])
    .controller('CalculatorController', ['$scope', calculatorController]);





