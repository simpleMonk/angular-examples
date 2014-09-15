"use strict";

function TodoController($scope, todoService, todoFactory,$injector,Person) {
    $scope.message = "testem message";
    $scope.todo = todoService;
    $scope.toodoo = todoFactory;
    $scope.title;
    $scope.changeTodoTitle = function (value) {
        todoFactory.set($scope.title);
    };

    $scope.senthil = new Person({name:'Senthil',department:'Mech'});


}

module.exports = TodoController;