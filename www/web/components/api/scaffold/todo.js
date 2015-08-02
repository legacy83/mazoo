'use strict';

define( function ( require ) {

    var API = {},
        http = require( 'plugins/http' ),
        apiUtils = require( 'components/apiUtils' ),
        routeTo = apiUtils.routeTo;

    API.all = function () {
        return http.get( routeTo( 'scaffold/to-do' ) );
    };

    return API;

} );