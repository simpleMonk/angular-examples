var angular = require('angular');
var _ = require('lodash');

angular.module('lodash', [])
    .factory('_', function () {
       return _;
    });

