'use strict';

define( function ( require ) {

    var API = {},
        http = require( 'plugins/http' ),
        apiUtils = require( 'components/apiUtils' ),
        routeTo = apiUtils.routeTo;

    API.all = function () {
        console.log( routeTo( 'scaffold/to-do' ) );
        return http.get( routeTo( 'scaffold/to-do' ) );
    };

    return API;

} );