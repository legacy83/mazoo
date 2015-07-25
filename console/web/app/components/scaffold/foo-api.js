'use strict';

angular.module( 'scaffold.foo.fooAPI', [ 'apiUtils' ] )

    .service( 'fooAPI', [ '$http', 'apiUtils', function ( $http, apiUtils ) {

        var API = this,
            routeTo = apiUtils.routeTo;

        API.all = function () {
            return $http.get( routeTo( 'scaffold/foo' ) );
        };

        API.get = function ( identity ) {
            return $http.get( routeTo( 'scaffold/foo/view', identity ) );
        };

        API.post = function ( model ) {
            return $http.post( routeTo( 'scaffold/foo/create' ), model );
        };

        API.put = function ( model ) {
            return $http.put( routeTo( 'scaffold/foo/update', model.id ), model );
        };

        API.destroy = function ( identity ) {
            return $http.delete( routeTo( 'scaffold/foo/delete', identity ) );
        };

    } ] );
