var todoController = require('./controllers/todo-controller.js');
var todoChildController = require('./controllers/todo-child-controller.js');
var todoService = require('./services/todo-service.js');

angular.module('todo', [])
    .controller('TodoController', ['$scope', 'todoService', todoController])
    .controller('TodoChildController', ['$scope', 'todoService', todoChildController])
    .service('todoService', todoService);
