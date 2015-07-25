'use strict';

angular.module( 'scaffold.foo', [
    'ngRoute',
    'flashMessages',
    'scaffold.foo.fooAPI'
] )

    .config( [ '$routeProvider', function ( $routeProvider ) {
        $routeProvider.when( '/@foo', {
            templateUrl: 'app/scaffold/foo/foo.html',
            controller: 'FooController'
        } );
    } ] )

    .controller( 'FooController',
    [ '$scope', 'fooAPI', function ( $scope, fooAPI ) {

        fooAPI.all().success( function ( result ) {
            $scope.models = result;
        } );

    } ] );