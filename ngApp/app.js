var app = angular.module('teamTasksApp', ['ngRoute']);

//This configures the routes and associates each route with a view and a controller
app.config(function ($routeProvider) {
    $routeProvider
    .when('/taskList',
            {
                url: '/',
                controller: 'taskController',
                controllerAs: 'controller',
                templateUrl: '/partials/taskList.html'
            })
        .otherwise({ redirectTo: '/taskList' });
});
