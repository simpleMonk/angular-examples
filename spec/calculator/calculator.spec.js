"use strict";
/*jshint expr: true*/

var angular = require('angular');
var expect = require('chai').expect;

describe("Module:Calculator", function () {
    var calculatorController, rootScope, scope;

    beforeEach(function () {
        angular.mock.module('app');
        angular.mock.module('calculator');
    });

    beforeEach(inject(function ($controller, $rootScope) {
        rootScope = $rootScope;
        scope = rootScope.$new();
        calculatorController = $controller('CalculatorController', {
            $scope: scope
        });
    }));

    it("should have number1", function () {
        expect(scope.number1).to.equal(0);
    });

    it("should have number2", function () {
        expect(scope.number2).to.equal(0);
    });

    it("should add 2 numbers", function () {
        expect(scope.add()).to.be.defined;

        scope.number1 = 2;
        scope.number2 = 2;
        expect(scope.add(scope.number1, scope.number2)).to.equal(4);

        scope.number1 = 3;
        scope.number2 = 2;
        expect(scope.add(scope.number1, scope.number2)).to.equal(5);
    });

    it("should subtract 2 numbers", function () {
        expect(scope.subtract).to.have.been.defined;

        scope.number1 = 2;
        scope.number2 = 2;
        expect(scope.subtract(scope.number1, scope.number2)).to.equal(0);

        scope.number1 = 3;
        scope.number2 = 2;
        expect(scope.subtract(scope.number1, scope.number2)).to.equal(1);

        scope.number1 = 2;
        scope.number2 = 3;
        expect(scope.subtract(scope.number1, scope.number2)).to.equal(-1);
    });

});