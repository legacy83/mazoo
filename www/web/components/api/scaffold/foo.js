'use strict';

define( function ( require ) {

    var http = require( 'plugins/http' ),
        apiUtils = require( 'components/apiUtils' );

    var API = {},
        routeTo = apiUtils.routeTo;

    API.all = function () {
        return http.get( 'http://api.192.168.27.14.xip.io/scaffold/foo' );
    };

    API.get = function ( identity ) {
        return http.get( 'http://api.192.168.27.14.xip.io/scaffold/foo/' + identity );
    };

    API.post = function ( model ) {
        return http.post( 'http://api.192.168.27.14.xip.io/scaffold/foo', model );
    };

    API.put = function ( model ) {
        return http.put( routeTo( 'scaffold/foo/update', model.id ), model );
    };

    API.destroy = function ( identity ) {
        return http.delete( routeTo( 'scaffold/foo/delete', identity ) );
    };

    return API;

} );