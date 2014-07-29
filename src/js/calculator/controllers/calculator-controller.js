"use strict";


function CalculatorController($scope) {
    $scope.number1 = 0;
    $scope.number2 = 0;

    $scope.add = function () {
        return $scope.number1 + $scope.number2;
    };

    $scope.subtract = function () {
        return $scope.number1 - $scope.number2;
    };
}

module.exports = CalculatorController;