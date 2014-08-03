"use strict";

function TodoAnotherController($scope, todoService, todoFactory) {
    $scope.todoTitle = todoService;
    $scope.toodoo = todoFactory;
}

module.exports = TodoAnotherController;