'use strict';

define( function ( require ) {

    var http = require( 'plugins/http' ),
        apiUtils = require( 'components/apiUtils' );

    var API = {},
        resourceUrl = apiUtils.resourceUrl;

    API.all = function () {
        return http.get( resourceUrl( 'scaffold/foo' ) );
    };

    API.get = function ( identity ) {
        return http.get( resourceUrl( 'scaffold/foo', identity ) );
    };

    API.post = function ( model ) {
        return http.post( resourceUrl( 'scaffold/foo' ), model );
    };

    API.put = function ( model ) {
        return http.put( routeTo( 'scaffold/foo/update', model.id ), model );
    };

    API.destroy = function ( identity ) {
        return http.delete( routeTo( 'scaffold/foo/delete', identity ) );
    };

    return API;

} );