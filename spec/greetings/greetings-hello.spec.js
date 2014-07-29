"use strict";

var angular = require('angular');
var expect = require('chai').expect;

describe('Directive:Greetings', function () {
    var elem, template, scope, rootScope, compile;

    template = '<div hello></div>';

    beforeEach(function () {
        angular.mock.module('app');
        angular.mock.module('greetings');
    });

    beforeEach(inject(function ($compile, $rootScope) {
        rootScope = $rootScope;
        compile = $compile;
        scope = rootScope.$new();
    }));

    it("should have access to messages", function () {
        compileDirective(template);
        expect(elem.scope().messages).to.be.an('array');
    });

    it("should be able to add new message", function () {
        compileDirective(template);
        scope.addMessage("Hello");
        scope.$apply();
        expect(elem.scope().messages).to.eql(['Hello']);
        expect(elem.html()).to.match(/Hello/);
    });


    function compileDirective(tpl) {
        elem = angular.element(tpl);
        scope.messages = [];
        compile(elem)(rootScope);
        scope.$digest();
    }



});

