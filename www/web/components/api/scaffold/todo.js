'use strict';

define( function ( require ) {

    var API = {},
        http = require( 'plugins/http' ),
        apiUtils = require( 'components/apiUtils' ),
        routeTo = apiUtils.routeTo;

    window.http = http;

    API.all = function () {
        return http.get( 'http://api.192.168.27.14.xip.io/scaffold/to-do' );
    };

    return API;

} );