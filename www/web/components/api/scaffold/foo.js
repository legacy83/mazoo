'use strict';

define( function ( require ) {

    var http = require( 'plugins/http' ),
        apiUtils = require( 'components/apiUtils' );

    var API = {},
        routeTo = apiUtils.routeTo;

    API.all = function () {
        return http.get( routeTo( 'scaffold/foo' ) );
    };

    API.get = function ( identity ) {
        return http.get( routeTo( 'scaffold/foo/view', identity ) );
    };

    API.post = function ( model ) {
        return http.post( routeTo( 'scaffold/foo/create' ), model );
    };

    API.put = function ( model ) {
        return http.put( routeTo( 'scaffold/foo/update', model.id ), model );
    };

    API.destroy = function ( identity ) {
        return http.delete( routeTo( 'scaffold/foo/delete', identity ) );
    };

    return API;

} );