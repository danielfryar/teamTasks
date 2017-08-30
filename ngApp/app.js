var app = angular.module('teamTasksApp', ['ngRoute']);

//This configures the routes and associates each route with a view and a controller
app.config(function ($routeProvider) {
    $routeProvider
    .when('/taskList',
            {
                controller: 'taskController',
                templateUrl: '/ngApp/partials/taskList.html'
            })
        //Define a route that has a route parameter in it (:customerID)
        .when('/newTask',
            {
                controller: 'newTaskController',
                templateUrl: '/ngApp/partials/newTask.html'
            })
        .otherwise({ redirectTo: '/taskList' });
});
