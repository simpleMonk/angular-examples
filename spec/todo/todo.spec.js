describe("module:todo", function () {

    var rootScope, scope, todoController;

    /* beforeEach(function () {
     module('app');
     module('todo');
     });

     beforeEach(function ($rootScope, $controller) {
     rootScope = $rootScope;
     scope = $rootScope.$new();r
     todoController = $controller('todoController', {
     $scope: scope
     });
     });
     */
    it("should have a message in todoController", function () {
        expect(1 + 1).to.equal(2);
    });

    it("should have a message in todoController", function () {
        console.log(angular);
        expect(angular).to.be.defined();
    })

});


