"use strict";

function helloDirective() {

    var directiveDefinition, linkFn, helloDirectiveController;

    linkFn = function (scope, elem, attributes, controller) {

    };

    directiveDefinition = {
        restrict: 'EA',
        transclude: true,
        controller: 'GreetingsController',
        template: '<div>{{messages.join()}}' +
            '<div ng-transclude></div>' +
            '</div>',
        link: linkFn
    };

    return directiveDefinition;
}

module.exports = helloDirective;