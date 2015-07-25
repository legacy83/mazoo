'use strict';

angular.module( 'scaffold.foo' )

    .config( [ '$routeProvider', function ( $routeProvider ) {
        $routeProvider.when( '/@foo/edit/:id', {
            templateUrl: 'app/scaffold/foo/foo-edit.html',
            controller: 'FooEditController'
        } );
    } ] )

    .controller( 'FooEditController',
    [ '$scope', '$location', '$routeParams', 'flash', 'fooAPI',
        function ( $scope, $location, $routeParams, flash, fooAPI ) {

            fooAPI.get( $routeParams.id ).success( function ( result ) {
                $scope.model = result;
            } );

            $scope.doEdit = function () {
                fooAPI.put( $scope.model ).success( function () {
                    flash.success( '@foo modified successfully' );
                    $location.path( '/@foo' );
                } );
            };

            $scope.doCancel = function () {
                $location.path( '/@foo' );
            };

        }
    ] );