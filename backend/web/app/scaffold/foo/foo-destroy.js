'use strict';

angular.module( 'scaffold.foo' )

    .config( [ '$routeProvider', function ( $routeProvider ) {
        $routeProvider.when( '/@foo/destroy/:id', {
            templateUrl: 'app/scaffold/foo/foo-destroy.html',
            controller: 'FooDestroyController'
        } );
    } ] )

    .controller( 'FooDestroyController',
    [ '$scope', '$location', '$routeParams', 'flash', 'fooAPI',
        function ( $scope, $location, $routeParams, flash, fooAPI ) {

            fooAPI.get( $routeParams.id ).success( function ( result ) {
                $scope.model = result;
            } );

            $scope.doDestroy = function () {
                fooAPI.destroy( $scope.model.id ).success( function () {
                    flash.success( '@foo destroyed successfully' );
                    $location.path( '/@foo' );
                } );
            };

            $scope.doCancel = function () {
                $location.path( '/@foo' );
            };

        }
    ] );