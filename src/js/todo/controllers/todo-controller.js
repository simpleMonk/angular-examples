"use strict";

function TodoController($scope, todoService, todoFactory) {
    $scope.message = "testem message";
    $scope.todo = todoService;
    $scope.toodoo = todoFactory;
    $scope.title;
    $scope.changeTodoTitle = function (value) {
        todoFactory.set($scope.title);
    }
}

module.exports = TodoController;