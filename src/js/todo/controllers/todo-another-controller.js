"use strict";

function TodoAnotherController($scope, todoService, todoFactory,Person) {
    $scope.todoTitle = todoService;
    $scope.toodoo = todoFactory;

    $scope.senthil = new Person({name:'Senthil-kumar',department:'Mechanical'});


}

module.exports = TodoAnotherController;