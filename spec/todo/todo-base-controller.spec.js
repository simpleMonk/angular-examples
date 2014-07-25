var angular = require('angular');

describe("Controller:TodoBaseController", function () {

    var rootScope, scope, baseController;

    beforeEach(function () {
        var app = angular.mock.module('app');
        var todo = angular.mock.module('todo');
    });

    beforeEach(inject(function ($rootScope, $controller, $injector) {
        rootScope = $rootScope;
        scope = rootScope.$new();
        baseController = $controller('TodoBaseController', {
            $scope: scope
        });
    }));

    it("should have a reverse function", function () {
        expect(scope.reverse()).to.be.defined;
    });

    it("should reverse an array", function () {
        var arr = [1, 2, 3, 4];
        var reversedArray = scope.reverse(arr);
        expect(reversedArray).to.eql(arr);
    });

});