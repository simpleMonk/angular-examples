"use strict";

var angular = require("angular");

var calculatorDirective = function () {
    return{
        restrict: 'A',
        scope: {
            number1: '=',
            number3: '=',
            calculate: '&'
        },
        template: '<input type="text" ng-model="number1"/>{{number1}}' +
            '<input type="text" ng-model="number3"/>{{number3}}',
        link: function (scope, element, attributes, controller) {

        }
    };
};


module.exports = calculatorDirective;