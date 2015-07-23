'use strict';

angular.module( 'scaffold.foo' )

    .config( [ '$routeProvider', function ( $routeProvider ) {
        $routeProvider.when( '/@foo/show/:id', {
            templateUrl: 'app/scaffold/foo/foo-show.html',
            controller: 'FooShowController'
        } );
    } ] )

    .controller( 'FooShowController',
    [ '$scope', '$routeParams', 'fooAPI',
        function ( $scope, $routeParams, fooAPI ) {

            fooAPI.get( $routeParams.id ).success( function ( result ) {
                console.log(result);
                $scope.model = result;
            } );

        }
    ] );