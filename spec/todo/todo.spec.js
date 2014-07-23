describe("module:todo", function () {

    var rootScope, scope, childScope, todoController, todoChildController, todoService;

    beforeEach(function (done) {
        var app = angular.mock.module('app');
        var todo = angular.mock.module('todo');
        done();
    });
    beforeEach(inject(function ($rootScope, $controller, $injector) {
        rootScope = $rootScope;
        scope = $rootScope.$new();
        childScope = scope.$new();
        todoService = $injector.get('todoService');

        todoController = $controller('TodoController', {
            $scope: scope,
            todoService: todoService
        });
        todoChildController = $controller('TodoChildController', {
            $scope: childScope
        });

    }));
    it("should have angular loaded", function () {
        expect(angular.version.full).to.equal('1.3.0-beta.14');
    });

    it("should have a message in todoController", function () {
        expect(scope.message).to.equal('testem message');
    });

    it("should have a messages in todoController", function () {
        expect(scope.messages).to.have.length(2);
    });

    it("should have a message in todoChildController", function () {
        expect(childScope.message).to.equal('testem message');
    });

    it("should have a todoService in todoController", function () {
        expect(scope.todoService).to.be.an('object');
    });

    it("should have a todoServiceMessage in todoController", function () {
        expect(scope.todoServiceMessage.serviceMessage).to.equal('default');
    });

});


