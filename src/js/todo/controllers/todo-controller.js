function TodoController($scope, todoService) {
    $scope.message = "testem message";
    $scope.messages = [
        {title: 'default', detail: 'detailed message'},
        {title: 'default', detail: 'detailed message'}
    ];
    $scope.todoService = todoService;
    $scope.todoServiceMessage = todoService;
}

module.exports = TodoController;
