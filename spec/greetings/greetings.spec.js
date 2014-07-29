"use strict";

var angular = require('angular');
var expect = require('chai').expect;

describe('module:greetings', function () {

    var greetingsController, rootScope, scope;

    beforeEach(function () {
        angular.mock.module('app');
        angular.mock.module('greetings');
    });

    beforeEach(inject(function ($controller, $rootScope) {
        rootScope = $rootScope;
        scope = rootScope.$new();
        greetingsController = $controller('GreetingsController', {
            $scope: scope
        });
    }));


    it("should have messages", function () {
        expect(scope.messages).to.be.an('array');
    });

    it("should have addMessage ", function () {
        expect(scope.addMessage).to.exist;
        scope.addMessage("something");
        expect(scope.messages).to.have.length(1);
        expect(scope.messages[0]).to.equal('something');
    });

    it("should have addOneMoreMessage", function () {
        expect(greetingsController.addOneMoreMessage).to.exist;
        greetingsController.addOneMoreMessage("something");
        expect(scope.messages).to.have.length(1);
        expect(scope.messages[0]).to.equal('something');
    });


});