function todoChildController($scope, todoService) {
    /*
     Commenting out the below code should work because
     message and messages are in todoController(parent) and
     prototypically inherited

     if commented out , prototypical inheritance is in play and  any changes to
     objects/arrays will change the parent values as well.

     Having its own property and objects ensure that
     the changes are not reflected in the parent
     */
    $scope.message = "testem message";
    $scope.messages = [
        {title: 'default', detail: 'detailed message'},
        {title: 'default', detail: 'detailed message'}
    ];

    /*
     no matter what, services share the same instance
     except for primitive vs object
     $scope.todoService = todoService;
     $scope.todoServiceMessage = todoService.serviceMessage;
     todoService and todoServiceMessage are prototypicaly inhertied by childController

     */

    $scope.todoService = todoService;
    $scope.todoServiceMessage = todoService;

    $scope.todoServiceAnother = todoService;
    $scope.todoServiceMessageAnother = todoService.serviceMessage;
}


module.exports = todoChildController;