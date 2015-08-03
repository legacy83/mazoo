'use strict';

define( function ( require ) {

    var API = {},
        http = require( 'plugins/http' ),
        apiUtils = require( 'components/apiUtils' ),
        resourceUrl = apiUtils.resourceUrl;

    API.all = function () {
        return http.get( resourceUrl( 'scaffold/to-do' ) );
    };

    return API;

} );