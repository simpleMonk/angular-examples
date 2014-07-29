'use strict';

var angular = require('angular');
var expect = require('chai').expect;

describe.only('Directive:calculatorDirective', function () {

    var elem, rootScope, compile, scope, httpBackend;

    beforeEach(function () {
        angular.mock.module('app');
        angular.mock.module('calculator');
    });


    beforeEach(inject(function ($rootScope, $compile, $injector) {
        rootScope = $rootScope;
        compile = $compile;
        scope = $rootScope.$new();
        httpBackend = $injector.get('$httpBackend');
    }));


    it('should have id attribute', function () {
        compileCalculatorDirective();
        expect(elem.attr('id')).to.equal('id1');
    });

    it('should have number1-initial value', function () {
        compileCalculatorDirective();
        /*
         From Angular 1.2.21, element.isolateScope is available to access the isolatescope objects
         while scope gets the non isolate scope objects
         */
        expect(elem.isolateScope().number1).to.equal(elem.scope().number1);
    });

    it('should have number1-new value', function () {
        compileCalculatorDirective();
        scope.number1 = 10;
        scope.$apply();
        expect(elem.isolateScope().number1).to.equal(elem.scope().number1);
    });

    it('should have number3-initial value', function () {
        compileCalculatorDirective();
        expect(elem.isolateScope().number3).to.equal(4);
    });

    it('should have number3-new value', function () {
        compileCalculatorDirective();
        scope.number2 = 10;
        scope.$apply();
        expect(elem.isolateScope().number3).to.equal(elem.scope().number2);
    });


    function compileCalculatorDirective() {
        elem = angular.element('<div calci id="id1" number1="number1" number3="number2"></div>');
        //we can pass initial values
        scope.number1 = 4;
        scope.number2 = 4;
        compile(elem)(scope);
        scope.$digest();
    }

});