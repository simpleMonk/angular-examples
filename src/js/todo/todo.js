var angular = require('angular');
var TodoBaseController = require('./controllers/todo-base-controller.js');
var TodoController = require('./controllers/todo-controller.js');
var TodoChildController = require('./controllers/todo-child-controller.js');
var todoService = require('./services/todo-service.js');

angular.module('todo', [])
    .controller('TodoBaseController', ['$scope', TodoBaseController])
    .controller('TodoController', ['$scope', 'todoService', TodoController])
    .controller('TodoChildController', ['$scope', 'todoService', TodoChildController])
    .service('todoService', todoService);
