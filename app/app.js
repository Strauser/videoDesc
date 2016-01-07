"use strict";

angular.module('videoDesc', ['ngRoute', 'desc_module'])
    .config(function ($routeProvider) {
        $routeProvider.when('/desc/', {
            templateUrl: 'app/descModule/desc.html',
            controller: 'descController'
        }).otherwise({
            redirectTo: '/desc'
        });
    });