var angular = require('angular');
var lodash = require('lodash');

describe("module:lodash", function () {
    beforeEach(function () {
        angular.mock.module('app');
        angular.mock.module('lodash');
    });

    it("should have lodash defined", inject(function (_) {
        debugger;
        expect(lodash.VERSION).to.equal(_.VERSION);
    }));
});