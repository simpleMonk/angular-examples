describe("module:example:understanding scopes", function () {

    var rootScope, scope, exampleController;

    beforeEach(function (done) {
        var app = angular.mock.module('app');
        var example = angular.mock.module('example');
        done();
    });
    beforeEach(inject(function ($rootScope, $controller) {
        rootScope = $rootScope;
        scope = $rootScope.$new();
        exampleController = $controller('ExampleController', {
            $scope: scope
        });
    }));
    it("should have angular loaded", function () {
        expect(angular.version.full).to.equal('1.3.0-beta.14');
    });

    it("should have a message ", function () {
        expect(scope.message).to.equal('Parent Scope Message');
    });
    it("should have a messages ", function () {
        expect(scope.messages).to.eql([1, 2, 3]);
    });

    it("should have a error object ", function () {
        expect(scope.error).to.be.an('object');
        expect(scope.error).to.have.a.property('message');
        expect(scope.error).to.have.a.property('level');
    });

    it("should have errorMessages", function () {
        expect(scope.errorMessages).to.be.an.instanceof(Array);
        expect(scope.errorMessages).to.have.length(2);
    });

});


