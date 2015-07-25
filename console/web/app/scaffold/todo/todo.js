'use strict';

angular.module( 'scaffold.todo', [
    'ngRoute',
    'scaffold.todo.todoAPI'
] )

    .config( [ '$routeProvider', function ( $routeProvider ) {
        $routeProvider.when( '/@todo', {
            templateUrl: 'app/scaffold/todo/todo.html',
            controller: 'TodoController'
        } );
    } ] )

    .controller( 'TodoController',
    [ '$scope', 'todoAPI', function ( $scope, todoAPI ) {

        todoAPI.all().success( function ( data ) {
            $scope.models = data;
        } );

    } ] );