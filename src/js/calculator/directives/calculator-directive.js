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
        template: '<input type="text" ng-model="number1"/>{{number1}} <br>' +
            '<input type="text" ng-model="number3"/>{{number3}} <br>' +
            '<button  ng-click="btnClick()"> calculate </button> <br>' +
            '{{result}}',
        link: function (scope, element, attributes, controller) {
            scope.result = 0;
            scope.btnClick = function () {
                scope.result = scope.calculate({num1: parseInt(scope.number1), num2: parseInt(scope.number3)});
            };
        }
    };
};

module.exports = calculatorDirective;