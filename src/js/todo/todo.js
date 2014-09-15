"use strict";

var angular = require('angular'),
todoController = require('./controllers/todo-controller.js'),
todoAnotherController = require('./controllers/todo-another-controller.js'),
todoService = require('./services/todo-service.js'),
todoFactory = require('./services/todo-factory.js'),
personFactory = require('./services/person-factory.js');


angular.module('todo', [])
    .factory('personFactory', personFactory)
    .controller('TodoController', ['$scope', 'todoService', 'todoFactory','$injector','personFactory', todoController])
    .controller('TodoAnotherController', ['$scope', 'todoService', 'todoFactory','personFactory',todoAnotherController])
    .factory('todoFactory', todoFactory)
    .service('todoService', todoService);

