"use strict";

var angular = require('angular'),
    todoController = require('./controllers/todo-controller.js'),
    todoAnotherController = require('./controllers/todo-another-controller.js'),
    todoService = require('./services/todo-service.js'),
    todoFactory = require('./services/todo-factory.js');

angular.module('todo', [])
    .controller('TodoController', ['$scope', 'todoService', 'todoFactory', todoController])
    .controller('TodoAnotherController', ['$scope', 'todoService', 'todoFactory', todoAnotherController])
    .factory('todoFactory', todoFactory)
    .service('todoService', todoService);
