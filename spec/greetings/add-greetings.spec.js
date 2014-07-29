"use strict";

var angular = require('angular');
var expect = require('chai').expect;
var sinon = require('sinon');

describe('Directive:addGreetings', function () {
    var helloElement, addGreetingElement, templateHello, templateAddGreeting, scope, rootScope, compile;

    templateHello = '<div hello></div>';
    templateAddGreeting = '<div add-greeting></div>';

    beforeEach(function () {
        angular.mock.module('app');
        angular.mock.module('greetings');
    });

    beforeEach(inject(function ($compile, $rootScope) {
        rootScope = $rootScope;
        compile = $compile;
        scope = rootScope.$new();
    }));

    it("should have addMessage ", function () {
        compileDirectives();
        expect(addGreetingElement.scope().addGreeting).to.exist;
    });

    it("should call controller addOneMoreMessage", function () {
        compileDirectives();
        var helloController = helloElement.controller("hello");
        var addGreetingsScope = addGreetingElement.scope();
        var addOneMoreMessageSpy = sinon.spy(helloController, 'addOneMoreMessage');
        addGreetingsScope.message = "dummy";
        addGreetingsScope.addGreeting();
        expect(addOneMoreMessageSpy.called).to.be.true;
        expect(helloElement.scope().messages).to.eql(["dummy"]);
    });

    function compileDirective(tpl) {
        var elem = angular.element(tpl);
        compile(elem)(scope);
        scope.$digest();
        return elem;
    }

    function compileDirectives() {
        helloElement = compileDirective(templateHello);
        addGreetingElement = angular.element(templateAddGreeting);
        helloElement.append(addGreetingElement);
        addGreetingElement = compileDirective(addGreetingElement);
    }

});