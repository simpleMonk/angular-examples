/*
 Task
 To demonstrate scope are prototypically inherited by showing
 primitive and object in parent scope as well as child scope
 child scopes are either created new/ inherited from parent scope.
 new child scope is created when a new html fragement is in play like
 1. ng-if
 2. ng-include
 3. ng-switch
 4. directive with scope set to true or isolate scope

 */
function exampleController($scope) {
    $scope.message = "Parent Scope Message";
    $scope.messages = [1, 2, 3];

    $scope.error = {
        message: 'default message',
        level: 0
    };

    $scope.errorMessages = [
        {
            message: 'default message',
            level: 0
        },
        {
            message: 'default message',
            level: 0
        }
    ];
}

module.exports = exampleController;
