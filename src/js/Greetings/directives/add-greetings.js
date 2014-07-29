"use strict";

var addMessageDirective = function () {
    var directiveDefinition, linkFn;

    linkFn = function (scope, element, attributes, controller) {
        scope.addGreeting = function () {
            /*
             In order to use the shared controller, it should have a method on context "this"
             this.addOneMoreMessage
             */
            controller.addOneMoreMessage(scope.message);
        };
    };

    directiveDefinition = {
        restrict: 'EA',
        require: '^hello',//require ^ to look up in the dom
        template: '<input type="text" ng-model="message"> <br>' +
            '<button ng-click="addGreeting()">Add Message</button>',
        link: linkFn
    };

    return directiveDefinition;
};

module.exports = addMessageDirective;
