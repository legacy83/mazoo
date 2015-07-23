'use strict';

angular.module( 'scaffold.foo' )

    .config( [ '$routeProvider', function ( $routeProvider ) {
        $routeProvider.when( '/@foo/create', {
            templateUrl: 'app/scaffold/foo/foo-create.html',
            controller: 'FooCreateController'
        } );
    } ] )

    .controller( 'FooCreateController',
    [ '$scope', '$location', '$routeParams', 'flash', 'fooAPI',
        function ( $scope, $location, $routeParams, flash, fooAPI ) {

            $scope.model = {};

            $scope.doCreate = function () {
                fooAPI.post( $scope.model ).success( function () {
                    flash.success( '@foo created successfully' );
                    $location.path( '/@foo' );
                } );
            };

            $scope.doCancel = function () {
                $location.path( '/@foo' );
            };

        }
    ] );