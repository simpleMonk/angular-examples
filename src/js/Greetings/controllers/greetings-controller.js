"use strict";

function GreetingsController($scope) {
    $scope.messages = [];

    $scope.addMessage = function (msg) {
        $scope.messages.push(msg);
    };

    this.addOneMoreMessage = function (msg) {
        $scope.messages.push(msg);
    };

}

module.exports = GreetingsController;