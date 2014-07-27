var angular = require('angular'),
    exampleController = require('./controllers/example-controller.js');


angular.module('example', [])
    .controller('ExampleController', exampleController);
