"use strict";

function CalculatorController($scope) {
    $scope.number1 = 0;
    $scope.number2 = 0;

    $scope.add = function (num1, num2) {
        return num1 + num2;
    };

    $scope.subtract = function (num1, num2) {
        return num1 - num2;
    };
}

module.exports = CalculatorController;